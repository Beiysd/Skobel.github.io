/*
 * @name:
 * @author: wuxd
 * @Date: 2021-03-20 12:06:48
 * @LastEditTime: 2021-04-16 18:02:04
 */
const path = require("path");
const autoGetSidebarOptionBySrcDir = require("./utils/get-sidebar-by-dir");

module.exports = {
  title: "Beiysd",
  description: "Live and Study.",
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "apple-touch-icon", href: "assets/logo/pkp.png" }],
  ],
  base: "/",
  serviceWorker: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    // search: true,
    logo: "assets/logo/pkp.png",
    searchMaxSuggestions: 10,
    nav: [
      { text: "Github", link: "https://github.com/Beiysd" },
      { text: "Gitee", link: "https://gitee.com/beiysd" },
      { text: "CSDN", link: "https://blog.csdn.net/weixin_40532650" },
    ],
    sidebar: autoGetSidebarOptionBySrcDir(path.resolve(__dirname, "../notes")),
    lastUpdated: "Last Updated",
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
    "fulltext-search",
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
      "@vssue/vuepress-plugin-vssue",
      {
        // 设置 `platform` 而不是 `api`
        platform: "github",
        locale: "zh", //语言

        // 其他的 Vssue 配置
        owner: "Beiysd", //github账户名
        repo: "Beiysd.github.io", //github一个项目的名称
        clientId: "1cc70f20392d879553b1", //注册的Client ID
        clientSecret: "cc51797ffb73f49d381f6599f4d207fc9a191e20", //注册的Client Secret
        autoCreateIssue: true, // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了
      },
    ],
  ],
};
