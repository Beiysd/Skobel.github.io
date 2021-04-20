/*
 * @name:
 * @author: wuxd
 * @Date: 2021-03-20 12:06:48
 * @LastEditTime: 2021-04-20 17:45:58
 */
const path = require("path");
const autoGetSidebarOptionBySrcDir = require("./utils/get-sidebar-by-dir");

module.exports = {
  title: "Beiysd",
  description: "Live and Study.",
  head: [
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "apple-touch-icon", href: "/assets/logo/pkp.png" }],
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
    // lastUpdated: "Last Updated",
  },
  plugins: [
    "@vuepress/plugin-back-to-top",
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
    [
      "@vuepress/blog",
      {
        directives: [
          {
            id: "post",
            dirname: "notes",
            path: "/post/",
            itemPermalink: "/post/:year/:month/:day/:slug",
            pagination: {
              lengthPerPage: 2,
            },
          },
        ],
        forntmatters: [
          {
            id: "tag",
            keys: ["tag"],
            path: "/tag/",
            layout: "Tags",
            scopeLayout: "Tag",
          },
          {
            id: "location",
            keys: ["location"],
            path: "/location/",
            // layout: 'Location', defaults to `FrontmatterKey`.
            frontmatter: { title: "Location" },
          },
        ],
        globalPagination: {
          lengthPerPage: 5,
        },
        // sitemap: {
        //   hostname: "https//beiysd.top",
        // },
        comment: {
          service: "vssue",
          owner: "Beiysd",
          repo: "Beiysd.github.io",
          clientId: "1cc70f20392d879553b1",
          clientSecret: "cc51797ffb73f49d381f6599f4d207fc9a191e20",
        },
      },
    ],
  ],
};
