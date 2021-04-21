/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1e1ee5edf551cfb5619fbe48eba1d741"
  },
  {
    "url": "assets/css/0.styles.6ea22478.css",
    "revision": "58ce45b0954a8727ece7a5d10963d0ca"
  },
  {
    "url": "assets/gif/tea_line.gif",
    "revision": "5696a21521062f94c21dda38a7bf396a"
  },
  {
    "url": "assets/img/back_top.92f72e0e.svg",
    "revision": "92f72e0e45b5ffbefbdac94fa1485815"
  },
  {
    "url": "assets/img/clock.ffb2d0be.svg",
    "revision": "ffb2d0be6522ddd61cb4d4c9c4208e65"
  },
  {
    "url": "assets/img/eye.e9087eed.svg",
    "revision": "e9087eed8e3a70f0ec6de1b8c54e6435"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/tag.f21efeeb.svg",
    "revision": "f21efeebf6677175d61f117cb8f6f116"
  },
  {
    "url": "assets/js/10.89cb0454.js",
    "revision": "9c15f9c171fe6dad315cf631958e1e7a"
  },
  {
    "url": "assets/js/11.3c794522.js",
    "revision": "f9c1fae7a6c3c52998390023a0fbc888"
  },
  {
    "url": "assets/js/12.70440dbd.js",
    "revision": "12753fe9142b70148fd2f96f2727c112"
  },
  {
    "url": "assets/js/13.a3e0d1ac.js",
    "revision": "e06a61fe64a290b5e24d838016dc9e80"
  },
  {
    "url": "assets/js/14.310331e8.js",
    "revision": "c3caef9a203003432dd9151851667342"
  },
  {
    "url": "assets/js/15.917355d8.js",
    "revision": "2b89bcb4b84f72a908ea53b18ed78fc2"
  },
  {
    "url": "assets/js/16.40c023c5.js",
    "revision": "4d5407b9099ee75192c3a8729815c469"
  },
  {
    "url": "assets/js/17.dd831ef0.js",
    "revision": "161fd3d56f257ad027066078fdbe0800"
  },
  {
    "url": "assets/js/18.ebdfa913.js",
    "revision": "1fd67db47634186377d50e69e3259b21"
  },
  {
    "url": "assets/js/19.978a3d4f.js",
    "revision": "2a49d6259213ebdbbd86f5ea2750e9d3"
  },
  {
    "url": "assets/js/2.ff1c91b7.js",
    "revision": "c7742e97a69e096a0aebed472bbe35c0"
  },
  {
    "url": "assets/js/20.a1b302ec.js",
    "revision": "c1b3043a760d5f06cfe7a25552980133"
  },
  {
    "url": "assets/js/21.c0c880e4.js",
    "revision": "cab273dcc02213be9ad8649736304ea6"
  },
  {
    "url": "assets/js/22.7c5ac0b7.js",
    "revision": "386e7d6b835757e795cd3d203ad7adf9"
  },
  {
    "url": "assets/js/23.9b601e1c.js",
    "revision": "7de066327943e81bc1780bbb409fc71f"
  },
  {
    "url": "assets/js/24.e020a25c.js",
    "revision": "5e3f964eb040495d280f8878b3c123e8"
  },
  {
    "url": "assets/js/25.9d1a3fda.js",
    "revision": "3a3bd00ccf88ebbedcc63c9e15e6b9cf"
  },
  {
    "url": "assets/js/26.5b32b9fb.js",
    "revision": "ae6127cece80c987dc6a551c5f9f1c96"
  },
  {
    "url": "assets/js/27.2fd55a87.js",
    "revision": "922258ebee8c62527d4b24401bbfd40f"
  },
  {
    "url": "assets/js/28.c336622c.js",
    "revision": "081944f1b6d1a9f6c4805adabc2e3439"
  },
  {
    "url": "assets/js/29.fd5ef2b6.js",
    "revision": "9d2d7f36928c75860a205b359d96ecdd"
  },
  {
    "url": "assets/js/3.64834d1f.js",
    "revision": "84ab89df6e08511d2627f1d5fd2965b2"
  },
  {
    "url": "assets/js/30.3b1b491b.js",
    "revision": "c59ecb0683c96fb4935d6f594720d11f"
  },
  {
    "url": "assets/js/31.048b84dc.js",
    "revision": "672cc8b6ca834c6a42a1ef5c9010998e"
  },
  {
    "url": "assets/js/32.88d25b63.js",
    "revision": "085cc64cfa4aef1716e5826613d079b7"
  },
  {
    "url": "assets/js/33.6b1952ec.js",
    "revision": "9c3bdf72500c523e1d5ddf6252b1f10b"
  },
  {
    "url": "assets/js/34.469388d0.js",
    "revision": "c16b9c4a06d33bea647d070a057c046c"
  },
  {
    "url": "assets/js/35.b67fdcd0.js",
    "revision": "a799e8e63b5353a3f837ed8f84a50af3"
  },
  {
    "url": "assets/js/36.305b637c.js",
    "revision": "6fc019f0248d9e5c5f81015b7ba04a1a"
  },
  {
    "url": "assets/js/37.2ee28610.js",
    "revision": "f20aa932f2fdffb6f75e2b5675ca8532"
  },
  {
    "url": "assets/js/38.12b3959d.js",
    "revision": "b146c182a179c95b9de8276ac8cc033f"
  },
  {
    "url": "assets/js/39.ed39eb41.js",
    "revision": "a907ee4e9955d02f59e3dd8ba467919e"
  },
  {
    "url": "assets/js/4.ab2b8853.js",
    "revision": "e552d0458a690ee0592ec5e8d0d1781b"
  },
  {
    "url": "assets/js/40.2a6acc73.js",
    "revision": "57af647ec0084302523772b41b5447cf"
  },
  {
    "url": "assets/js/41.c37ffdf8.js",
    "revision": "02843a6e5460c20d62bb3dbac01c259a"
  },
  {
    "url": "assets/js/42.57e70b87.js",
    "revision": "0379d9e0a11a510feffa53976fcbfde7"
  },
  {
    "url": "assets/js/43.880bf4e4.js",
    "revision": "a8836ba9bbb48eb3e0305c280a27a278"
  },
  {
    "url": "assets/js/44.e1504ed4.js",
    "revision": "1ddedde30a370b1a0909b8d970cfc665"
  },
  {
    "url": "assets/js/45.30812643.js",
    "revision": "578c7522ae895b3ba74650440210073a"
  },
  {
    "url": "assets/js/46.b44de4d6.js",
    "revision": "ebe1ee063201d752a31a7f0863be4284"
  },
  {
    "url": "assets/js/47.8f633147.js",
    "revision": "6693a21b4d0f0e18033f8f9b36719c9c"
  },
  {
    "url": "assets/js/48.f8ce50f4.js",
    "revision": "b678dff4ecc5b5b049be9d29f6ee4d3c"
  },
  {
    "url": "assets/js/49.5668e7cc.js",
    "revision": "11618e98b1bd6f945f5dd68f9fe5b13c"
  },
  {
    "url": "assets/js/5.a3a48344.js",
    "revision": "7ba859da3a8a63fe3a00a216f6303fdb"
  },
  {
    "url": "assets/js/50.3198d61d.js",
    "revision": "d200e8ea5063f08290ea54dd2fc120d8"
  },
  {
    "url": "assets/js/51.dc58139c.js",
    "revision": "e05c10c74ac48b8b4902d2070d76be08"
  },
  {
    "url": "assets/js/52.dd6dcfc6.js",
    "revision": "1f500eb54fc70d3064c94af0b95b216f"
  },
  {
    "url": "assets/js/53.4dd5b87e.js",
    "revision": "2b8e050111505b96f286068925647710"
  },
  {
    "url": "assets/js/54.ed639bae.js",
    "revision": "f8616f8cfdccdbcbd4ddc03e84eac60f"
  },
  {
    "url": "assets/js/55.545687a2.js",
    "revision": "5dd43d37e7512e5f5b99f8603bc897c6"
  },
  {
    "url": "assets/js/56.1db2fab6.js",
    "revision": "a74220d2838e9c41b5e1ca5bf6b9a6a2"
  },
  {
    "url": "assets/js/57.32871085.js",
    "revision": "1215e7b02243fe751c222348912add6b"
  },
  {
    "url": "assets/js/58.1630947d.js",
    "revision": "d7d77c38233fd1ad8d2a11aaf603b1e3"
  },
  {
    "url": "assets/js/59.210561f5.js",
    "revision": "8d5223db0b9efb73f93e7461ec3c382c"
  },
  {
    "url": "assets/js/6.f6e0bbd8.js",
    "revision": "fcf11e45d0ec174cc02c196088eebe49"
  },
  {
    "url": "assets/js/60.ac25606d.js",
    "revision": "92550ea1d98f83e625fc55fd9447a4ce"
  },
  {
    "url": "assets/js/61.0b5b2239.js",
    "revision": "b33bbc54bdabfa6b7ef9675859e64d55"
  },
  {
    "url": "assets/js/62.4aa32f98.js",
    "revision": "4cdacc019c9ad229892ad880c4771c17"
  },
  {
    "url": "assets/js/63.7b452908.js",
    "revision": "e4d0fce6eb395269af2b882d5c455fa2"
  },
  {
    "url": "assets/js/64.db0b2f6c.js",
    "revision": "d36cc76eab8a8c27146240bc5eecc57e"
  },
  {
    "url": "assets/js/65.d79f0ce2.js",
    "revision": "1b41b55e2b85a11ba0af3aeffaffa7e8"
  },
  {
    "url": "assets/js/7.9e43e34d.js",
    "revision": "f344229d303ac8cca5859a94aefeb6de"
  },
  {
    "url": "assets/js/8.d465c4bb.js",
    "revision": "aea5a433a391a9f2a3c1c85055a8de19"
  },
  {
    "url": "assets/js/9.67e76cb1.js",
    "revision": "7d2719ba73e662f332598b0c894fa0ef"
  },
  {
    "url": "assets/js/app.a6aeaf4b.js",
    "revision": "11b45c4827b7cd49644630688b6b339d"
  },
  {
    "url": "assets/logo/back_top.svg",
    "revision": "92f72e0e45b5ffbefbdac94fa1485815"
  },
  {
    "url": "assets/logo/catalog.svg",
    "revision": "2815a6ff6aa68d2f73dc731a81acdaa8"
  },
  {
    "url": "assets/logo/clock.svg",
    "revision": "ffb2d0be6522ddd61cb4d4c9c4208e65"
  },
  {
    "url": "assets/logo/eye.svg",
    "revision": "e9087eed8e3a70f0ec6de1b8c54e6435"
  },
  {
    "url": "assets/logo/head.svg",
    "revision": "3fd0b1d0a50bcee51ec61e7aa92fd539"
  },
  {
    "url": "assets/logo/pkp.png",
    "revision": "446decb9d6316fcd0439f100d49c86ef"
  },
  {
    "url": "assets/logo/pkq.png",
    "revision": "4f158912c445dbf878d85f9e6746a198"
  },
  {
    "url": "assets/logo/tag.svg",
    "revision": "f21efeebf6677175d61f117cb8f6f116"
  },
  {
    "url": "assets/md-imgs/build_date.png",
    "revision": "289cf0e388c8fb5851e18f7f706ad51e"
  },
  {
    "url": "assets/md-imgs/canvas-01.png",
    "revision": "cf34b7d3359b8ccd534ac800f4204238"
  },
  {
    "url": "assets/md-imgs/error_boundaries_01.png",
    "revision": "8c7d3fb630b6e1d7bec4cb23d3d7b8f3"
  },
  {
    "url": "assets/md-imgs/error_boundaries_02.png",
    "revision": "5489fab8a2189d7a8b43777de261f051"
  },
  {
    "url": "assets/md-imgs/follow.png",
    "revision": "483a0299f1ffeac6e4015a7096a04a39"
  },
  {
    "url": "assets/md-imgs/fulltext-search-01.png",
    "revision": "866db35f32e0d1a6b66104f818062c24"
  },
  {
    "url": "assets/md-imgs/fulltext-search-02.png",
    "revision": "e79435b9dcfec453130d7467fcebcc74"
  },
  {
    "url": "assets/md-imgs/github_slow_01.png",
    "revision": "9834d765e6618c4bf016df202da7c1cb"
  },
  {
    "url": "assets/md-imgs/github_slow_02.png",
    "revision": "df81baaaa4fd0261907be5ca3e0d224c"
  },
  {
    "url": "assets/md-imgs/github_slow_03.png",
    "revision": "0caeda038900daab3c1c76cbaf19ec9a"
  },
  {
    "url": "assets/md-imgs/github_slow_04.png",
    "revision": "b01f9e9687ff5657adadb42ea86ca55c"
  },
  {
    "url": "assets/md-imgs/num_sound.png",
    "revision": "e4cb18d6014ad9bdab0363a5643d39ff"
  },
  {
    "url": "assets/md-imgs/styles-change-01.png",
    "revision": "0fee56f662f8f8ed6daf72c54206cb46"
  },
  {
    "url": "assets/md-imgs/styles-change-02.png",
    "revision": "309dac2575b6dd73ff1ae635be717061"
  },
  {
    "url": "assets/md-imgs/styles-change-03.png",
    "revision": "5d6c0d875d4d02f9ed2f00902046344e"
  },
  {
    "url": "assets/md-imgs/svg/a-link.svg",
    "revision": "d5285c6ce16aa5c736585b2a38dc5b53"
  },
  {
    "url": "assets/md-imgs/taro_h5_01.png",
    "revision": "57bc91e3aaf867b127b1a32398d0b0ff"
  },
  {
    "url": "assets/md-imgs/taro_h5_02.png.png",
    "revision": "6888131d91bab378b17196bba8e83dd8"
  },
  {
    "url": "assets/md-imgs/taro-error-01.png",
    "revision": "33d291d665dbf603763a4b5b68d0aa7e"
  },
  {
    "url": "assets/md-imgs/unicode.png",
    "revision": "00166a609207bf360cd42d31f5cba1c2"
  },
  {
    "url": "assets/md-imgs/upload_many.png",
    "revision": "5e78b6f5e8815b8857c05f8bf27ed0b1"
  },
  {
    "url": "assets/md-imgs/upload_one.png",
    "revision": "96bc441f7ecc7f31762bcc721417fcd5"
  },
  {
    "url": "index.html",
    "revision": "e1609c0b845eddbb3e852b60e3563b6c"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "eb00d6111914e9a91762275cb1833d08"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "a3fad8bdc26c0e4671de49d5da495fbe"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "fedb428fdb0965d8893ef3d0fe3b52cc"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "f8c4e52daefb3c189fb5321c2feba8e5"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "2421f145dcbd6926d28132ab8e4a4efe"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "4b8eb0def92a50469a03e980d65217c5"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "9aadf60dc03069fafeedb460266b1983"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "136729c2e725c90bda69f4e39b60ba99"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "a6f01b00313ef4fe77823aced9130cc9"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "fb0b4346597398f6123c7eca821b0fbe"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "39a4b1c6c9bce498be0501b98f827f0d"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "d5166ef45ec407eec288ad2caee1f9d7"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "3bae214db36447cbc66a97a47eecfc39"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "38c8982f9e759f6336bb77a3eced99b7"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "05d120bdd41a26257ec486c345db908a"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "e4783fc84c146479abd35649b558f896"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "850a08b6ceb27840d605c34e00417b38"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "98c35e8f4ffe70910d71e8a11030b440"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "5e2bb715c0293baf77d80c28c692f62c"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "80e059b48cddb03c544076bedcc2db53"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "caa159b58b30e8df9090c0871d0b7af0"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "0f93ec5a8703c440df1b226035ef9991"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "33b742d254e163855f9be389531cb7cc"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "2d899a612cc17b5ca3cdac136f3275f1"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "00987e4be3db3a1b1e6960a5685e3306"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "91841bc719d794c47d45a645a5ef0f21"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "fa17abf2b2fd482636f254833cb50e66"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "2c4da880397cab3b737ee9de51a27873"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "ac5eb2249aab0cd6d28f5a4d8e619472"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "3cb1a61c0ce9782b656f7835999aef8b"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "4e941789ce02aaf7bf1b9badf9180093"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "54f76ec78eac51be7c46a0cd6708c20b"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "df4185e10a7f5b0954a3cf430f66f5ac"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "6ef64e3324a4a39755742f73da0ee360"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "5d25f775fd85beb017adefc829463d1d"
  },
  {
    "url": "notes/10-前端/50-Vuepress/代码块复制.html",
    "revision": "712d7938724c7d9e43b3ff4e8ad6a9f9"
  },
  {
    "url": "notes/10-前端/50-Vuepress/全局搜索.html",
    "revision": "2c737e9c9c7da902f868eca5934ec5ed"
  },
  {
    "url": "notes/10-前端/50-Vuepress/图片放大.html",
    "revision": "1e6f7a6bdcfdd62503120b01669e621e"
  },
  {
    "url": "notes/10-前端/50-Vuepress/样式更改.html",
    "revision": "39c60b8ed85ceca271597e491b1b6b4e"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "3def842b1f8c263f7fb88a48eec385cf"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "e6b5193aa44f32f3c182c4780df2271b"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "5d465874c5c9ed2e0262c5be6fcf8d19"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "e2827d4e99a7b35187dce125580c0de7"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "2c1d249a1eefb4da75d0696e207c818a"
  },
  {
    "url": "notes/66-随笔/10-阿雅/001-森林.html",
    "revision": "1f2da49477b5fd56cd16a2878a9744a9"
  },
  {
    "url": "notes/66-随笔/10-阿雅/002-村庄.html",
    "revision": "3a3ceaff797a3b5a249f29466ae0fdbb"
  },
  {
    "url": "notes/66-随笔/20-百里/001-深坑.html",
    "revision": "574588262bdda39867b24a0ae7f80764"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "84b5e52d8fd4927380285c4ec9b8dd5e"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "40163a99eb37f592b45b5bdf86d27a73"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "a02af5a320722517f0e7fb5d0355dab0"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "ddb6706b01ad2baf862203376d62e169"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "0874623547390e18309c2f57973e7160"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
