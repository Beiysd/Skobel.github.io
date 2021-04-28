<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-20 18:01:42
 * @LastEditTime: 2021-04-28 14:42:58
-->
<template>
  <div class="theme-container">
    <div class="error">
      <h1>404</h1>

      <!-- <blockquote>{{ getMsg() }}</blockquote> -->

      <RouterLink to="/" class="btn">
        返回首页
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`,
];

export default {
  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },
  },
};
</script>
<style lang="stylus">
.error
  width 100vw
  height 100vh
  display flex
  align-items center
  justify-content center
  color #fff
  background: url(/assets/md-imgs/home/bg04.jpg) center center / cover no-repeat
.btn
  display: inline-block;
  margin-left: 5px;
  border-radius: 4px;
  background: #3eaf7c;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 600;
  color: #fff;
  padding: 4px 12px;
  &:hover
    background: rgba(62, 175, 124,.8)
</style>
