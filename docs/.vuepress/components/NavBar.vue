<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-19 11:00:14
 * @LastEditTime: 2021-04-20 14:49:44
-->
<template>
  <header class="nav_bar">
    <router-link class="nav_left" :to="$localePath">
      <img class="logo" :src="$site.themeConfig.logo" />
      <span class="logo_title">{{ $site.title }}</span>
    </router-link>

    <ul class="nav_right">
      <li
        v-for="(item, index) in $site.themeConfig.sidebar"
        :key="index"
        @mouseenter="navClick(index)"
        @mouseleave="navClick(null)"
        class="nav_right_li"
      >
        <div v-if="item.children && !item.children[0].title">
          <a :href="item.children[0]">{{ item.title }}</a>
        </div>
        <div v-else-if="item.children && item.children[0].title">
          {{ item.title }}

          <span v-if="navIndex === index" class="open_arrow" />
          <span v-else-if="navIndex !== index" class="close_arrow" />
        </div>
        <ul
          v-if="navIndex === index && item.children && item.children[0].title"
          class="nav_right_li_ul"
        >
          <a
            v-for="itemNext in item.children"
            :key="itemNext.title"
            :href="deepPath(itemNext)"
            class="nav_right_li_ul_title"
            >{{ itemNext.title }}</a
          >
        </ul>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    navIndex: null,
  }),
  methods: {
    navClick(val) {
      if (this.navIndex === val) {
        this.navIndex = null;
      } else {
        this.navIndex = val;
      }
    },
  },
  computed: {
    deepPath() {
      return function pathNext(data) {
        let path = "";
        if (data.children && data.children.length > 0) {
          return pathNext(data.children[0]);
        } else {
          path = data;
          return path;
        }
      };
    },
  },
};
</script>

<style scoped>
.close_arrow {
  display: inline-block;
  transition: 0.2s;
  border-color: transparent transparent transparent #999;
  border-width: 4px;
  border-style: solid;
}
.open_arrow {
  display: inline-block;
  transform: rotate(90deg);
  transition: 0.2s;
  border-color: transparent transparent transparent #999;
  border-width: 4px;
  border-style: solid;
}
.nav_bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  height: 2.6em;
  line-height: 2.2rem;
  font-size: 14px;
  border-bottom: 1px solid #eaecef;
}

.nav_right_li {
  position: relative;
  list-style: none;
  float: left;
  margin-left: 1.5rem;
  cursor: pointer;
}
.nav_right_li_ul {
  position: absolute;
  padding: 5px;
  width: 90px;
  left: -1.5rem;
  background: #fff;
  text-align: left;
  box-shadow: 0 0 6px 0 #ccc;
  border-radius: 4px;
}
.nav_right_li_ul_title {
  display: block;
  color: #2c3e50;
  cursor: pointer;
}
.nav_right_li_ul_title:hover {
  color: #3eaf7c;
}
.logo {
  height: 2.2rem;
  min-width: 2.2rem;
  margin-right: 0.8rem;
  vertical-align: top;
}
.logo_title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2c3e50;
  position: relative;
}
</style>
