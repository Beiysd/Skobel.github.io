/*
 * @name:
 * @author: wuxd
 * @Date: 2021-04-21 11:42:05
 * @LastEditTime: 2021-04-29 14:30:57
 */
// import Element from "element-ui";
// import Vue from 'vu'
// import "element-ui/lib/theme-chalk/index.css";
// export default ({ Vue }) => {
//   Vue.use(Element);
// };
export default ({ router }) => {
  /**
   * 路由切换事件处理
   */
  router.beforeEach((to, from, next) => {
    // console.log("切换路由", to.fullPath, from.fullPath);

    //触发百度的pv统计
    if (typeof _hmt != "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
        // console.log("上报百度统计", to.fullPath);
      }
    }

    // continue
    next();
  });
};
