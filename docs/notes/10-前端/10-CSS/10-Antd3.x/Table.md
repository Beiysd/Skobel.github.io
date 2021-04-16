### Table

### 常用参数详解

```js
const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,//选中变化
      getCheckboxProps: (record) => ({
        disabled: !record.existCourseTeacher,//给出条件-哪些是不可选择的
      }),
    }

<Table
    rowKey={record => record.num}
    columns={this.columns()}
    dataSource={list}
    bordered={true}
    rowSelection={rowSelection}//行可选择
    scroll={{y:'50vh'}}//内容最大高为50vh
    pagination={{
        showSizeChanger: true, //是否可以改变pageSize
        showQuickJumper: false,//页码跳转
        showTotal: () => `共${this.state.total}条`,
        pageSize: pageSize,
        current: pageNum,
        total: this.state.total, //数据的总的条数
        onChange: current => this.changePage(current), //页码变化
        onShowSizeChange: (current, pageSize) => {
        //设置每页显示数据条数，current表示当前页码，pageSize表示每页展示数据条数
        }
        hideOnSinglePage:false,//只有一页时是否隐藏分页器
        pageSizeOptions:['10', '20', '30', '40'],//指定每页可以显示多少条
    }
/>
```
