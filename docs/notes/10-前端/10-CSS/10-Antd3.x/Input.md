---
tag: antd3.x
author: beiysd
title: Input
---

## 输入框颜色统一更改

```js
:global(.ant-input:hover) {
  border-color: #999 !important;
}
:global(.ant-input:focus) {
  border-color: #999 !important;
  box-shadow: 0 0 6px 0 #999 !important;
}

:global(.ant-input-affix-wrapper:hover) {
  border-color: #999 !important;
}
:global(.ant-input:not(.ant-input-disabled)) {
  border-color: #999 !important;
}
```

## 自动聚焦- 有两种模式

1.autoFocus(React 中 F 是大写)属性使用：<code>autoFocus='autofocus'</code>

2.ref 使用：<code>ref={(refs) => (this.input = refs)}</code>

\*\* 若 ref 方法，无法自动聚焦，可查看鼠标初始时是否在页面上，而不是在控制台

```js
//js中声明
input = null;
if (this.input) {
  this.input.focus();
}
//页面使用
<div>
  <Input autoFocus="autofocus" />
  <Input ref={(refs) => (this.input = refs)} />
</div>;
```

### 区别

autofocus： input 聚焦属性

初次渲染 Input 框不聚焦，手动聚焦后，再次进入可以自动聚焦(JS 原生中是生效的)

ref：挂载在组件上，返回组件实例

初次/再次渲染都会自动聚焦，(\*\*要保证 Input 框先渲染，方法后触发)
