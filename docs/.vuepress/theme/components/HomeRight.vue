<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-27 13:42:05
 * @LastEditTime: 2021-04-27 18:08:15
-->
<template>
  <div class="content_right">
    <div class="user_logo_body">
      <img :src="this.$site.themeConfig.logo" class="user_logo" />
    </div>
    <div class="user_li_body">
      <pre style="textAlign:left;width:170px;height:195px;fontSize:13px;">
          <code class="js">
              <!-- {{` -->
/**
* @Name:    Beiysd
* @Author:  beiysd
* @Article: {{this.$site.pages.length}}
* @View:    {{visite}}
* @Desc:    我的小破站
* @Date:    2021-04-01
*/
<!-- `}}  -->
</code>
      </pre>
    </div>
    <div class="out_li_body">
      <li
        v-for="items in outLinks().slice(0, 3)"
        :key="items.title"
        class="out_li"
      >
        <router-link v-if="items.link" :to="items.link" class="out_li_text">
          <img class="out_li_icons" :src="items.icons" />{{ items.title }}
        </router-link>
      </li>
    </div>
    <li class="out_li_body">
      <div class="no_out_li_text">
        <img class="foot_icons" :src="outLinks().slice(-1)[0].icons" />{{
          outLinks().slice(-1)[0].email
        }}
      </div>
    </li>
    <!-- tag标签集 -->
    <div class="tags_body">
      <router-link
        class="tags_li"
        v-for="items in this.tagList"
        :key="items.link"
        :to="items.link"
        :style="{ background: colorRandom() }"
      >
        {{ items.tag }}
      </router-link>
    </div>
  </div>
</template>
<script>
import { outLinks, colorRandom } from "../util";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
export default {
  props: ["visite"],
  data() {
    return {
      outLinks,
      colorRandom,
      tagList: [],
      //   newVisite: 0,
      name: "a",
    };
  },
  mounted() {
    this.getTagList();
    this.code();
  },
  watch: {
    visite: function(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.code();
      }
    },
  },
  methods: {
    getTagList() {
      let arr = this.$site.pages.reduce((pre, cur) => {
        if (
          cur.frontmatter &&
          cur.frontmatter.tag &&
          pre.findIndex((v) => v.tag === cur.frontmatter.tag) === -1
        ) {
          pre.push({ tag: cur.frontmatter.tag, link: cur.path });
          return pre;
        } else {
          return pre;
        }
      }, []);
      this.tagList = arr;
    },
    /**
     * @name code
     * @description 监听返回data为true 启用
     */
    code() {
      document.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    },
  },
};
</script>
<style lang="stylus">
.content_right
  flex 1
  padding 30px
  text-align center
.user_logo_body
  display: flex;
  margin 0 auto
  align-items: center;
  width: 135px;
  height: 135px;
  border-radius 50%
  box-shadow 0 0 6px 0 #ccc
.user_logo
  width: 95px;
  height: 95px;
  margin-left: 30px;
.user_li_body
  display flex
  width 155px
  color: #666;
  margin 0 auto
  align-items center
  .user_li
    list-style none
    flex 1
    text-align center
.out_li_body
  display flex
  width 155px
  margin 0 auto
  align-items center
  justify-content center
.out_li
  list-style none
  display inline-block
  width 40%
  text-align center
  margin-top 15px
  &:hover
    text-decoration: underline;

.out_li_text
  font-size 13px
.no_out_li_text
  display flex
  align-items center
  font-size 14px
  margin-top 10px
  font-weight 500
.out_li_icons
  display block
  width 15px
  margin 0 auto

.foot_icons
  width 15px
  margin-right 5px
.out_email_li
   list-style none
   margin-top 5px
.tags_body
    margin-top 15px
.tags_li
    display inline-block
    color #fff
    list-style none
    border-radius 4px
    padding: 1px 4px;
    font-size: 12px;
    margin: 0 5px;
    margin-top 5px
    opacity 0.8
    &:hover
       opacity 1

.code_content
    text-align left
</style>
