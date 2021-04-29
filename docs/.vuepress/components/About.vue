<!--
 * @name:
 * @author: wuxd
 * @Date: 2021-04-29 11:43:27
 * @LastEditTime: 2021-04-29 14:00:46
-->
<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <div v-if="!this.showLoading">
      <Navbar
        v-if="shouldShowNavbar"
        @toggle-sidebar="toggleSidebar"
        v-on:getWidthIf="getWidthIf"
      />

      <div class="sidebar-mask" @click="toggleSidebar(false)" />

      <Sidebar
        :items="sidebarItems"
        @toggle-sidebar="toggleSidebar"
        :widthIf="widthIf"
        v-if="!widthIf"
      >
        <template #top>
          <slot name="sidebar-top" />
        </template>
        <template #bottom>
          <slot name="sidebar-bottom" />
        </template>
      </Sidebar>
      <HomeBanner :widthIf="widthIf" />
    </div>
    <div class="about_container" :style="{ width: widthIf ? '60%' : '85%' }">
      <!-- tag标签集 -->
      <div class="tags_body">
        <router-link
          class="tags_li"
          v-for="items in this.tagList"
          :key="items.link"
          :to="items.link"
          :style="{ background: colorRandom() }"
        >
          {{ items.tag }}
        </router-link>
      </div>
      <!-- 能力列表 -->
      <div class="alility_press">
        <div
          v-for="items in this.abilitList"
          :key="items.name"
          class="press_body"
        >
          <div class="press_name">{{ items.name }}</div>
          <li
            class="press_li"
            :style="{
              width: `${Number(items.progress) * 0.6}%`,
              background: items.color,
            }"
          ></li>
          <div class="press_tag">{{ items.progress }}%</div>
        </div>
      </div>
    </div>
    <Footer />
    <Loading v-if="this.showLoading" />
  </div>
</template>

<script>
import HomeBanner from "@theme/components/HomeBanner.vue";
import Navbar from "@theme/components/Navbar.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import Footer from "@theme/components/Footer.vue";
import Loading from "@theme/components/Loading.vue";
import { resolveSidebarItems, colorRandom } from "../theme/util";
import moment from "moment";

export default {
  name: "TimeLine",

  components: {
    HomeBanner,
    Sidebar,
    Navbar,
    Footer,
    Loading,
  },

  data() {
    return {
      colorRandom,
      isSidebarOpen: false,
      widthIf: null,
      showLoading: true,
      tagList: [],
      abilitList: [
        { name: "React", progress: "75", color: "#1890ff" },
        { name: "Vue", progress: "60", color: "#52c41a" },
        { name: "Taro", progress: "60", color: "#52c41a" },
        { name: "Next.js", progress: "10", color: "#13c2c2" },
        { name: "CSS", progress: "75", color: "#fadb14" },
        { name: "JavaScript", progress: "75", color: "#faad14" },
        { name: "JQuery", progress: "50", color: "#f5222d" },
      ],
    };
  },
  beforeCreate() {
    this.showLoading = true;
  },
  mounted() {
    this.showLoading = false;

    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
    this.getTagList();
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
    timeNumber() {
      return function(str) {
        return str ? moment(str).valueOf() : 0;
      };
    },
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 75) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
    //接收窗口宽度变化
    getWidthIf(value) {
      this.widthIf = value;
    },
    //标签云
    getTagList() {
      let arr = this.$site.pages.reduce((pre, cur) => {
        if (
          cur.frontmatter &&
          cur.frontmatter.tag &&
          pre.findIndex((v) => v.tag === cur.frontmatter.tag) === -1
        ) {
          pre.push({ tag: cur.frontmatter.tag, link: cur.path });
          return pre;
        } else {
          return pre;
        }
      }, []);
      this.tagList = arr;
    },
  },
};
</script>
<style lang="stylus">
.about_container
  margin 0 auto
  padding-top 30px
.alility_press
  padding-top 30px
.press_body
  display flex
  align-items center
  max-width 450px
  padding: 5px;
  font-size: 18px;
  font-family: cursive;
  .press_name
    width 105px
  .press_li
    list-style none
    height 8px
    border-radius 5px
    opacity 0.8
  .press_tag
    font-size: 14px;
    margin-left 10px
    font-family: fangsong;
</style>
