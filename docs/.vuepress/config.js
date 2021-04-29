/*
 * @name:
 * @author: wuxd
 * @Date: 2021-03-20 12:06:48
 * @LastEditTime: 2021-04-29 14:31:04
 */
const path = require("path");
const autoGetSidebarOptionBySrcDir = require("./public/utils/get-sidebar-by-dir");

module.exports = {
  title: "Beiysd",
  description: "Live and Study.",
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "apple-touch-icon", href: "/assets/logo/pkp.png" }],
    ["link", { rel: "icon", href: "/assets/logo/pkq_512.ico" }],
    ["meta", { name: "baidu-site-verification", content: "code-ebcdRcBbIf" }],
    ["script", { src: "/utils/autopush-baidu.js" }],
    ["script", { src: "/utils/tongji_baidu.js" }],
  ],
  base: "/",
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // search: true,
    logo: "/assets/logo/pkp.png",
    searchMaxSuggestions: 10,
    nav: [
      {
        text: "外链",
        link: "wailian",
        items: [
          { text: "Github", link: "https://github.com/Beiysd" },
          { text: "Gitee", link: "https://gitee.com/beiysd" },
          { text: "CSDN", link: "https://blog.csdn.net/weixin_40532650" },
        ],
      },
    ],
    sidebar: autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../notes")),
    lastUpdated: "last Update",
  },
  plugins: [
    "fulltext-search",
    "vuepress-plugin-code-copy",
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
  ],
};
