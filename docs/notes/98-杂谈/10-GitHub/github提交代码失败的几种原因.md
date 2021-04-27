---
tag: GitHub
author: beiysd
title: GitHub 提交失败原因
type: GitHub
---

## 1.clone 时使用快速克隆方式

:::waring
报错代码：error: RPC failed; curl 18 transfer closed with outstanding read data remaining
:::

因为 git 中 config 的 url 出错

![url出错](/assets/md-imgs/git/git_01.png)

删除.cnpmjs.org，回归原始路径，再次提交就可以了

## 2.http.postBuffer 参数过小

在 git 命令行窗口执行命令：

```javascript
git config --global http.postBuffer 524288000
```

调整 postbuffer 为 500M

524288000 = 500 _ 1024 _ 1024 可根据自身情况设定

## 3.关闭验证

在 git 命令行窗口执行命令：

```javascript
git config --global http.sslVerify false
```
