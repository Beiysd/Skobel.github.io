<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-21 08:55:24
 * @LastEditTime: 2021-04-21 15:07:40
-->
<template>
  <div class="back_top_content">
    <img
      v-if="this.show"
      class="back_top"
      src="../../public/assets/logo/back_top.svg"
      @click="goTop"
    />
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    goTop() {
      let times = 50; //返回顶部的时间-默认100ms,最大为500ms
      if (window) {
        times = window.scrollY > 350 ? 350 : window.scrollY;
        $("html,body").animate({ scrollTop: 0 }, times);
      }
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
      if (scrollTop > 50) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>
<style scoped>
.back_top_content {
  position: fixed;
  bottom: 30px;
  right: 20px;
  z-index: 1000;
}
.back_top {
  width: 32px;
  height: 37px;
  cursor: pointer;
}
.back_top:hover {
  transform: scale(1.1);
  cursor: pointer;
}
</style>
