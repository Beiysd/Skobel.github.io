<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-28 13:56:27
 * @LastEditTime: 2021-04-28 15:31:26
-->
<template>
  <div class="loading">
    <img class="load_img" :src="this.loadImg" />
    <div>加载中......</div>
  </div>
</template>
<script>
export default {
  name: "Loading",
  data() {
    return {
      show: false,
      //   loadImg: require("../../public/assets/gif/pk_line.gif"),
      loadImg: require("../../public/assets/gif/bow.jpeg"),
    };
  },
};
// src url(/assets/font/font_test.ttf) format("truetype")
</script>

<style lang="stylus">
.loading
  width 100vw
  height 100vh
  display flex
  flex-direction column
  align-items center
  justify-content center
  font-family cursive
  font-size 20px

.load_img
  width 150px
  height 150px
  border-radius 50%
  animation loaders 3s linear infinite
@-webkit-keyframes loaders
  0%
    transform rotate(0 deg)
  100%
    transform rotate(360 deg)
</style>
