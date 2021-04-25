---
tag: antd3.x
author: beiysd
title: Popover
---

### 样式更改

```js
<Popover
  overlayClassName={styles.ant_popover} //类名
  placement="top" //所处相对位置
  title="Title" //标题
  content={content} //内容
  trigger="hover" //触发方式
  visible={true} //手动控制显示
  onVisibleChange={this.onVisibleChange} //触发时的监听函数
>
  <Button type="primary">Hover me</Button>
</Popover>
```
