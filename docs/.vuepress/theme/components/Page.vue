<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-20 18:01:42
 * @LastEditTime: 2021-04-20 18:54:03
-->
<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <!-- 更新时间 -->
    <PageEdit />

    <!-- 上一页/下一页 -->
    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <button @click="goTop">up</button>
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue";
import PageNav from "@theme/components/PageNav.vue";
import $ from "jquery";

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  methods: {
    goTop() {
      let times = 100; //返回顶部的时间-默认100ms,最大为500ms
      if (window) {
        times = window.scrollY > 500 ? 500 : window.scrollY;
        $("html,body").animate({ scrollTop: 0 }, times);
      }
    },
  },
};
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block
</style>
