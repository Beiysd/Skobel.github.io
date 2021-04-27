<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-25 15:46:37
 * @LastEditTime: 2021-04-27 17:07:18
-->
<template>
  <div class="footer">
    访问量：{{ this.visite }}<br />
    vuepress@1.0 + 自定义主题theme + 百度统计
  </div>
</template>
<script>
import { getCount } from "../util/tongji";

export default {
  name: "Footer",
  data() {
    return {
      visite: 0,
    };
  },
  mounted() {
    this.visiteChange();
  },
  methods: {
    toParent() {
      this.$emit("getChild", this.visite);
    },
    visiteChange: async function() {
      const num = await getCount("home");
      this.visite = num;
      this.toParent();
    },
  },
};
</script>

<style lang="stylus">
.footer
  display flex
  align-items center
  justify-content center
  margin-top 30px
  padding 10px 0
  width 100%
  background #fff
  color #999
  font-size 13px
  box-shadow 0 0 6px #ccc
  color: rgb(62,175,124);
  font-weight 500
</style>
