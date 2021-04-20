<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-19 10:57:34
 * @LastEditTime: 2021-04-19 11:12:16
-->
<template>
  <div>
    <NavBar />
    <div @click="consoleConfig($site)">aaa</div>
  </div>
</template>
<script>
import NavBar from "./NavBar";

export default {
  components: { NavBar },

  methods: {
    consoleConfig(data) {
      console.log("site==111===", data);
    },
  },
};
</script>
