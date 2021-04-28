<!--
 * @name: 
 * @author: wuxd
 * @Date: 2021-04-28 16:05:15
 * @LastEditTime: 2021-04-28 18:21:43
-->
<template>
  <div>
    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <HomeBanner :widthIf="this.widthIf" />timeline
    <Footer />
  </div>
</template>
<script>
import HomeBanner from "@theme/components/HomeBanner";
import Navbar from "@theme/components/Navbar";
import Footer from "@theme/components/Footer";
import Sidebar from "@theme/components/Sidebar";
import moment from "moment";
import { resolveSidebarItems } from "../theme/util";
export default {
  name: "timeLine",
  components: { HomeBanner, Navbar, Footer, Sidebar },
  data() {
    return {
      list: [],
      widthIf: null,
      isSidebarOpen: false,
    };
  },
  mounted() {
    window.addEventListener("resize", this.resize, true);
    this.resize();
    this.getAll();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize, true);
  },
  methods: {
    resize() {
      let widths = document.documentElement.clientWidth;
      if (widths > 719) {
        this.widthIf = true;
      } else {
        this.widthIf = false;
      }
    },
    getAll() {
      const arr = this.$site.pages.map((v) => {
        return {
          ...v,
          time: this.timeNumber(v.lastUpdated),
        };
      });
      const arrNext = arr.filter((v) => v.time > 0 && v.path !== "/");
      //倒序big->little
      const listPrev = arrNext.sort((a, b) =>
        this.timeNumber(a.lastUpdated) > this.timeNumber(b.lastUpdated) ? -1 : 1
      );
      //   const list =  listPrev.reduce((pre,cur)=>{
      //       if()
      //   },[]);
    },
  },
  computed: {},
};
</script>
