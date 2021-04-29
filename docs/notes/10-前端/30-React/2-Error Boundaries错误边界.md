---
tag: Boundaries
author: beiysd
title: Error Boundaries 错误边界
---

> 参考：https://zh-hans.reactjs.org/docs/error-boundaries.html

## 1.环境：

"react": "^16.13.1",

"http-proxy-middleware": "^1.0.5",

## 2.注意事项：

错误边界在开发环境中，不起作用；打包后有效；

> 记一个问题：2021-01-22

> 之前测试的时候，错误边界在开发环境中，出现一会后，又把错误信息渲染到页面上，

> 但之后做了打包优化和其他调整，现在错误边界在开发环境中又可以了，不会把错误信息渲染到页面上

![ation](/assets/md-imgs/error_boundaries_01.png)

#### 关于 react 打包及跨域，和刷新后 404 可看以下文档

[react 开发环境-生产环境-跨域处理](https://blog.csdn.net/weixin_40532650/article/details/112679495)

[react 打包刷新 页面 404](https://blog.csdn.net/weixin_40532650/article/details/112761719)

## 3.测试代码

```js
import React, { Component } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Spin } from "antd";
import { CrashPage } from "@/component";
import routes from "./router";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, hasError: false, path: "" };
  }
  componentDidUpdate() {
    //页面跳转，监听路由变化(withRouter )
    console.log("===", window.location.pathname, this.state.hasError);
    const newpath = window.location.pathname;
    const { path } = this.state;
    if (path !== newpath) {
      this.setState({ path: newpath, hasError: false });
    }
  }
  //错误边界捕获错误
  componentDidCatch(error, info) {
    console.log("catch===", error, info);
    this.setState({ hasError: true });
    return null;
  }
  render() {
    //根据hasError 来判断显示404(CrashPage)页面，还是正常渲染
    const { loading, hasError } = this.state;
    if (hasError) {
      return <CrashPage />;
    }
    return (
      <div id="app">
        <Spin spinning={loading}>
          <Switch>
            {routes.map((item) =>
              item.children && item.children.length > 0 ? (
                item.children.map((v) => (
                  <Route
                    key={v.path}
                    exact={v.exact}
                    path={v.path}
                    component={v.component}
                  />
                ))
              ) : (
                <Route
                  key={item.path}
                  exact={item.exact}
                  path={item.path}
                  component={item.component}
                />
              )
            )}
            <Redirect key="redirect" to="/" />
          </Switch>
        </Spin>
      </div>
    );
  }
}
export default withRouter(App);
```

## 4.打包后结果

代码错误导致页面崩溃，渲染已准备的降级 UI，不会把错误信息渲染到页面，跳转其他页面由 componentDidUpdate 监听，更改 hasError 状态

![ation](/assets/md-imgs/error_boundaries_02.png)
