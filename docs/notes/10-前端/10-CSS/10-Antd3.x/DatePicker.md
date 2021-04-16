### DatePicker

## 时间选择组件

### [日-周-月-年，时间选择组件](https://blog.csdn.net/weixin_40532650/article/details/113643569)

## 年份选择

```js
//引入moment依赖
<DatePicker
  value={moment(time, dateFormat)} //
  open={true} //Boolean是否展示日期选择面板
  mode="year"
  placeholder="请选择年份"
  format="YYYY" //展示的类型-年份
  onOpenChange={this.open} //点击日期框-日期面板变化打开
  onPanelChange={this.onChange} //选择日期变化-选择完毕-关闭日期面板
  allowClear={false} //是否可以清除
/>
```

## 时间范围

```js
const farmData = 'YYYY-MM-DD'
/**
 * @anme timeDisable
 * @param {String} type
 * @param {Object} time
 * @description 时间范围判断
 */
timeDisable = (type, time) => {
  const { startTime, endTime } = this.state
  //开始结束时间-两者皆为空，则不做范围判断
  if (!startTime && !endTime) {
    return
  }
  //valueOf获取标准时间的时间戳
  if (type === 'startTime') {
    //开始时间 > 结束时间
    return time.valueOf() > endTime.valueOf()
  } else {
    return time.valueOf() < startTime.valueOf()
  }
}
//Html
<DatePicker
  allowClear={false}
  format={farmData}
  value={this.state.startTime ? this.state.startTime : null}
  disabledDate={(e) => this.timeDisable('startTime', e)}
  placeholder={'请选择开始时间'}
  onChange={(e) => this.timeChange('startTime', e)}
/>
<DatePicker
  allowClear={false}
  format={farmData}
  value={this.state.endTime ? this.state.endTime : null}
  disabledDate={(e) => this.timeDisable('endTime', e)}
  placeholder={'请选择结束时间'}
  onChange={(e) => this.timeChange('endTime', e)}
/>
```
