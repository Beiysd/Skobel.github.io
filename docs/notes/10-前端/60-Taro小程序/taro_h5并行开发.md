---
tag: Taro
author: beiysd
title: Taro + H5 小程序并行开发
---

## 1.场景：

小程序开发，外层只套了个 taro 外壳，内部所有功能都在 H5 页面实现

## 2.目录

![目录](/assets/md-imgs/taro_h5_01.png)

## 3.逻辑

taro 中首页为空页面，指向另一 taro 文件(home)，在 home 中使用 webview 跳转 H5 页面，这样一来，小程序顶部就会出现返回按钮

## 4.流程

home/index.jsx 为小程序进入首页，在此处判断 token 是否存在，有则使用 webview，展示 H5 页面， 没有则进入 Login/index.jsx 登录页

登录成功，添加 token 到缓存，则使用 Taro.navigateBack()返回上一页，在 home/index.jsx 页使用 webview，展示 H5 页面

![流程图](/assets/md-imgs/taro_h5_02.png)
