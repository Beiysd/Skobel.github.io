<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-27 13:42:05
 * @LastEditTime: 2021-04-29 14:04:50
-->
<template>
  <div class="content_right">
    <div class="user_logo_body" v-if="!sides">
      <img :src="this.$site.themeConfig.logo" class="user_logo" />
    </div>
    <textarea id="test" disabled="disabled" class="code_body_auto"></textarea>
    <!-- <div class="user_li_body">
      <pre class="code_body">
        <code class="js" :id="randNumbs(5)">
    /** 
    * @Name: Beiysd 
    * @Author: beiysd 
    * @Article:{{this.$site.pages.length}}
    * @View: {{this.newVisite}}
    * @Desc: 我的小破站 
    * @Date: 2021-04-01 
    */
        </code>
      </pre>
    </div> -->
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
import $ from "jquery";
import { outLinks, colorRandom, randNumbs } from "../util";
import { getCount } from "../util/tongji";
export default {
  props: ["visite", "sides"],
  data() {
    return {
      outLinks,
      colorRandom,
      randNumbs,
      tagList: [],
      newVisite: 0,
      indx: 0,
      timer: null,
    };
  },
  mounted() {
    this.getTagList();
    this.visiteChange();
    this.timer = setInterval(this.testWord, 0.02 * 1000);
  },
  // watch: {
  // visite: function(newValue, oldValue) {
  //   if (newValue !== oldValue) {
  //     this.newVisite = newValue;
  //   }
  // },
  // },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
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
    visiteChange: async function() {
      const num = await getCount("home");
      this.newVisite = num;
    },

    testWord() {
      const str = `/**\n* @Name: Beiysd\n* @Author: beiysd\n* @Article:${this.$site.pages.length}\n* @View: ${this.newVisite}\n* @Desc: 我的小破站\n* @Date: 2021-04-01\n*/`;

      let strs = str.slice(0, this.indx + 1);
      $("#test").html(strs);
      this.indx += 1;
      if (this.timer && this.indx >= str.length) {
        clearInterval(this.timer);
        this.indx = 0;
      }
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
  display flex;
  margin 0 auto
  align-items: center;
  width 135px;
  height 135px;
  border-radius 50%
.user_logo
  width 95px
  height 95px
  margin-left 30px
.user_li_body
  display flex
  width 155px
  color #666;
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

.code_body
    text-align left
    width 170px
    height 150px
    font-size 13px
    background #1E1E1E
    color #57A64A
    border-radius 4px
.code_body_auto
  width 148px
  height 130px
  padding 10px 5px
  background #1E1E1E
  color #57A64A
  border 0px
  border-radius 4px
  resize none
  font-family source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace
</style>
