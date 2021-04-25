---
tag: JavaScript
author: beiysd
title: Reduce
---

### 定义

<code>reduce()</code> 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

<code>reduce()</code> 可以作为一个高阶函数，用于函数的 compose。

#### 注意: reduce() 对于空数组是不会执行回调函数的。

#### reduce()环境要求 Google：Yes；IE：9.0↑； Firefox：3.0↑； opera：10.5↑

### 个人理解

reduce 是对数组进行操作，会生成一个新数组，不会改变原数组

标准格式：let newArr = arr.reduce((pre,cur)=>{xxx},{})

其中 newArr 为预期结果；

arr 为目标数组；

xxx 为逻辑函数；

{} 为预期结果的数据类型，可以是 Array，Object，String

原理： pre，在初始时为原型{}，也是代码最末尾那个{}标识，之后变为代码 xxx 中返回的结果，继续对 arr 中下一个元素进行操作；

## 统计字符串出现次数

```js
let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
let nameNum = names.reduce((pre, cur) => {
  if (cur in pre) {
    pre[cur]++;
  } else {
    pre[cur] = 1;
  }
  return pre;
}, {});
console.log(nameNum); //{Alice: 2, Bob: 1, Tiff: 1, Bruce: 1}
```

## 数组去重

### 单数组去重

```js
bbb = new Set(aaa);
```

### 数组合并去重

```js
distinct = (a, b) => {
  return Array.from(new Set([...a, ...b]));
};
```

### 数组对象去重

```js
let arr = [
  { code: 1, name: "11" },
  { code: 1, name: "22" },
  { code: 2, name: "33" },
];
let newArr = arr.reduce((pre, cur) => {
  //true:重复;false:不重复
  let indx = pre.findIndex((v) => v.code === cur.code) > -1;
  if (!indx) {
    return pre.concat(cur);
  } else {
    return pre;
  }
}, []);
console.log(newArr); // [{ code: 1, name: "11" },{ code: 2, name: "33" }]
```

## 多维数组转一维

```js
let arr = [
  [0, 1],
  [2, 3],
  [4, [5, 6, 7]],
];
const newArr = function(arr) {
  return arr.reduce(
    (pre, cur) => pre.concat(Array.isArray(cur) ? newArr(cur) : cur),
    []
  );
};
console.log(newArr(arr)); //[0, 1, 2, 3, 4, 5, 6, 7]
```

## 数组相同项合并

```js
let names = [
  { name: ["Alice"], code: "101" },
  { name: ["Bob"], code: "102" },
  { name: ["Alice"], code: "101" },
  { name: ["Tiff"], code: "101" },
  { name: ["Bruce"], code: "105" },
];
const arrMerge = names.reduce((pre, curr) => {
  const eqIndex = pre.findIndex((item) => item.code === curr.code);
  if (eqIndex !== -1) {
    pre[eqIndex].name.push(...curr.name);
    return pre;
  } else {
    return pre.concat(curr);
  }
}, []);
console.log(arrMerge);
//[{code:'101',name:['Alice','Alice','Tiff']}, {code:'102',name:['Bob']}, {code:'105',name:['Bruce']}]
```
