---
tag: antd3.x
author: beiysd
title: Select
---

### showSearch 搜索功能-列表渲染问题

#### \*\*注意：filterOption={false}

```js
<Select
  showSearch
  allowClear
  style={{ width: "180px" }}
  value={assistantCode}
  placeholder="" //若想placeholder显示,需要value值为undefined
  onChange={this.selectAssistant} //选中
  onSearch={this.selectAssistantSearch} //搜索过滤
  filterOption={false}
>
  {assistantList.map((v) => (
    <Select.Option key={v.code} value={v.code}>
      {v.name}
    </Select.Option>
  ))}
</Select>
```
