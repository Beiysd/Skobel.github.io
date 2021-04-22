<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-20 18:01:42
 * @LastEditTime: 2021-04-22 19:08:00
-->
<template>
  <main class="page">
    <h3 class="page_title" v-if="bigSize">{{ $page.title }}</h3>
    <h3 class="page_title_smal" v-else-if="!bigSize">
      {{ $page.title }}
    </h3>
    <ul :class="bigSize ? 'uls' : 'uls_small'">
      <li class="lis" title="标签">
        <img class="icons" src="../../public/assets/logo/tag.svg" />{{
          $page.frontmatter.tag
        }}
      </li>
      <li class="lis" title="更新时间">
        <img class="icons" src="../../public/assets/logo/clock.svg" />{{
          this.times()
        }}
      </li>
      <li class="lis" title="浏览人数">
        <img class="icons" src="../../public/assets/logo/eye.svg" />{{
          this.visite
        }}
      </li>
    </ul>
    <slot name="top" />

    <Content class="theme-default-content" />
    <!-- 更新时间 -->
    <!-- <PageEdit /> -->

    <!-- 上一页/下一页 -->
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <!-- <button @click="messShow">click</button> -->
    <BackTop />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import BackTop from "@theme/components/BackTop.vue";
import moment from "moment";
import { getCount } from "../util/tongji";

export default {
  components: { PageEdit, PageNav, BackTop },
  props: ["sidebarItems"],
  data() {
    return {
      bigSize: true,
      visite: 0,
      pathurl: "",
    };
  },
  watch: {
    // 监听路由变化
    "$route.path": function(newVal, oldVal) {
      // console.log(`new_path = ${newVal}, old_path = ${oldVal}`);
      this.visiteChange();
    },
  },

  mounted() {
    this.pathurl = this.$page.path;
    window.addEventListener("resize", this.sizeChange, true);
    this.visiteChange();
  },
  destroyed() {
    window.removeEventListener("resize", this.sizeChange, true);
  },

  methods: {
    messShow() {
      console.log("=======", this.$page, this.$site);
    },
    sizeChange() {
      let widths = document.documentElement.clientWidth || 0;
      if (widths <= 400) {
        this.bigSize = false;
      } else {
        this.bigSize = true;
      }
    },
    visiteChange: async function() {
      const num = await getCount(this.$page.path);
      this.visite = num;
    },
  },
  computed: {
    times() {
      return function() {
        return moment(this.$page.lastUpdated).format("YYYY-MM-DD");
      };
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  margin-top 5rem
  padding-bottom 2rem
  display block

.page_title
  padding 0 2rem
  text-align center

.page_title_smal
  padding 0 1.5rem
  text-align center

.uls
  display flex
  align-items center
  justify-content center
  margin-bottom: -2.5rem;
  padding: 0 2.5rem;

.uls_small
  display flex
  align-items center
  justify-content center
  margin-bottom: -2.5rem;
  padding: 0 0.5rem;

.lis
  list-style none
  display flex
  margin-right: 1rem;
  align-items center
  cursor default
  font-size: 15px
  font-weight: 500
  color: #999

.icons
  width 15px
  margin-right 3px
</style>
