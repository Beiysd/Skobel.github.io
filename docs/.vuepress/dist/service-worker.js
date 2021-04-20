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
    "revision": "6262754765816ff6f6af43282713bb3f"
  },
  {
    "url": "assets/css/0.styles.5485f58c.css",
    "revision": "97506cca215eec26e3ba92416f17ae4d"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/js/10.f42f944e.js",
    "revision": "252272daf8d9c2c32f56bf9a906fe6ee"
  },
  {
    "url": "assets/js/11.bd63ae91.js",
    "revision": "484a38504c6e3da4435f95074626983a"
  },
  {
    "url": "assets/js/12.13d2e29b.js",
    "revision": "a5bee2fb23e35819bafeef14ddc0effa"
  },
  {
    "url": "assets/js/13.0382cae1.js",
    "revision": "eb2181cf8d790807d4d880c0aac188c6"
  },
  {
    "url": "assets/js/14.60ac3ce8.js",
    "revision": "86b58afd4437505704d12d1f8d3de029"
  },
  {
    "url": "assets/js/15.27b373c5.js",
    "revision": "1d541e64c80210220ccabcd739882238"
  },
  {
    "url": "assets/js/16.c2521c87.js",
    "revision": "30f81ce3b840427f255344d66b7709c4"
  },
  {
    "url": "assets/js/17.c25844f9.js",
    "revision": "f50027c75eda3d72cd5ff315b352e392"
  },
  {
    "url": "assets/js/18.03294b4d.js",
    "revision": "8ca10bb7c06e2b7e60b931f59c2c6b83"
  },
  {
    "url": "assets/js/19.c08ccd96.js",
    "revision": "cba95a2f4e28e73abf07aac61a044848"
  },
  {
    "url": "assets/js/2.cef30ee9.js",
    "revision": "41e1c3a6236876d671a71035f50476be"
  },
  {
    "url": "assets/js/20.c9c9deaf.js",
    "revision": "59fc86bef20f2b2e118e8e6f42af9b5d"
  },
  {
    "url": "assets/js/21.3a637773.js",
    "revision": "45445ed749574e6670127009c565975e"
  },
  {
    "url": "assets/js/22.75087a86.js",
    "revision": "dbf9bea00cb1ccaf5489fc31f0b65042"
  },
  {
    "url": "assets/js/23.b1702a14.js",
    "revision": "0b3fa5cdcc916e054b3416f3deda0b80"
  },
  {
    "url": "assets/js/24.1121b9dc.js",
    "revision": "21188c0569b781b0480cbde02857e50c"
  },
  {
    "url": "assets/js/25.c6d4bab8.js",
    "revision": "1355a1ed449f325d7c2a0e65d4a98c80"
  },
  {
    "url": "assets/js/26.14abbc50.js",
    "revision": "b9afd6526c4890b17219486e239504e9"
  },
  {
    "url": "assets/js/27.69d2c790.js",
    "revision": "9a12ea55b00d890837b58e5493d51d17"
  },
  {
    "url": "assets/js/28.28c2e8bb.js",
    "revision": "13c3276aae26facc60decf408d06709e"
  },
  {
    "url": "assets/js/29.799c040b.js",
    "revision": "273f7beb7d6e16cb100925906d9a749e"
  },
  {
    "url": "assets/js/3.e01f86bc.js",
    "revision": "f39ff382158db5230221855f5102b02a"
  },
  {
    "url": "assets/js/30.4b04ab52.js",
    "revision": "90faca8feaaee50fdb6b7b827178b173"
  },
  {
    "url": "assets/js/31.76b13060.js",
    "revision": "9aa5b85007482192c93f4f4bdd400826"
  },
  {
    "url": "assets/js/32.98d1ca20.js",
    "revision": "99c601ecd58459a2cebbff0e3e662197"
  },
  {
    "url": "assets/js/33.f0ca6e9b.js",
    "revision": "fb8cebc35353b024bc6d37cb66f5ef67"
  },
  {
    "url": "assets/js/34.6c276f1c.js",
    "revision": "cc6e6a481740f0d0c3bf9056acbd1509"
  },
  {
    "url": "assets/js/35.00b1a363.js",
    "revision": "f82113a01dd622a5899cebf35f48a1e0"
  },
  {
    "url": "assets/js/36.e9c8f3d8.js",
    "revision": "d9161b74cde798aa0ade8f1ae9d63ea4"
  },
  {
    "url": "assets/js/37.9db2f69e.js",
    "revision": "975acb1033f16ab5332765911d9cf65f"
  },
  {
    "url": "assets/js/38.ce9e2c19.js",
    "revision": "2800bbc79a251d5496dba3e298270fa6"
  },
  {
    "url": "assets/js/39.0ead5e08.js",
    "revision": "d4ebab5c291624808d6485e470256759"
  },
  {
    "url": "assets/js/4.ce3248de.js",
    "revision": "60642e20362f140bf3d4d1a305d854be"
  },
  {
    "url": "assets/js/40.dc848e05.js",
    "revision": "607ad8ba270e421e0b437ff716c9937c"
  },
  {
    "url": "assets/js/41.de9c2bb6.js",
    "revision": "4ae259bdf6350e1d32e09002f994e7bd"
  },
  {
    "url": "assets/js/42.a91c57bd.js",
    "revision": "01d9a75bce4391921160c4f72c19e98f"
  },
  {
    "url": "assets/js/43.85a53358.js",
    "revision": "3b112128e48583f710a1c0f1da13a836"
  },
  {
    "url": "assets/js/44.396757c2.js",
    "revision": "05cff6a4fb7d625c7639febd6ee746d4"
  },
  {
    "url": "assets/js/45.f0138bca.js",
    "revision": "f132e90baff623597bb949cf0ce74de3"
  },
  {
    "url": "assets/js/46.6edb02e2.js",
    "revision": "557e720e9f7ef015079b0b870dae7c1c"
  },
  {
    "url": "assets/js/47.81d0cadd.js",
    "revision": "2d18dfa1d14b71b6abcb37ab8c07e473"
  },
  {
    "url": "assets/js/48.1e9a28cd.js",
    "revision": "61673c194352e61ba531b41340454eef"
  },
  {
    "url": "assets/js/49.6df191f1.js",
    "revision": "1920adbbcd37cb79d01d56a69ca0a655"
  },
  {
    "url": "assets/js/5.ead0f40a.js",
    "revision": "0e4c2938be65aba98cfe0416794bcc92"
  },
  {
    "url": "assets/js/50.f4907117.js",
    "revision": "90c5cb5f4dccbc99433039b3f7a46d67"
  },
  {
    "url": "assets/js/51.7e57aded.js",
    "revision": "499e5be38201e906812e1e546393683d"
  },
  {
    "url": "assets/js/52.55980619.js",
    "revision": "d5ae05937d805a8f38df1eeb4201691a"
  },
  {
    "url": "assets/js/53.b80cec48.js",
    "revision": "c7fd9d8491ad27e6869effa5b18fa4ee"
  },
  {
    "url": "assets/js/54.79d8c3bb.js",
    "revision": "8aeef5b75d86579196fe297571baa967"
  },
  {
    "url": "assets/js/55.8d4c79f2.js",
    "revision": "c1d204878fd568f1374de51acbc90854"
  },
  {
    "url": "assets/js/56.1e5a1869.js",
    "revision": "422f216d25b22d91ef26530635a0309d"
  },
  {
    "url": "assets/js/57.ff8d6969.js",
    "revision": "485dc6043c968a831dc87ad1e0be3825"
  },
  {
    "url": "assets/js/58.608adff3.js",
    "revision": "b2f7ccb94450526cf2eadc7628d3eacb"
  },
  {
    "url": "assets/js/59.b6d6d3ab.js",
    "revision": "bba48c672d885313dc6de38babe7ca11"
  },
  {
    "url": "assets/js/6.de2a4a9e.js",
    "revision": "188a3ba8083300ab1cb01c67fd3ae6da"
  },
  {
    "url": "assets/js/60.1e833549.js",
    "revision": "1c80c1af1f7388e7a0daf66ef4a373d0"
  },
  {
    "url": "assets/js/61.53755383.js",
    "revision": "b9b10c25bdce7b91e3ae1fccfc9fd30a"
  },
  {
    "url": "assets/js/62.18792fc9.js",
    "revision": "165555d6946e200b654d169275a4d77e"
  },
  {
    "url": "assets/js/63.b1a4f26a.js",
    "revision": "8564fd050fe924507216ae9e19362d00"
  },
  {
    "url": "assets/js/7.05ec2057.js",
    "revision": "dd291180b052356714087865a66b687f"
  },
  {
    "url": "assets/js/8.ede62e57.js",
    "revision": "c0a5b19e6bfef38a36b5ba4803296e62"
  },
  {
    "url": "assets/js/9.952af93f.js",
    "revision": "33dc8a38eee62f557797a17b9ce45174"
  },
  {
    "url": "assets/js/app.9bd83499.js",
    "revision": "24d4da532602c5e826be55e022b041d1"
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
    "revision": "5dac6f13d661c3021f2b8a741eb27973"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "03511eb654b6628b7e4e8b54ce2a2fa0"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "7011e52be717d129199c3077e24c3f85"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "baef3dcf31831eafcb5668351bffb8fe"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "b320ec34332fc47fd27a67b2ce4b4030"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "c7c2ee94f109db3624a27b04700156d9"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "717fc3fd019e973023652c9bc824cb96"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "9580cc5a51751bb8c1e7877c54deb31e"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "71d21c0bd99cf6fa53fe54980c4db582"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "9d01e293a01f65ad8dc5b7fbee7c12ca"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "acbf0be943c38aeb5bc8c00622b3657d"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "f09c8a8a52c66fb5ef9a4d544c79b1ad"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "5e96a3d565105564809b9f3a85230ff1"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "e0e70b491472eb3b90ce66325af8f034"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "f44c63cef6fa726f80b031147566f0ca"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "e790cc23c0c5afca9b5d9a0a6ca894b2"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "8821e333e95b3aed86fe990052049a51"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "017c3f4446283ecceed4255ca8453ed0"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "eb1dc175477e15887d4f29982610f160"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "7ce97d2f5de1f5b8ce8e62919c40b9eb"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "30904da72133f869a53cfbacdaff8013"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "394c99bae47726d4f057afec7bd38721"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "1fc6604be959eb0121970ded9b45360c"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "781e1c339b412333dc0ba800a5962d5a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "93f4685b413068ce38746f7006677a88"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "7747105db3132e81bc7596159d5b2f92"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "97235aeee35f48e49be6a752975db315"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "4baac47bbb50cfeb539417c4f504315a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "f53572842417f9fe19a2e0974a63f0ce"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "91f2bcb36e966a2a38cf028a92babb90"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "3801778c6ca93a4a082a1b306301210b"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "c8358d50331aee2ad029ae94e894eca2"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "e8811bee4e056fbb87ba98b599a3f811"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "d937615c188f706f4f2586e9ba2419c5"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "9298acc457c2a77c65b1826bd4532588"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "f2bef1322a9b91efee644858a0a0b52f"
  },
  {
    "url": "notes/10-前端/50-Vuepress/代码块复制.html",
    "revision": "8af8a4d943b272c570e426836071a1fc"
  },
  {
    "url": "notes/10-前端/50-Vuepress/全局搜索.html",
    "revision": "efaf5aa224f6a8371adde0a54fe9e6db"
  },
  {
    "url": "notes/10-前端/50-Vuepress/图片放大.html",
    "revision": "659f5567b74faeb621ade38d33781772"
  },
  {
    "url": "notes/10-前端/50-Vuepress/样式更改.html",
    "revision": "7971cbef44318a73628e11122a501efb"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "f07a56dcd61f7643edc12ac181f13c8b"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "9814116fae8b54bf7044f01c85f4daed"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "5bd27d38ea78d80a855e01da3116409d"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "47b0c7b81ccb74b939fe2ea72c9ba52d"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "a1c38c9cd43787846a83c327a4eacda9"
  },
  {
    "url": "notes/66-随笔/10-阿雅/001-森林.html",
    "revision": "42fbe35f5aa03820124308a7a4556258"
  },
  {
    "url": "notes/66-随笔/10-阿雅/002-村庄.html",
    "revision": "5f7931539dcca60aaaee86dc8aa5be2d"
  },
  {
    "url": "notes/66-随笔/20-百里/001-深坑.html",
    "revision": "f0741bd5d1257727d8218d845a3fc00a"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "97b5d3ec85726a4fc548b26c5ce0bed9"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "b73afab414197c74d9c79ba89641eb48"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "8b0333d318d739a4532a815e14a99580"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "aed43c88d40013a2cfc7b511b2a78242"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "a8ceb1255fb7fcd772ec1e4d2b084c9d"
  },
  {
    "url": "notes/test.html",
    "revision": "a9618a89fef05e1f45d04226a9e6bd70"
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
