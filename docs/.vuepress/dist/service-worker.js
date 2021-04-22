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
    "revision": "fd83d5fdcf5a97c162ab964834b1b906"
  },
  {
    "url": "assets/css/0.styles.a674406c.css",
    "revision": "cd9fff4162bcd3ec74854401996b2830"
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
    "url": "assets/js/10.08f99e8f.js",
    "revision": "7587a885c92aeac65d10d87669ff64ef"
  },
  {
    "url": "assets/js/11.3c794522.js",
    "revision": "f9c1fae7a6c3c52998390023a0fbc888"
  },
  {
    "url": "assets/js/12.d890c294.js",
    "revision": "d20a77789dcdf83759ad69f23cc42153"
  },
  {
    "url": "assets/js/13.13861dc5.js",
    "revision": "47864fa8476a5f9f24360ed41888b4cf"
  },
  {
    "url": "assets/js/14.922c2aea.js",
    "revision": "7378e05c9ed2b2c89cebc7ba346b96b2"
  },
  {
    "url": "assets/js/15.917355d8.js",
    "revision": "2b89bcb4b84f72a908ea53b18ed78fc2"
  },
  {
    "url": "assets/js/16.3583573f.js",
    "revision": "73eb2dc604f1fc41aade796c769a1046"
  },
  {
    "url": "assets/js/17.dd831ef0.js",
    "revision": "161fd3d56f257ad027066078fdbe0800"
  },
  {
    "url": "assets/js/18.fef4058c.js",
    "revision": "da79248609d6eb7c93c68005ba18d559"
  },
  {
    "url": "assets/js/19.240f3f4e.js",
    "revision": "0739ef1ad712c5a971c3f994779a903b"
  },
  {
    "url": "assets/js/2.b9a7d0fe.js",
    "revision": "881acf7e7646fa38956c037be7088f33"
  },
  {
    "url": "assets/js/20.a1b302ec.js",
    "revision": "c1b3043a760d5f06cfe7a25552980133"
  },
  {
    "url": "assets/js/21.74f1e68a.js",
    "revision": "14ad4bad6f1919a36e5f0b4ef93392d2"
  },
  {
    "url": "assets/js/22.38d67202.js",
    "revision": "62524571f351b7e51262c3b4ee07a43f"
  },
  {
    "url": "assets/js/23.9c2d3c32.js",
    "revision": "d93fc5913cc12c702ffa8a9511613261"
  },
  {
    "url": "assets/js/24.eb59f9dc.js",
    "revision": "cf1bd14e4fc6f06441ee091baad2a0d5"
  },
  {
    "url": "assets/js/25.11dcd79c.js",
    "revision": "fc6e6416f6b0a8043e70a1527564614a"
  },
  {
    "url": "assets/js/26.5509bf4b.js",
    "revision": "6b4c2c65151ff04f57fd513a26cd693f"
  },
  {
    "url": "assets/js/27.96947dde.js",
    "revision": "2e77b230f511a346bd676995280a7385"
  },
  {
    "url": "assets/js/28.aa877a82.js",
    "revision": "c2e9373a2c61287b4144296504526fad"
  },
  {
    "url": "assets/js/29.0fdbed0d.js",
    "revision": "553a952b32a1f1ec008e96b06f24f402"
  },
  {
    "url": "assets/js/3.5a437c3a.js",
    "revision": "58d7326edd0b8ff2da2c1a842184c0be"
  },
  {
    "url": "assets/js/30.19d9a4cc.js",
    "revision": "ff6ee59dfed54132232ead9f71f44746"
  },
  {
    "url": "assets/js/31.c1d7d3b9.js",
    "revision": "b54a95c4d16bc6d305873584292be280"
  },
  {
    "url": "assets/js/32.75ca7e49.js",
    "revision": "c394856d8608ea4fa68d44cf239aa0dc"
  },
  {
    "url": "assets/js/33.f25cb0fd.js",
    "revision": "8618dcc6600e5c6508b25d2a75e48048"
  },
  {
    "url": "assets/js/34.8de2c8fc.js",
    "revision": "e3da818561d7d1468345b1c9f7014172"
  },
  {
    "url": "assets/js/35.5adac279.js",
    "revision": "4fc54318c47a8f49beb2425aed5d7d5a"
  },
  {
    "url": "assets/js/36.305b637c.js",
    "revision": "6fc019f0248d9e5c5f81015b7ba04a1a"
  },
  {
    "url": "assets/js/37.121aa4f0.js",
    "revision": "fd80c2d2aa02468ec14407293a053806"
  },
  {
    "url": "assets/js/38.3618062e.js",
    "revision": "8b05803358f9e312639ffede9a456068"
  },
  {
    "url": "assets/js/39.2134643e.js",
    "revision": "167e1c7a29722e8f3a190b6bc80972dc"
  },
  {
    "url": "assets/js/4.97f6d8af.js",
    "revision": "6c564322a3d67f99f0fee52bc51f44ea"
  },
  {
    "url": "assets/js/40.5e32e13e.js",
    "revision": "bf858a8b9ad91516c8a01b9ad3a96347"
  },
  {
    "url": "assets/js/41.6e8b9464.js",
    "revision": "8a80e3f4cb5f01d2ef1a1be8e4b6eaac"
  },
  {
    "url": "assets/js/42.c03df9ed.js",
    "revision": "d745cecc4e8113dc0842955deebf691d"
  },
  {
    "url": "assets/js/43.880bf4e4.js",
    "revision": "a8836ba9bbb48eb3e0305c280a27a278"
  },
  {
    "url": "assets/js/44.196bd0f0.js",
    "revision": "60f49959173559aa04601279d284e210"
  },
  {
    "url": "assets/js/45.0f2152c4.js",
    "revision": "c7e7bd8f36867a33844fc510b0e85a59"
  },
  {
    "url": "assets/js/46.b44de4d6.js",
    "revision": "ebe1ee063201d752a31a7f0863be4284"
  },
  {
    "url": "assets/js/47.44d76335.js",
    "revision": "20e3fd4d2bcbbebf287e23adffc9d84d"
  },
  {
    "url": "assets/js/48.62f273d2.js",
    "revision": "28575ee02bd53a92f3a83a6b2804d563"
  },
  {
    "url": "assets/js/49.2f9bf47a.js",
    "revision": "3a9d872d93e745c530ba7f895eace603"
  },
  {
    "url": "assets/js/5.d7c9d6f5.js",
    "revision": "27a00c1bde60e9c835a411c3280584e1"
  },
  {
    "url": "assets/js/50.66739c57.js",
    "revision": "d200e8ea5063f08290ea54dd2fc120d8"
  },
  {
    "url": "assets/js/51.cfeba724.js",
    "revision": "8bf3efc2acdb29bb0ba4581abf415832"
  },
  {
    "url": "assets/js/52.b1b02055.js",
    "revision": "e25c83abdd4bf487a7cc2db313d0a560"
  },
  {
    "url": "assets/js/53.61ac14e7.js",
    "revision": "16165f50438c39914044707a528c2065"
  },
  {
    "url": "assets/js/54.f35d9087.js",
    "revision": "b495db1ee95cbc89ecb86404998c3b34"
  },
  {
    "url": "assets/js/55.92e41c08.js",
    "revision": "1e6be7298483df5713c69f089914a751"
  },
  {
    "url": "assets/js/56.e2b8c791.js",
    "revision": "37ac09656c7786e9ab89ae1df3de266e"
  },
  {
    "url": "assets/js/57.950d3611.js",
    "revision": "591d2a514589a4f0b39f0d084652aec1"
  },
  {
    "url": "assets/js/58.ede946e7.js",
    "revision": "2b83c974cdca84653a18faa79f8d2512"
  },
  {
    "url": "assets/js/59.fa7d0df1.js",
    "revision": "77b52d027700b4d89ea86f2eb6044409"
  },
  {
    "url": "assets/js/6.18b6f3b6.js",
    "revision": "f15b876b79714684634e16c58f60d5bf"
  },
  {
    "url": "assets/js/60.99d1bd58.js",
    "revision": "9a14e4252ba2f754e23970a787a8d3de"
  },
  {
    "url": "assets/js/61.0394e636.js",
    "revision": "b0a6dd389b6566774f7e2d3ccc5f7064"
  },
  {
    "url": "assets/js/62.c6608f74.js",
    "revision": "83622f122ec18b2deca72487c00fdc74"
  },
  {
    "url": "assets/js/63.aafda877.js",
    "revision": "d27591e3d3157fb5f0ed451dbce4862c"
  },
  {
    "url": "assets/js/64.f8b0831a.js",
    "revision": "771c73f27d8efa8fa5cf7543dc17e345"
  },
  {
    "url": "assets/js/65.ea1b41c8.js",
    "revision": "7e3281d05264b83ad298b4e58c7f7bc8"
  },
  {
    "url": "assets/js/66.570a06ca.js",
    "revision": "45adbf69e646443c1cf911ddd7e0b67e"
  },
  {
    "url": "assets/js/67.fbf1b42f.js",
    "revision": "9d7b0b784831c7d9d195c294cc1d96f5"
  },
  {
    "url": "assets/js/7.3069b091.js",
    "revision": "7e7ab2ebdb916e89031155833fb4679f"
  },
  {
    "url": "assets/js/8.127bc27c.js",
    "revision": "9021a8082f8a4b39de18446806c43b62"
  },
  {
    "url": "assets/js/9.85b1c38c.js",
    "revision": "82f7012fb98f4c5d636de222609866fc"
  },
  {
    "url": "assets/js/app.2f31d35f.js",
    "revision": "1007089577d6b2d07492dbc3bfe52cf8"
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
    "url": "assets/md-imgs/baidu/baidu_tongji_01.png",
    "revision": "538100ec714b133b3684fdb552462e4d"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_02.png",
    "revision": "4f19a738b022630804c5f223b12a8b90"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_03.png",
    "revision": "e789705f38b89b8f3e4fd4b9bff06cc3"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04.png",
    "revision": "16d3b45c872e56a08305149c7f608e17"
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
    "revision": "3937e9f32e21bf9524535596a91f0acf"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "1da672d27bbe090e9645642e82c95f04"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "cf79f6b6f164ddc39012d32fec180ac4"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "a485648b9ec11443c06b87e3ad267869"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "7b5146028bc7ea7ce9b49cc68e634255"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "7ca353c25748e357b5f03a87e474494b"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "3b5c091be94fd43ad3b72457993d675c"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "4386ea443263f6ee2f9a7375181bdcd3"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "a5a14859afd0a39f58ac355abf5d9e12"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "a774a4a3842db65f36865dac7952c932"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "420f87e118081afd8589fd1530d35665"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "3d4ee73ee605de4a95de8ca2dd68c995"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "6b310401ac33c02745b8a57aec8469d8"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "ec8e96ddf5f6e53f48306b9e147f6c12"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "5175ab664347edebeede4c8780a5da73"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "d013d54149c1d619e30f95558651a755"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "6035108b69606d9e91d2978f36320f72"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "7d28e2cca23dceab3e8c5580a266b9b1"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "e34fc2c5b9d6a4138ae2b6bc9d975b58"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "3f479b7d7ba5135bc774eafa7f7ab278"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "f42f4b2a699c6a6f0b022e48b892e193"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "57f65c3073485008a7eddff093ea3014"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "3233b0092f9089ef5de35d718542ebc1"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "4aa71b1f02e0a0863dd3df3e98ef1800"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "9e7f7be3c3ad46f2b93e376bd140eedd"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "ddcdbf968ebb0df87e3d12b6363cba23"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "6374ce1ee88202da302311c19f0d12f1"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "314b9dc4246dd3372c051a1886417c38"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "7d3e6ea974171d0da52f62d6f7a9e0a5"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "4619535269b0ea732fb1fef1838cea05"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "b37e561535ba30517850b22364baf638"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "f3987ba8a14fbb3e2b326e3643f71e50"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "178e4ff0ec01065ac386918b5ba7329f"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "c10f69cb397dae222f6ed6660b2ca266"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "23bac3470c91a64a07bac4c8d49481d9"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "008072a74e0716df41785c824c623718"
  },
  {
    "url": "notes/10-前端/50-Vuepress/11-代码块复制.html",
    "revision": "f8eb2f2efad9bdcc8284988366deb993"
  },
  {
    "url": "notes/10-前端/50-Vuepress/12-全局搜索.html",
    "revision": "7876ed0abf7d0153a836cee105ecde55"
  },
  {
    "url": "notes/10-前端/50-Vuepress/13-图片放大.html",
    "revision": "97823beb390d72453c71504f8bb93eb5"
  },
  {
    "url": "notes/10-前端/50-Vuepress/14-样式更改.html",
    "revision": "410188f78f366be9fcd766a243cc9930"
  },
  {
    "url": "notes/10-前端/50-Vuepress/15-引入百度统计.html",
    "revision": "182615160a8152dcc1554d7c1a381b38"
  },
  {
    "url": "notes/10-前端/50-Vuepress/16-百度统计API使用.html",
    "revision": "5daf9146867f15a59598d06bb1d36542"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "76eae424201fd7fb5107b0eea22ff6d1"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "db3e78077dbd79c1139803ac5243851f"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "5e26709632da4beabf1feb0c6f937272"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "e61649aba0ab219d0d0206e3a7f21e3c"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "c6146523ae162436823da1af2ce56ee3"
  },
  {
    "url": "notes/66-随笔/10-阿雅/001-森林.html",
    "revision": "fd5d35a02ae1368906f6f652797a8ab9"
  },
  {
    "url": "notes/66-随笔/10-阿雅/002-村庄.html",
    "revision": "3ed8d74afe3f6dfae1e7238329b325fe"
  },
  {
    "url": "notes/66-随笔/20-百里/001-深坑.html",
    "revision": "af9184a4577405b0d143a91b3a00ff16"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "d612ed0b78fcd5b39918bacf243f4537"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "ecf623e6870252042567961145bee35e"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "57aa5d4f4e41698a6bb02b4d607f24f4"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "be00567dbc2d37dc47c2b09bac7f7fb7"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "8d88d93035ca20321e55645afa0324fc"
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
