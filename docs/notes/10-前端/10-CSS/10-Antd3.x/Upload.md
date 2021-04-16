### Upload 使用记录

## 1.场景

注册上传图片，所有信息填写完毕后统一返回给后端，提交注册
:::tip
sessonStorage 关闭会话框即会清空
注意上传文件格式一般为二进制数据流，即 FormData 形式
const form = new FormData()
form.append('file', file)

另外 Antd 的 Upload 会把上传文件封装一次，originFileObj 才是源文件
beforeData 方法中传入的 file，是源数据
onChange 方法中传入的 fileList 则是 Upload 自己需要的封装后的数据
:::

## 2.效果

- 2-1 保留 Upload 组件自带的预览和删除功能

  ![保留组件自带的预览和删除功能](/assets/md-imgs/upload_one.png)

- 2-2 做了特殊判断，只上传一张，和上传多张图片的处理，本质是对上传按钮的显隐控制

  ![在这里插入图片描述](/assets/md-imgs/upload_many.png)

## 3.业务逻辑

- 3-1. 上传一张图片，调一次图片接口，返回线上路径，本地存储线上路径（**_格式为下方代码所示，其中 uid 是 Upload 组件上传时的 uid，path 为后端返回图片路径_**）

```js
多图：[{id:uid, path:'xxx'}]
单个：'xxx'
```

- 3-2. 预览和删除功能，均使用 Upload 自带方法

## 4.功能实现

- 4.1 组件使用

```js
<Upload
     name='file'
     accept='image/*' /*限制上传图片类型文件*/
     listType='picture-card'  /*上传列表内建样式*/
     className={styles.avatar_uploader}
     fileList={fileList} /*已经上传的文件列表（受控）*/
     beforeUpload={(file) => {
     /*上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传*/
       this.handleUpload(file)/*自定义上传*/
       return false/*阻止组件自带上传事件*/
     }}
     onPreview={this.onPreview}//预览事件
     onChange={this.handleChange}//上传文件更改事件
     onRemove={this.onRemove}//删除文件事件
   >
   //根据传入类型判断上传按钮的显隐
     {type === OTHERS ? uploadButton : imageUrl ? null : uploadButton}
 </Upload>

//预览使用的Modal组件
<Modal visible={visible} footer={null} onCancel={this.onPreview }>
   <img alt='加载' style={{ width: '100%', height: '100%' }} src={'xxx'} />
</Modal>
```

- 4.2 方法实现

```js
//上传文件校验
function beforeUpload(file) {
 //类型判断
 const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
 if (!isJpgOrPng) {
   message.error('请上传图片类型文件！')
   return false
 }
 //容量判断
 const isLt2M = file.size / 1024 / 1024 < 10
 if (!isLt2M) {
   message.error('图片大小不得超过10M！')
   return false
 }
 return true
}

//因为是图片路径存在本地
componentDidMount() {
   //初始化清空
   const { type } = this.props
   if (type === OTHERS) {
     setSessStorage(type, [])
   } else {
     setSessStorage(type, '')
   }
 }


 /**
  * @name onPreview
  * @description 预览-取消预览
  */
 onPreview = () => {
   this.setState({ visible: !this.state.visible})
 }


/**
  * @name handleUpload
  * @param {Object} file 上传的文件信息
  * @desc 自定义上传
  */
 handleUpload = async (file) => {
 //文件校验
   if (!beforeUpload) {
     return
   }
   //请求接口-返回图片路径fileUrl
   const data = await apiImageUp(file)
   if (data && data.fileUrl) {
     this.setState({ imageUrl: data.fileUrl }, () => {
     //多图上传
       if (this.props.type === OTHERS) {
         const imgUrlData = getSessStorage(this.props.type) || []
         //标记uid为了删除对应路径
         const params = imgUrlData ? imgUrlData.concat([{ uid: file.uid, url: data.fileUrl }]) : []
         setSessStorage(this.props.type, params)
       } else {
         setSessStorage(this.props.type, data.fileUrl)
       }
     })
   }
 }

/**
* @name onRemove
*  @info {Object} info  Upload组件自己封装的上传信息，实际的上传文件是originFileObj
* @desc 删除图片
*/
 onRemove = (info) => {
   const file = info.originFileObj
   const list = this.state.fileList.filter((v) => v.uid !== file.uid)
   this.setState({ fileList: list, imageUrl: '' })
   //多图，根据对应uid删除
   if (this.props.type === OTHERS) {
     const imgUrlData = getSessStorage(this.props.type) || []
     const params = imgUrlData.filter((v) => v.uid !== info.uid)
     setSessStorage(this.props.type, params)
   } else {
   //单图，直接清空
     setSessStorage(this.props.type, '')
   }
 }


 /**
  * @name handleChange
  * @param {Array}} fileList 上传文件
  * @description 上传文件变化-因为使用了Upload自带图片展示，所以保留此方法
  */
 handleChange = ({ fileList }) => {
   this.setState({ fileList })
 }


 /**
  * @name imageSave
  * @description 单一图片，本地保存-提交时统一上传
  */
 imageSave = () => {
   const { type } = this.props
   const { imageUrlList, imageUrl } = this.state
   const params = {
     url: type === OTHERS ? imageUrlList : imageUrl
   }
   setSessStorage(type, params)
 }
```
