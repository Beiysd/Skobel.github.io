<template>
  <div class="home_container">
    <div class="banner" :style="{ height: widthIf ? '350px' : '150px' }" />
    <main
      class="home"
      :aria-labelledby="data.heroText !== null ? 'main-title' : null"
    >
      <div class="content_left">
        <div class="new_title">最新Blog</div>
        <ul class="home_ul">
          <router-link
            v-for="item in this.articles"
            :key="item.path"
            :class="widthIf ? 'ul_li' : 'ul_li_small'"
            :to="item.path"
          >
            <div class="li_title">{{ item.title }}</div>
            <p class="li_mess">{{ item.headersStr }}</p>
            <div class="ul_li_p_bottom">
              <img
                class="home_icons"
                src="../../public/assets/logo/catalog.svg"
              />{{
                types(item.relativePath)
              }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img
                class="home_icons"
                src="../../public/assets/logo/clock.svg"
              />{{ item.lastUpdated }}
            </div>
          </router-link>
        </ul>
        <router-link :to="this.$site.pages[1].path" class="more_btn"
          >阅读更多&nbsp;<span class="more_btn_arrow">&#187;</span></router-link
        >
      </div>
      <HomeRight v-if="widthIf" />
    </main>
    <Footer v-on:getChild="getChild" :visite="this.visite" />
  </div>
</template>

<script>
import { articleType } from "../util";
import moment from "moment";
import Footer from "./Footer";
import HomeRight from "./HomeRight";

export default {
  name: "Home",
  props: ["widthIf"],
  components: {
    Footer,
    HomeRight,
  },
  data() {
    return {
      visite: 0,
      articles: [],
    };
  },
  mounted() {
    this.newArticle();
  },

  methods: {
    //父级获取子级传递的内容
    getChild: function(value) {
      this.visite = value;
    },

    //最新文章-前6个
    newArticle() {
      const arr = this.$site.pages.map((v) => {
        return {
          ...v,
          time: this.timeNumber(v.lastUpdated),
        };
      });
      const arrNext = arr.filter((v) => v.time > 0 && v.path !== "/");
      //倒序big->little
      const list = arrNext.sort((a, b) =>
        this.timeNumber(a.lastUpdated) > this.timeNumber(b.lastUpdated) ? -1 : 1
      );
      this.articles = list.slice(0, 6);
    },
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    },
    timeNumber() {
      return function(str) {
        return str ? moment(str).valueOf() : 0;
      };
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
    types() {
      return function(path) {
        return articleType(path);
      };
    },
  },
};
</script>

<style lang="stylus">
.banner
  margin-top 60px
  text-align: center
  overflow: hidden
  height: 350px
  background: url(/assets/md-imgs/home/bg01.jpeg) center center / cover no-repeat
.new_title,.more_btn
  display: inline-block;
  padding: 2px 10px
  border-radius: 4px
  background: rgb(62, 175, 124)
  font-size: 15px
  letter-spacing: 1px
  font-weight: 600
  color: #fff
.more_btn
  padding 3px 8px
  &:hover
    background: rgba(62, 175, 124,.8)
  .more_btn_arrow
    font-size 18px

.content_left
  flex 4


.home_ul
  padding 0

.ul_li,
.ul_li_small
  display: block
  box-shadow: 0 0 6px 0 #ccc
  padding: 10px 15px
  border-radius: 4px
  margin-top 20px
  cursor pointer
  color #666
.ul_li_small
  padding: 5px
.ul_li:hover
  box-shadow: 0 0 6px 0 rgb(62, 175, 124)
  color rgb(62, 175, 124)
  >.li_title
    color rgb(62, 175, 124)
.li_title
  color #333
  font-size 15px
.li_mess
  font-size 14px
  line-height 1.4
.ul_li_p_bottom
  display flex
  flex-wrap wrap
  align-items center
  line-height 12px
  font-size 13px
.home_icons
  width 13px
  margin-right 5px



.home
  padding $navbarHeight 2rem 0
  max-width $homePageWidth
  margin 0px auto
  display flex
  justify-content center
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1.2rem
      color #fff
      background-color $accentColor
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding 1rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
