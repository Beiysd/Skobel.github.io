<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-28 17:09:43
 * @LastEditTime: 2021-04-28 17:11:22
-->
<template>
  <div class="banner" :style="{ height: widthIf ? '350px' : '150px' }" />
</template>
<script>
export default {
  name: "HomeBanner",
  props: ["widthIf"],
};
</script>

<style lang="stylus">
.banner
  margin-top 60px
  text-align: center
  overflow: hidden
  height: 350px
  background: url(/assets/md-imgs/home/bg01.jpeg) center center / cover no-repeat
</style>
