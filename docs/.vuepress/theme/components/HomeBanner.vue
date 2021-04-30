<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-28 17:09:43
 * @LastEditTime: 2021-04-30 13:41:14
-->
<template>
  <div class="banner_body">
    <div class="banner" :style="{ height: widthIf ? '350px' : '150px' }" />
  </div>
</template>
<script>
export default {
  name: "HomeBanner",
  props: ["widthIf"],
};
// width 130%
// animation banAnim 20s linear infinite
</script>

<style lang="stylus">
.banner_body
  width 100%
  overflow hidden
.banner
  margin-top 60px
  text-align: center
  overflow: hidden
  height: 350px
  background: url(/assets/md-imgs/home/bg01.jpeg) center center / cover no-repeat

@-webkit-keyframes banAnim
  0%
    margin-left 0
  50%
    margin-left -30%
  100%
    margin-left 0
</style>
