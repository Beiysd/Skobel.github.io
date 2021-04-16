### github clone 速度慢解决方法

:::tip
转载地址：https://www.jianshu.com/p/fb9848d5418c
:::

### 一、有梯子用这个：

这个是今天看到一篇文章里说的， 原文链接 ： https://zhuanlan.zhihu.com/p/129257729。

但梯子不一样，所以对应的端口不一样。

你需要做的就是找到梯子对应的 socket 端口，然后再设置下 git 的代理配置：

```js
git config --global http.https://github.com.proxy socks5://127.0.0.1:7891
```

配置后实测速度： 1.25 M/s。 当然这个速度和梯子快慢有关

![tizi](/assets/md-imgs/github_slow_01.png)

### 二、没梯子用这个

这个方法非常简单，什么都不用设置，只需要在链接的 github.com 后插入‘.cnpmjs.org’，其它不变。 用上面 clone 的链接做示例：

```js
git clone https://github.com/cpselvis/geektime-webpack-course.git

改为

git clone https://github.com.cnpmjs.org/cpselvis/geektime-webpack-course.git
```

有链接，这个 clone 速度一般是 4K/s, 将链接换为镜像链接后，速度可以上 100K/s, 也是较大提升了。没梯子的同学可以试试。

### 2020/11/4 更新

发现一个更好的方法，不需要梯子，也不用自己改地址。目前最好的方法吧。 使用 chrome 浏览器，安装一个插件【Github 加速器】

![tizi](/assets/md-imgs/github_slow_02.png)

[下载地址](https://chrome.zzzmh.cn/info?token=mfnkflidjnladnkldfonnaicljppahpg) （不用梯子）安装很简单，自己搜索。关键字【chrome 开发者模式安装插件】

装好后，打开 github 页面， UI 如下

![tizi](/assets/md-imgs/github_slow_03.png)

这里多了几个通道， 第一个通道在内网下载时被公司拦截了，提示如下：

![tizi](/assets/md-imgs/github_slow_04.png)
