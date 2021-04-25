---
tag: Vuepress
author: beiysd
title: 百度-普通版统计 API 使用
---

:::tip
:star: :star: 这是百度普通版统计 API 使用，而非百度商用版 API

[百度统计](https://tongji.baidu.com/web/welcome/login)

[百度统计-用户手册](https://tongji.baidu.com/api/manual/)

这里有各式各样的请求参数和示例，总能找到你想要的返回数据

:::

## 1 必要条件

### 1.1 在 vuepress 项目中已引入百度统计

详情可见：[引入百度普通版统计](/notes/10-前端/50-Vuepress/15-引入百度普通版统计.html)

<!-- ### 1.2 vuepress 项目中已有本地主题文件 theme

详情可见：[自定义主题开发](/notes/10-前端/50-Vuepress/16-自定义主题开发.html) -->

## 2 百度统计 API 必要参数获取

### 2.1 登录百度统计

进入管理页面下的其他设置-数据导出服务

### 2.2 登录百度开发者中心控制台

![百度开发者中心控制台](/assets/md-imgs/baidu/baidu_tongji_05.png)

可以查看到自己的基本信息

![基本信息](/assets/md-imgs/baidu/baidu_tongji_06.png)

### 2.3 调用 URL 获取授权码

```js
http://openapi.baidu.com/oauth/2.0/authorize?response_type=code&client_id={CLIENT_ID}&redirect_uri={REDIRECT_URI}&scope=basic&display=popup

```

![基本信息](/assets/md-imgs/baidu/baidu_tongji_07.png)

![基本信息](/assets/md-imgs/baidu/baidu_tongji_08.png)

### 2.4 获取 ACCESS_TOKEN

```js
http://openapi.baidu.com/oauth/2.0/token?grant_type=authorization_code&code={CODE}&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}&redirect_uri={REDIRECT_URI}

```

![基本信息](/assets/md-imgs/baidu/baidu_tongji_09.png)

### 2.5 获取你的网站信息列表

> :star: 有一个重要参数-网站 ID，是请求数据用到的参数，我一度把它和控制台中的 ID 记混

```js
https://openapi.baidu.com/rest/2.0/tongji/config/getSiteList?access_token=1.a6b7dbd428f731035f771b8d15063f61.86400.1292922000-2346678-124328

```

![基本信息](/assets/md-imgs/baidu/baidu_tongji_10_1.png)

![基本信息](/assets/md-imgs/baidu/baidu_tongji_10.png)

### 2.6 更新 ACCESS_TOKEN

ACCESS_TOKEN：有效期一个月

REFRESH_TOKEN：有效期 10 年

```js
http://openapi.baidu.com/oauth/2.0/token?grant_type=refresh_token&refresh_token={REFRESH_TOKEN}&client_id={CLIENT_ID}&client_secret={CLIENT_SECRET}

```

![基本信息](/assets/md-imgs/baidu/baidu_tongji_10_2.png)

至此所有主要信息已获取：

site_id = 网站 ID；

ACCESS_TOKEN = 身份验证信息；

REFRESH_TOKEN = 后续更新 ACCESS_TOKEN 所必须

## 3 API 线上调试

### 3.1 入口在数据导出服务页面的底部

![基本信息](/assets/md-imgs/baidu/baidu_tongji_11_1.png)

![基本信息](/assets/md-imgs/baidu/baidu_tongji_11.png)

### 3.2 调用结果

![基本信息](/assets/md-imgs/baidu/baidu_tongji_12.png)

### 3.3 请求参数及示例

[百度统计-用户手册](https://tongji.baidu.com/api/manual/)

这里有各式各样的请求参数和示例，总能找到你想要的返回数据

![基本信息](/assets/md-imgs/baidu/baidu_tongji_13.png)

## 4 vuepress 调用百度统计 API 接口

### 4.1 创建请求 JS 文件

创建 tongji.js 文件（名字随意，认得就行），该文件放在 theme 文件夹下的 util（工具包）下，便于管理；

### 4.2 跨域处理

此处使用 Ajax 的 get 请求，dataType=jsonp 的形式；

```js
//请求百度统计公开接口获取统计数据
async function getBaidu() {
  var num = 0;
  await $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
    data: {
      access_token: "xxx", //身份验证
      site_id: "xxx", //网站id
      method: "overview/getCommonTrackRpt", //需要的报告范围
      start_date: "20210401", //开始时间
      end_date: "20310401", //结束时间
      metrics: "pv_count", //报告所包含的数据类，pv_count=浏览量
    },
    success: function(res) {
      num = visiteNum(res.result); //数据处理
    },
    error: function(err) {
      console.log("error======", err);
    },
  });
  return num;
}
```

### 4.3 异步处理

因为要等待接口返回值计算后得出浏览量，在 4.2 中使用的 async + await 形式就是 ES6 中的异步处理方法

这又引起了另一个问题，异步处理的返回值问题，返回值并非正常的数据，则需要入口方法进行的数据处理

```js
import $ from "jquery";
var nowPageUrl = "";

//入口方法
export function getCount(path) {
  nowPageUrl = path;
  //
  return new Promise((resolve, reject) => {
    getBaidu().then((res) => {
      resolve(res);
    });
  });
}
```

页面引用时

```js
methords:{
    visiteChange: async function() {
        //this.$page vuepress自带方法
        //this.$page.path=当前页面的路径，为了在众多返回数据中，筛选当前页浏览量
        const num = await getCount(this.$page.path);
        this.visite = num;//浏览量
    },
}
```

数据处理

```js
//计算对应页面的浏览量
function visiteNum(data) {
  var visite = 0;
  //计算总浏览量

  if (data && data.visitPage) {
    if (nowPageUrl === "home") {
      // visite = data.sourceSite.items[0][1];-直观统计包括了本地测试域名和正式域名浏览量之和
      //受访页面列表
      const items = data.visitPage.items || [];
      //查询对应域名下精确统计总数
      const arrs = items.filter(
        (v) => v[0].indexOf(window.location.origin) > -1
      );
      visite = arrs.reduce((pre, cur) => {
        pre += Number(cur[1]);
        return pre;
      }, 0);
    } else {
      //计算单页面浏览量
      // encodeURI-转码
      // decodeURI-解码
      //受访页面列表
      const items = data.visitPage.items || [];
      //当前页面完整地址
      const pathurl = window.location.origin + nowPageUrl;
      for (let i = 0; i < items.length; i++) {
        if (items[i][0] === pathurl) {
          visite = items[i][1];
        }
      }
    }
  }
  return visite;
}
```

### 4.4 完整 tongji.js 代码

```js
/*
 * @name:
 * @author: wuxd
 * @Date: 2021-04-22 09:25:01
 * @LastEditTime: 2021-04-23 16:55:14
 */
import $ from "jquery"; //在vuepress所属package.json中安装jquery
var nowPageUrl = "";

//入口方法
export function getCount(path) {
  nowPageUrl = path;
  return new Promise((resolve, reject) => {
    getBaidu().then((res) => {
      resolve(res);
    });
  });
}

//请求百度统计公开接口获取统计数据
async function getBaidu() {
  var num = 0;
  await $.ajax({
    type: "get",
    dataType: "jsonp",
    url: "https://openapi.baidu.com/rest/2.0/tongji/report/getData",
    data: {
      access_token: "xxx", //
      site_id: "xxx",
      method: "overview/getCommonTrackRpt",
      start_date: "20210401",
      end_date: "20310401",
      metrics: "pv_count",
    },
    success: function(res) {
      num = visiteNum(res.result);
    },
    error: function(err) {
      console.log("error======", err);
    },
  });
  return num;
}

//计算对应页面的浏览量
function visiteNum(data) {
  var visite = 0;
  //计算总浏览量

  if (data && data.visitPage) {
    if (nowPageUrl === "home") {
      // visite = data.sourceSite.items[0][1];-直观统计包括了本地测试域名和正式域名浏览量之和
      //受访页面列表
      const items = data.visitPage.items || [];
      //查询对应域名下精确统计总数
      const arrs = items.filter(
        (v) => v[0].indexOf(window.location.origin) > -1
      );
      visite = arrs.reduce((pre, cur) => {
        pre += Number(cur[1]);
        return pre;
      }, 0);
    } else {
      //计算单页面浏览量
      // encodeURI-转码
      // decodeURI-解码
      //受访页面列表
      const items = data.visitPage.items || [];
      //当前页面完整地址
      const pathurl = window.location.origin + nowPageUrl;
      for (let i = 0; i < items.length; i++) {
        if (items[i][0] === pathurl) {
          visite = items[i][1];
        }
      }
    }
  }
  return visite;
}
```

## 5 页面效果

:::tip
:star: 因为路径有中文所以会被转译

:star: 页面打印 this.\$page 就会发现 path 中的中文也是被转译过的

![基本信息](/assets/md-imgs/baidu/baidu_tongji_15.png)
:::

![基本信息](/assets/md-imgs/baidu/baidu_tongji_14.png)
