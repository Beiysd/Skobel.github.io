### 关于聚焦

聚焦的两种情况

同步和异步，主要流程是一样的；找到元素，对元素绑定聚焦事件

同步：可以在页面渲染完后直接使用<code>ref</code>进行聚焦

异步：则是对触发时才渲染的组件进行聚焦

## 同步

```js
//js中声明
input = null;
if (this.input) {
  this.input.focus();
}
//页面使用
<div>
  <Input ref={(refs) => (this.input = refs)} />
</div>;
```

## 异步

类似于 Modal 等弹出式组件的输入框聚焦，使用循环，监听等方式获取元素

```js
times = null;
input = null;
/**
 * @name inpFocus
 * @returns 手动控制modal-自动聚焦
 */
inpFocus = () => {
  this.times = setInterval(() => {
    if (this.input && this.times) {
      this.input.focus();
      clearInterval(this.times);
    }
  }, 100);
};
//手动控制confirm
confirmTwo = () => {
  let modals = Modal.confirm({
    title: "手动控制confirm",
    content: (
      <div>
        <Input.TextArea
          ref={(refs) => (this.input = refs)}
          defaultValue={this.state.inpValue}
          onChange={(e) => this.setState({ inpValue: e.target.value })}
        />
        {this.inpFocus()}
      </div>
    ),
    //e-非常重要,阻止了自动关闭
    onOk: (e) => {
      this.modalContral(modals);
    },
  });
};
```
