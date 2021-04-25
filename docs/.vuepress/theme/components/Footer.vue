<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-25 15:46:37
 * @LastEditTime: 2021-04-25 16:37:00
-->
<template>
  <div class="footer">
    这是首页底部-建设中...<br />访问量：{{ this.visite }}
    <ul>
      <li v-for="items in this.links" :key="items.title" class="footer_li">
        <router-link v-if="items.link" :to="items.link" class="link_text">
          <img class="foot_icons" :src="items.icons" />{{ items.title }}
        </router-link>
        <div v-if="items.email" class="no_link_text">
          <img class="foot_icons" :src="items.icons" />{{ items.email }}
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { getCount } from "../util/tongji";

export default {
  name: "Footer",
  data() {
    return {
      visite: 0,
      links: [
        {
          title: "GitHub",
          icons: require("../../public/assets/md-imgs/footer/github.svg"),
          link: "https://github.com/Beiysd",
        },
        {
          title: "Gitee",
          icons: require("../../public/assets/md-imgs/footer/gitee.svg"),
          link: "https://github.com/Beiysd",
        },
        {
          title: "CSDN",
          icons: require("../../public/assets/md-imgs/footer/csdn.svg"),
          link: "https://github.com/Beiysd",
        },
        {
          title: "Email",
          icons: require("../../public/assets/md-imgs/footer/email2.svg"),
          email: "beiysd@126.com",
        },
      ],
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
  height 100px
  background #fff
  color #999
  font-size 13px
  box-shadow 0 0 6px #ccc
.footer_li
  list-style none

.no_link_text
  display flex
  align-items center
  font-weight 600
.link_text
  display flex
  align-items center
  color #999
  font-weight 600
.link_text:hover
  color rgb(62, 175, 124)
  text-decoration underline
.foot_icons
  width 15px
  margin-right 5px
</style>
