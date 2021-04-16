### Scroll 滚动

## 滚动到指定位置

```js
/**
 * @desc 滚动到指定元素
 * @param {string} containerId 容器元素id
 * @param {string} targetElementId 目标元素id
 * @param {number} offset 滚动偏移-例如边框宽度
 */

function scrollTo({ containerId = "", targetElementId = "", offset = 0 }) {
  try {
    if (!targetElementId) {
      return;
    }
    const container = containerId ? $(`#${containerId}`) : $("html,body");
    const target = $(`#${targetElementId}`);
    if (target.length > 0 && container.length > 0) {
      //容器元素离窗口顶部高度
      const parTop = container.offset().top;
      // 目标离浏览器窗口顶部高
      const childTop = target.offset().top;
      //滑动条滚动距离
      const scrollTop = container.scrollTop();
      //目标元素离容器元素顶部高-即容器元素滚动条所在高
      const top = childTop - parTop + scrollTop;
      container.animate({ scrollTop: top - offset });
    }
  } catch (err) {
    console.error(err);
  }
}
```

## 返回顶部

```js
/**
 * @name scrollTops
 * @description 在规定时间返回顶部
 */
function scrollTops() {
  let times = 100; //返回顶部的时间-默认100ms,最大为500ms
  if (window) {
    times = window.scrollY > 500 ? 500 : window.scrollY;
    $("html,body").animate({ scrollTop: 0 }, times);
  }
}
```
