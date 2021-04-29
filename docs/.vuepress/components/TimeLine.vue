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
    <div class="line_body" :style="{ width: widthIf ? '60%' : '85%' }">
      <div
        v-for="(parItem, index) in this.list"
        :key="index"
        class="line_block"
      >
        <div class="line_block_tag">
          <span>{{ parItem[0].upTime }}</span
          ><span
            class="close_btn"
            v-if="openId === index"
            @click="switchChange('')"
            >关闭<span class="arrow"></span></span
          ><span
            class="close_btn"
            v-if="openId !== index"
            @click="switchChange(index)"
            >展开<span class="arrow"></span
          ></span>
        </div>
        <div :class="openId === index ? 'line_li_body' : 'close_line_li_body'">
          <router-link
            v-for="childItem in parItem"
            :key="childItem.path"
            :to="childItem.path"
            :class="widthIf ? 'line_li' : 'line_li_small'"
          >
            <!-- <div class="line_li_time_body"> -->
            {{ childItem.title }}
            <div class="line_li_time">
              <img
                class="line_li_time_icons"
                src="../public/assets/logo/clock.svg"
              />{{ childItem.lastUpdated }}
            </div>
            <!-- </div> -->
            <!-- <span class="right_icon">&#8250;</span> -->
          </router-link>
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
import { resolveSidebarItems } from "../theme/util";
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
      isSidebarOpen: false,
      widthIf: null,
      showLoading: true,
      list: [],
      openId: "",
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
    this.getAllList();
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
    timeArr() {
      //[[a]]
      //二维数组转为一维数组
      return function(arr) {
        let res = arr.reduce((pre, cur) => {
          pre = pre.concat(cur);
          return pre;
        }, []);
        return res;
      };
    },
    months() {
      return function(time) {
        return moment(time).format("YYYY-MM");
      };
    },
  },

  methods: {
    //开关变化
    switchChange(index) {
      this.openId = index;
    },
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
        if (dx > 0 && this.touchStart.x <= 80) {
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
    getAllList() {
      const arr = this.$site.pages.map((v) => {
        return {
          ...v,
          time: this.timeNumber(v.lastUpdated),
        };
      });
      const arrNext = arr.filter(
        (v) =>
          v.time > 0 && v.path !== "/" && v.frontmatter && !v.frontmatter.layout
      );
      //倒序big->little
      const listPrev = arrNext.sort((a, b) =>
        this.timeNumber(a.lastUpdated) > this.timeNumber(b.lastUpdated) ? -1 : 1
      );
      //时间轴二维数组生成
      const list = listPrev.reduce((pre, cur) => {
        let time = this.months(cur.lastUpdated);
        let has = this.timeArr(pre).findIndex((v) => v.upTime === time) > -1;
        if (has) {
          pre.map((v) => {
            let res = v;
            if (v.findIndex((m) => m.upTime === time) > -1) {
              res.push({ ...cur, ...{ upTime: time } });
            }
            return res;
          });
          return pre;
        } else {
          pre.push([{ ...cur, ...{ upTime: time } }]);
          return pre;
        }
      }, []);
      this.list = list;
    },
  },
};
</script>
<style lang="stylus">
.line_body
  position relative
  margin 0 auto
  padding-top 30px
.line_block_tag
  font-size: 22px;
  font-family: fantasy;
  font-style: italic;
  margin-bottom: 15px;
.line_li_body,.close_line_li_body
  border-left 6px solid rgba(0,0,0,.07)
  border-radius: 4px;
.close_line_li_body
  height 420px
  overflow hidden
.close_btn
  cursor pointer
  font-size: 15px;
  float: right;
  font-style: normal;
  font-weight: 600;
.arrow
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 6px solid #666;
  margin-left: 5px;
.line_li,.line_li_small
  display flex
  position relative
  align-items center
  justify-content space-between
  padding 23px 20px
  color #666
  border-radius 6px
  margin-left -5px
  font-size 15px
  &:hover
    color rgb(62, 175, 124)
    background rgba(62, 175, 124, 0.15)
    &::before
      width 7px
      height 7px
      background rgb(62, 175, 124)

  .line_li_time
    display flex
    align-items center
    font-size 13px
    margin-top 3px
    .line_li_time_icons
      width 13px
      margin-right 5px
  .right_icon
    font-size 30px
    color rgb(62, 175, 124)
.line_li::before
  content ''
  position absolute
  left 5px
  width 5px
  height 5px
  border-radius 50%
.line_li_time_body
  display flex
.line_li_small
  flex-direction column
  align-items flex-start
</style>
