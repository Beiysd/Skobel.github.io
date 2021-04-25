---
tag: antd3.x
author: beiysd
title: Modal
---

## Modal.confirm 类型内部数据变化

需要使用<code>defaultValue</code>,而非<code>value</code>

eg:

```js
Modal.confirm({
  title: "K-ON",
  content: <Input defaultValue={this.state.words} />,
});
```

## Modal.confirm 类型手动控制关闭

依据 ANTD 提供的 modalApi 实现

onOk 中使用带参箭头函数,阻止自动关闭

```js
/**
 * @name modalContral
 * @param {Object} modals modal元素
 * @description 有条件的选择是否销毁modal
 */
modalContral = (modals) => {
  const { inpValue } = this.state;
  //剔除字符串中所有空格
  let value = inpValue ? inpValue.replace(/\s/g, "") : "";
  if (value) {
    this.onCancel(modals);
  } else {
    message.warning("请输入有效内容");
  }
};
/**
 * @name onCancel
 * @param {Object} modals modal元素
 * @description 销毁modal
 */
onCancel = (modals) => {
  modals.destroy();
};
//手动控制confirm
confirmTwo = () => {
  let modals = Modal.confirm({
    title: "手动控制confirm",
    content: (
      <Input
        defaultValue={this.state.inpValue}
        onChange={(e) => this.setState({ inpValue: e.target.value })}
      />
    ),
    //e-非常重要,阻止了自动关闭
    onOk: (e) => {
      this.modalContral(modals);
    },
  });
};
```

## Modal.info 类型在 App 端

点击关闭页面回到顶部的问题，是遮罩层影响滑动条导致的，

<code>mask:false</code>关闭遮罩层
