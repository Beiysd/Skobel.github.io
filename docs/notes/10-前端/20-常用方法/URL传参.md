### 地址栏传参

跳转页面时，将参数放在地址栏中，供下一页面使用，可以防止刷新参数丢失

也可以用加密方法对字符串加密，更加安全

#### 使用

```js
//传参
const searach = objectToSearch({
  yui: "唯",
  mio: "澪",
  ritsu: "律",
  mugi: "紬",
  azusa: "梓",
});
this.props.history.push("/date-select" + searach);

// 取参
const {
  yui = "",
  mio = "",
  ritsu = "",
  mugi = "",
  azusa = "",
  test = "",
} = getSearchObject();
```

#### 封装为组件

```js
/**
 * @name objectToSearch
 * @param {Object} value 地址栏传递内容,必须是对象类型
 * @desc 将value转化为加密字符串拼接到url后缀
 */
function objectToSearch(value) {
  let search = "";
  if (typeof value === "object") {
    for (let key in value) {
      search += `&${key}=${value[key]}`;
    }
  }
  //window.btoa-window.atob-window自带加密方法-不支持中文
  //需要用encodeURIComponent方法转译中文-ASCII
  //decodeURIComponent方法转译-ASCII-中文
  return "?" + window.btoa(encodeURIComponent(search));
}

/**
 * @name getSearchObject
 * @param {String} window.location.search
 * @desc 获取url中search参数,并转化为对象
 */
function getSearchObject() {
  let value = window.location.search.split("?");
  let obj = {};
  if (value.length > 1) {
    let objStr = decodeURIComponent(window.atob(value[1]));
    let objArr = objStr.split("&");
    //reduce对数组操作
    obj = objArr.reduce((pre, cur) => {
      if (cur) {
        let key = cur.split("=")[0];
        let val = cur.split("=")[1];
        // pre = { ...{ [key]: val }, ...pre };
        pre = Object.assign(pre, { [key]: val }); //ES6新加assign合并对象方法
        return pre;
      } else {
        return pre;
      }
    }, {});
  }
  return obj;
}
```
