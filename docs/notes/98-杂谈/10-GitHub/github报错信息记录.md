---
tag: false
author: beiysd
title: GitHub 报错信息记录
type: GitHub
---

## 1.错误信息

> OpenSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com

### 原因 凭证失效

### 解决

- 1.取消代理
  使用 https 网络则取消 https 的代理（但我试了下依然无法解决问题，所以推荐第二种）

```js
git --config --unset https.proxy
```

- 2. 忽略证书设置

```js
env GIT_SSL_NO_VERIFY=true git clone https://host_name/git/project.git
```
