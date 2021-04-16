### React 模板生命周期

:::tip
注意：当前 taro 版本为 3.x

若版本不对应请参考[官方文档](https://taro-docs.jd.com/taro/docs/README)
:::

- 参考

  [组件生命周期](https://taro-docs.jd.com/taro/docs/apis/about/tarocomponent/)

  [Taro 基础教程](https://taro-docs.jd.com/taro/docs/react)

```js
componentWillMount();
//页面加载时触发，一个页面只会调用一次，此时页面 DOM 尚未准备好，还不能和视图层进行交互
```

:::tip
注意：componentWillMount() 在小程序里对应的生命周期是 onLoad
:::

```js
componentDidMount();
//页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互

shouldComponentUpdate(nextProps, nextState);
//页面是否需要更新，返回 false 不继续更新，否则继续走更新流程

componentWillUpdate(nextProps, nextState);
//页面即将更新

componentDidUpdate(prevProps, prevState);
//在更新发生后立即被调用,可以多次调用。 这个方法在第一次渲染时不会被调用。
```

```js
componentWillUnmount();
//页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时，通常在此方法中卸载当前页面的监听和计时方法，防止内存泄漏
```

:::tip
注意：在小程序中，一个挂在到 Page 组件的组件并不会执行 componentWillUnmount() 方法，只有当他挂载的 Page 组件被销毁时，该组件才会执行 componentWillUnmount() 方法。

所以若 page 隐藏可使用 componentDidHide 来监听，并卸载方法
:::

```js
componentDidShow();
//页面显示/切入前台时触发

componentDidHide();
//页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
```

页面事件处理函数;

```js
onPullDownRefresh();
//监听用户下拉刷新事件
//需要在全局配置的 window 选项中或页面配置中开启 enablePullDownRefresh 可以通过 Taro.startPullDownRefresh 触发下拉刷新，调用后触发下拉刷新动画，效果与用户手动下拉刷新一致。当处理完数据刷新后，Taro.stopPullDownRefresh 可以停止当前页面的下拉刷新

onReachBottom();
//监听用户上拉触底事件
//可以在全局配置的 window 选项中或页面配置中设置触发距离 onReachBottomDistance，在触发距离内滑动期间，本事件只会被触发一次

onPageScroll(Object);
//监听用户滑动页面事件

onShareAppMessage(Object);
//监听用户点击页面内转发按钮（Button 组件 openType='share'）或右上角菜单“转发”按钮的行为，并自定义转发内容。
//只有定义了此事件处理函数，右上角菜单才会显示“转发”按钮
```
