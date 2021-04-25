---
tag: function
author: beiysd
title: 小数点后 x 位
---

```js
/**
 * @name twoDecimal
 * @param {Number} val 传入数字
 * @param {Number} len 位数-需要取小数点后几位-默认2位
 * @remake Math.floor(val) 向下取整
 * @description 运算，取小数点后两位
 */
function twoDecimal(val = 0, len = 2) {
  let digit = Math.pow(10, len); //指数幂
  let num = Math.floor(val * digit) / digit;
  return num;
}
```
