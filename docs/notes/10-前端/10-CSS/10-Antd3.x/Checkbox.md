### Checkbox

### 半选状态

<code>indeterminate</code>属性;

```js
/**
 * @name judgeAllCheck
 * @desc 判断全选框状态
 * @return {Array} [0]:半选状态;[1]:全选状态;
 */
judgeAllCheck = () => {
  //checkList:已选中; list:总数据量
  const { checkList = [], list = [] } = this.state;
  let half_check = false; //半选状态
  let all_check = false; //全选状态
  if (checkList.length > 0 && list.length === checkList.length) {
    all_check = true;
  } else if (checkList.length > 0 && list.length !== checkList.length) {
    half_check = true;
  }
  return [half_check, all_check];
};
/**
 * @name boxChecked
 * @param {Boolean} checked 是否选中
 * @param {Number} ind 选中的下标
 * @description 选中单个
 */
boxChecked = (e, ind) => {
  let arr = this.state.checkList;
  //没有则添加
  if (e && e.target.checked) {
    arr.push(ind);
  } else {
    //有则去除
    arr = arr.filter((v) => v !== ind);
  }
  this.setState({ checkList: arr });
};
//Html
<div>
  全选：
  <Checkbox
    indeterminate={this.judgeAllCheck()[0]}
    checked={this.judgeAllCheck()[1]}
    onClick={this.allChecked}
  />
  {list.map((v, index) => {
    <Checkbox
      key={index}
      checked={checkList.findIndex((item) => item === index) > -1}
      onClick={(e) => this.boxChecked(e, index)}
    />;
  })}
</div>;
```
