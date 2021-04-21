/*
 * @name:
 * @author: wuxd
 * @Date: 2021-03-20 12:06:48
 * @LastEditTime: 2021-04-21 11:48:40
 */
const path = require("path");
const autoGetSidebarOptionBySrcDir = require("./utils/get-sidebar-by-dir");

module.exports = {
  title: "Beiysd",
  description: "Live and Study.",
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "apple-touch-icon", href: "/assets/logo/pkp.png" }],
    [
      "script",
      {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?345ab2bf830dc5c68a96925eb1dd0b45";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`,
    ],
  ],
  base: "/",
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // search: true,
    logo: "/assets/logo/pkq.png",
    searchMaxSuggestions: 10,
    nav: [
      { text: "Github", link: "https://github.com/Beiysd" },
      { text: "Gitee", link: "https://gitee.com/beiysd" },
      { text: "CSDN", link: "https://blog.csdn.net/weixin_40532650" },
    ],
    sidebar: autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../notes")),
    lastUpdated: "上次更新",
  },
  plugins: [
    "fulltext-search",
    "@vuepress/plugin-pagination",
    "vuepress-plugin-code-copy",
    [
      "@vuepress/plugin-medium-zoom",
      {
        options: {
          margin: 8,
          background: "#ffffffb3",
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        popupComponent: "MySWUpdatePopup",
        updatePopup: {
          message: "有新的内容更新",
          buttonText: "刷新",
        },
      },
    ],
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp) => {
          const moment = require("moment");
          moment.locale("zh-CN");
          return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
        },
      },
    ],
  ],
};