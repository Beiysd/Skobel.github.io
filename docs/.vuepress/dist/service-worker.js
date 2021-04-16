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
    "revision": "ebced2b3abae36437d9a08f661502af9"
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
    "url": "assets/js/10.85157a18.js",
    "revision": "82d9e7f9fe609ea3580cdf9cc7d9ceaa"
  },
  {
    "url": "assets/js/11.bd63ae91.js",
    "revision": "484a38504c6e3da4435f95074626983a"
  },
  {
    "url": "assets/js/12.011f6d41.js",
    "revision": "591d9c2f6442d42ab1ca5585522647e7"
  },
  {
    "url": "assets/js/13.0382cae1.js",
    "revision": "eb2181cf8d790807d4d880c0aac188c6"
  },
  {
    "url": "assets/js/14.cf095902.js",
    "revision": "5424e46f940a84537d670e5cc67449a2"
  },
  {
    "url": "assets/js/15.432a966d.js",
    "revision": "214b4b4ee50ebcc6174aeacd8519f70d"
  },
  {
    "url": "assets/js/16.c2521c87.js",
    "revision": "30f81ce3b840427f255344d66b7709c4"
  },
  {
    "url": "assets/js/17.075d70b6.js",
    "revision": "9abfaa84908f9ec166aad94e162b24cc"
  },
  {
    "url": "assets/js/18.347d0a42.js",
    "revision": "168b6251db95b3febb1f6e29a80da01a"
  },
  {
    "url": "assets/js/19.87312855.js",
    "revision": "49f009d6a9efa3ca85d5628734f018db"
  },
  {
    "url": "assets/js/2.cef30ee9.js",
    "revision": "41e1c3a6236876d671a71035f50476be"
  },
  {
    "url": "assets/js/20.36469fd7.js",
    "revision": "ceeb933adf3b5c8151426249dfa1b901"
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
    "url": "assets/js/23.4e9f1d1f.js",
    "revision": "d3d6204e58882c7eb70b0d7ca8a32e80"
  },
  {
    "url": "assets/js/24.1d60ad32.js",
    "revision": "50a1430a5d25ce5e4f75bf591ede254d"
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
    "url": "assets/js/27.439d11e9.js",
    "revision": "95afd68df29733c3d728248d584407fd"
  },
  {
    "url": "assets/js/28.23a9f749.js",
    "revision": "45dcf112b55ac498f95008e46ba8322c"
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
    "url": "assets/js/31.0a0e59f1.js",
    "revision": "ddcef9a3719ba48c1b87b9f1eebae15f"
  },
  {
    "url": "assets/js/32.9778385f.js",
    "revision": "7516e001d6c43b157b1827fe0e0e94b7"
  },
  {
    "url": "assets/js/33.a98c0955.js",
    "revision": "5f3d2aec8be028541a513511f98e382d"
  },
  {
    "url": "assets/js/34.73176463.js",
    "revision": "3dc8fb45bd1cf19fae550455b66d3879"
  },
  {
    "url": "assets/js/35.03026a5c.js",
    "revision": "a13902ecbe4f76d83e8ef2ac235368c6"
  },
  {
    "url": "assets/js/36.f610d3ca.js",
    "revision": "519729c2b781b71a45fb795100d127b4"
  },
  {
    "url": "assets/js/37.8074f2f4.js",
    "revision": "282c179450b0314cc4b6c37eaecce05c"
  },
  {
    "url": "assets/js/38.cc4ed37d.js",
    "revision": "4d6195ef8cbb680350586f21f8b306e5"
  },
  {
    "url": "assets/js/39.1dab095b.js",
    "revision": "174a5519e7c27cede63f5678dc1fb8b7"
  },
  {
    "url": "assets/js/4.ce3248de.js",
    "revision": "60642e20362f140bf3d4d1a305d854be"
  },
  {
    "url": "assets/js/40.542873db.js",
    "revision": "ebdf21b37a354466ce08e3a5830ed5d0"
  },
  {
    "url": "assets/js/41.bfb134c3.js",
    "revision": "82808ef2d7f17be9ca08c5293bc9eaf0"
  },
  {
    "url": "assets/js/42.1cebc37a.js",
    "revision": "b3addf0838de6cabbe792e1f525978a5"
  },
  {
    "url": "assets/js/43.451e1712.js",
    "revision": "3b59f1021ac75b58d7f6b2a431a9429d"
  },
  {
    "url": "assets/js/44.3921851a.js",
    "revision": "a6ccff74f8a5dfa6a58aa6b95ce3f80b"
  },
  {
    "url": "assets/js/45.3d53d051.js",
    "revision": "98fbeb4d7cad83db1b9176fb7a7b4440"
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
    "url": "assets/js/50.786928ef.js",
    "revision": "fbc4b8e4be890e38e5471f928f2c47f6"
  },
  {
    "url": "assets/js/51.ef024b26.js",
    "revision": "f0c8f1efc968ffb5089ca30a092fada9"
  },
  {
    "url": "assets/js/52.55980619.js",
    "revision": "d5ae05937d805a8f38df1eeb4201691a"
  },
  {
    "url": "assets/js/53.0eb0db2e.js",
    "revision": "468517be940d47fdb84275a313944778"
  },
  {
    "url": "assets/js/54.d708209e.js",
    "revision": "b6b3918c8b29114e7be78443ac076bcc"
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
    "url": "assets/js/57.3595afdf.js",
    "revision": "585278dfd3cbd51414415847cd3df57f"
  },
  {
    "url": "assets/js/58.4b5ebabc.js",
    "revision": "2bad9b753c96303498b161c3f13a4f5d"
  },
  {
    "url": "assets/js/59.b68197ff.js",
    "revision": "d0463acbb5b3f4da021d070590168673"
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
    "url": "assets/js/61.c8c2799b.js",
    "revision": "6d94a800355733d653381ad591f21746"
  },
  {
    "url": "assets/js/62.0834e972.js",
    "revision": "47c8677fa32180e3cc05a1e0b8765c9b"
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
    "url": "assets/js/9.2c0cd0c6.js",
    "revision": "249f83b9ab43650a3f0b275abb642a2a"
  },
  {
    "url": "assets/js/app.88bbae67.js",
    "revision": "88e37e23c115ce93f586118c6e2f20c8"
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
    "revision": "12da8d7210746da19f669957a8d33663"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "2340dc3beccadfb1dc11673d72f65d00"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "053387d265ee41166a8deb0b63387ce4"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "14d610a9dc3c26e5a76e036d01d750d0"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "be568c5539549749f80d3f66d7e9f45c"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "c2e0801eb34c48dca2935effae473b87"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "7267b4a0d9a0579dd8675de110a10dbf"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "e50b46fef4eb1899c48acaf1a06a35b1"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "fbcea1f1d2edbcd41279460d2efe18c6"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "9c362632f09ed8e098c229223cf1098b"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "f2b052a9e4817ad9b09119de7f92b4d7"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "83faa4a00e1c3f3904f14dc8f3185e30"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "dd5bb48542ec03e33e924a7dc009ce03"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "02c8da7062d58bde6a65f76529191aa4"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "968b1b20bbf9c59c9785715e84899c22"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "e1ceacabbce5f8024b00edc2fc0a61af"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "0c2cecf46d36598dab8121102edcfefc"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "5225e297466237597f5b3a2f9e9cd4d5"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "e31f84e95dcdf817283c03264fb0b785"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "b5d0e7c0776b09928b3250501053228d"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "af8a419fa004b5e8973f980fe2b88423"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "4ec281e779bc58b93ce6dd453a4cf4cc"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "ed9207a33c8e056cd220541182f03fdf"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "7b2e8dbb8b22ccf40bd735b809b17d5a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "bbcabd86d6d1b09f71b5bc2b96c2a225"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "2f525dad52f5bc8531f141370508c612"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "5a4a042b8b17aee1a354c5431db807b9"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "a1d8092e6b321cc90e5bb373c87ab2ee"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "dc35ca73ab3c5afc66c42f205a54aca0"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "bb9be96b9e67ea68caad5cc7c0d73132"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "711362b7f6b4bf6bde2f87a613ae84f4"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "a80aeeb3a81011605dbf3deca4c583a2"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "ae668f8be4fc70d69a44b22c4bdad25a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "bb3e73214ab47f7f7dbecf548a38094f"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "9b34b24e0de3f66e9ff252da36a99939"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "419c6f6ea55c8df4d1fb57e913a3e8a0"
  },
  {
    "url": "notes/10-前端/50-Vuepress/代码块复制.html",
    "revision": "8d2d22dde332c781c7dd272aa08c2716"
  },
  {
    "url": "notes/10-前端/50-Vuepress/全局搜索.html",
    "revision": "1ea4b5eacb4209b21cd8ecbbfc4351b6"
  },
  {
    "url": "notes/10-前端/50-Vuepress/图片放大.html",
    "revision": "48f8e4647b0d8fd1df0f781b01e2e2dc"
  },
  {
    "url": "notes/10-前端/50-Vuepress/样式更改.html",
    "revision": "0bfbbcca723d444ed35b569b588f0d1b"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "4c8fa5dcf972e3dc36ddd8c5e4c3659b"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "86f64e98625ddb34c2547d2ee48d7484"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "da56eb955786eec7de8b52360dd9e804"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "3a93a90e70515eed0a866ceff3447666"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "dacc59f78384ae054b600965ee7e9e57"
  },
  {
    "url": "notes/66-随笔/10-阿雅/001-森林.html",
    "revision": "12e93379ab729c1ff0454ced3b9e2345"
  },
  {
    "url": "notes/66-随笔/10-阿雅/002-村庄.html",
    "revision": "a5ac37b1756f8892f0173d6b37209dd7"
  },
  {
    "url": "notes/66-随笔/20-百里/001-深坑.html",
    "revision": "ae6489e16fceba812958c9b49289eaf1"
  },
  {
    "url": "notes/98-杂谈/github报错信息记录.html",
    "revision": "bebf2ce6a75ad9a6f24271e70e928876"
  },
  {
    "url": "notes/98-杂谈/github速度慢解决方案.html",
    "revision": "b58f4b59bfb606f8bfd3fb044b825c83"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "ff91ee245c1815a0677dee82a16c90e4"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "863e2e47ff92910c3b642a7065ea0257"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "0d70a91e06fd9b6c931aeec6e99ae573"
  },
  {
    "url": "notes/test.html",
    "revision": "b67cc6b3f09e7cc28dae9c327644355b"
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
