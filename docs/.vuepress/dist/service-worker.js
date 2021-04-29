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
    "revision": "11c07ecb1b43aa6f1fca63bda83c6db4"
  },
  {
    "url": "assets/css/0.styles.2d6c58ce.css",
    "revision": "91f7b1d71fc2c2c7297a35ce59bb4367"
  },
  {
    "url": "assets/font/font_01.png",
    "revision": "a0b274d3e3158ad80a1ba4c18c4eb5c0"
  },
  {
    "url": "assets/font/font_02.png",
    "revision": "e4ea7ebd81194dd2fc4788c1c3a0accd"
  },
  {
    "url": "assets/gif/bow.jpeg",
    "revision": "b32cf93f4dfe693dcfc26f05ee01b496"
  },
  {
    "url": "assets/gif/bow2.jpeg",
    "revision": "873e08b1f19d01408b30606f1dc2d115"
  },
  {
    "url": "assets/gif/pk_loading_01.gif",
    "revision": "4d4ded543ac5b570807cb6fc816ac7c2"
  },
  {
    "url": "assets/gif/pk_loading_02.gif",
    "revision": "f571d1806f2d9acfbc15a8c138b1413d"
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
    "url": "assets/img/bow.b32cf93f.jpeg",
    "revision": "b32cf93f4dfe693dcfc26f05ee01b496"
  },
  {
    "url": "assets/img/catalog.2815a6ff.svg",
    "revision": "2815a6ff6aa68d2f73dc731a81acdaa8"
  },
  {
    "url": "assets/img/clock.ffb2d0be.svg",
    "revision": "ffb2d0be6522ddd61cb4d4c9c4208e65"
  },
  {
    "url": "assets/img/csdn.3fceea63.svg",
    "revision": "3fceea6302fafe8f2f232a152944b60a"
  },
  {
    "url": "assets/img/email2.80f4968b.svg",
    "revision": "80f4968b5289516e5082077d25cb39ce"
  },
  {
    "url": "assets/img/eye.e9087eed.svg",
    "revision": "e9087eed8e3a70f0ec6de1b8c54e6435"
  },
  {
    "url": "assets/img/gitee.fc3c17cb.svg",
    "revision": "fc3c17cbbf58ccb8e8236b464d53507d"
  },
  {
    "url": "assets/img/github.3a6420bc.svg",
    "revision": "3a6420bcd1130de54b5dfb4c80c352eb"
  },
  {
    "url": "assets/img/head.3fd0b1d0.svg",
    "revision": "3fd0b1d0a50bcee51ec61e7aa92fd539"
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
    "url": "assets/js/1.27cdd89f.js",
    "revision": "cc2fc6714b6f4ac4d7e91b051467786b"
  },
  {
    "url": "assets/js/10.ad64ffe1.js",
    "revision": "0bc6ecb0ed9ad902c5db90fc8899928a"
  },
  {
    "url": "assets/js/11.a94e1c7e.js",
    "revision": "9cfc574ac60103b0ed494634c4df50c2"
  },
  {
    "url": "assets/js/12.b2987513.js",
    "revision": "e756459096a8e05604a5eb80263be784"
  },
  {
    "url": "assets/js/13.fed3fb8b.js",
    "revision": "a6ccabd54c2bb8b3b3cc887f7fc360da"
  },
  {
    "url": "assets/js/14.bf6d0b9b.js",
    "revision": "0779dc5b3ea43ff5ff66dc5e9af3bbfc"
  },
  {
    "url": "assets/js/15.6ee8cc15.js",
    "revision": "47962032ef1582928da60b209de12123"
  },
  {
    "url": "assets/js/16.cd6782b6.js",
    "revision": "ace5af66ab683e9060b48ce202aaf8ed"
  },
  {
    "url": "assets/js/17.4116f7bb.js",
    "revision": "898d20651dc719fb15c05819cd921fc9"
  },
  {
    "url": "assets/js/18.cf0c0a15.js",
    "revision": "d04e86a48402d20fe8cb367613fbcfaf"
  },
  {
    "url": "assets/js/19.204c6d8c.js",
    "revision": "52f9116ae5fd827bcf05248350fdd108"
  },
  {
    "url": "assets/js/2.d4e10ce7.js",
    "revision": "d0d7ade331f91a72f14422518463d532"
  },
  {
    "url": "assets/js/20.6a352fff.js",
    "revision": "c38512f20db798363ba76866695fdf91"
  },
  {
    "url": "assets/js/21.c800ac62.js",
    "revision": "85396a6e9a74c8970ecb2a59bee56204"
  },
  {
    "url": "assets/js/22.ac80d381.js",
    "revision": "f8bccc4db708decba99369b094d666c9"
  },
  {
    "url": "assets/js/23.38ce6b09.js",
    "revision": "2987b4e842790b2c678b26f626f58496"
  },
  {
    "url": "assets/js/24.a90abcc7.js",
    "revision": "ec60230f3b7a6759fdf0eb3620c984b7"
  },
  {
    "url": "assets/js/25.5bd7c416.js",
    "revision": "c18caa9a9cc7f450f8614d6a50967463"
  },
  {
    "url": "assets/js/26.d752f673.js",
    "revision": "1cbba5b9580a717e4cad6d3949b3599e"
  },
  {
    "url": "assets/js/27.a37af29a.js",
    "revision": "8c70e6ced4508529f5a09fe91ebf3bff"
  },
  {
    "url": "assets/js/28.da5c14ff.js",
    "revision": "dc23dd3ce67269c8028e06aaeaaed1d3"
  },
  {
    "url": "assets/js/29.61b46e32.js",
    "revision": "a45e4f17d0ad5278c65dd8807a80b19c"
  },
  {
    "url": "assets/js/30.c28f88d5.js",
    "revision": "23530b215dc5c8d23a1fe3bc6593b70c"
  },
  {
    "url": "assets/js/31.eed6e221.js",
    "revision": "19891efbc0a0e55a385450a906ab211b"
  },
  {
    "url": "assets/js/32.84742930.js",
    "revision": "c1fedab5216742846a31c8fc285802df"
  },
  {
    "url": "assets/js/33.204660b0.js",
    "revision": "406811e7f7ac0c760a3fec664deb89f0"
  },
  {
    "url": "assets/js/34.78509ed4.js",
    "revision": "8f5a63c33d0abd1a472f0cc60e086d71"
  },
  {
    "url": "assets/js/35.38c0caef.js",
    "revision": "ea28d59832aa3c3ebd46beac70782dad"
  },
  {
    "url": "assets/js/36.01cb47e5.js",
    "revision": "6e59fd7e9ae6b990515b7302fa42d738"
  },
  {
    "url": "assets/js/37.991856d3.js",
    "revision": "e74c6b6f0ec19fbb5fabdb7b0ea0168b"
  },
  {
    "url": "assets/js/38.8f2c455d.js",
    "revision": "1ad943d7393f436b340e29dbd9187434"
  },
  {
    "url": "assets/js/39.96c4f78b.js",
    "revision": "caf1a14374cb712dcfdf3cd29cfd36b5"
  },
  {
    "url": "assets/js/4.147bae6a.js",
    "revision": "5c364a2918161df6b3f89ae80b922882"
  },
  {
    "url": "assets/js/40.436881e6.js",
    "revision": "da83e0bd52f3bf44a704cac8ffcc8498"
  },
  {
    "url": "assets/js/41.4cae1d53.js",
    "revision": "0f5e7497ad4801e6d5341477bfced13e"
  },
  {
    "url": "assets/js/42.0b6c7744.js",
    "revision": "20ee96bc8902d8546f59c68b97b6ac49"
  },
  {
    "url": "assets/js/43.753cde27.js",
    "revision": "a0e4569a8adc30815df313ddfc017fcf"
  },
  {
    "url": "assets/js/44.76ae4a89.js",
    "revision": "e4355e56c564fa180c5ba84de01416fb"
  },
  {
    "url": "assets/js/45.e9d6f739.js",
    "revision": "269d1bea7942f5de5719deeb66d73c16"
  },
  {
    "url": "assets/js/46.8286a108.js",
    "revision": "a4b4c5a79611adade7c038aeced8f711"
  },
  {
    "url": "assets/js/47.05474044.js",
    "revision": "9aeac91781ef1c9830b10940f5c72a98"
  },
  {
    "url": "assets/js/48.754c8fea.js",
    "revision": "b286d37fbb48ed69786b4e32b26532bf"
  },
  {
    "url": "assets/js/49.d38159b3.js",
    "revision": "8ee8b95dcf60a2c7408c6cca53b3723f"
  },
  {
    "url": "assets/js/5.93bd9fe5.js",
    "revision": "1114ad7faa5586cd8787281023a2ec23"
  },
  {
    "url": "assets/js/50.fa1e7789.js",
    "revision": "dde4bdddebe544c85f4f8e6d78d9ff56"
  },
  {
    "url": "assets/js/51.22743e00.js",
    "revision": "541ddbab06a3e425ad4b440da2601a43"
  },
  {
    "url": "assets/js/52.c7b9bd5d.js",
    "revision": "01787874323b59000dfceae01dd263d6"
  },
  {
    "url": "assets/js/53.8400969d.js",
    "revision": "2b4ad3d956b4aa7db23d52f07455b04c"
  },
  {
    "url": "assets/js/54.642c2512.js",
    "revision": "34df410d7e06165ae3c382f33ea9cbe5"
  },
  {
    "url": "assets/js/55.7f3a9b83.js",
    "revision": "a8d0197a8ba7a1429c6fa573324d59bc"
  },
  {
    "url": "assets/js/56.d578d494.js",
    "revision": "cc5563094cb595e75212437a71318f2b"
  },
  {
    "url": "assets/js/57.1319b68b.js",
    "revision": "a03b658f8bc7974fbc52441511f5929b"
  },
  {
    "url": "assets/js/58.016b2acf.js",
    "revision": "9f9eca6aba1d9965c67f8a45b55a3b7b"
  },
  {
    "url": "assets/js/59.3635242a.js",
    "revision": "2719b1d481367afb21ff9d71ff90b91f"
  },
  {
    "url": "assets/js/6.b40777e6.js",
    "revision": "9151b1df863e7c001057c58a3e602297"
  },
  {
    "url": "assets/js/60.11931225.js",
    "revision": "65388aeeb25772ed7e976aa33bb034b3"
  },
  {
    "url": "assets/js/61.ee256a4a.js",
    "revision": "e97d263c00f035caee69efd03afe3296"
  },
  {
    "url": "assets/js/62.1149d6b7.js",
    "revision": "b920904928158506482165d1bd314a52"
  },
  {
    "url": "assets/js/63.458a8225.js",
    "revision": "2a046e96e98ca9524ec4521a4b3741e0"
  },
  {
    "url": "assets/js/64.9d15892a.js",
    "revision": "f348ce0864dca10a60a3eb6878c0db31"
  },
  {
    "url": "assets/js/65.ab1d3e27.js",
    "revision": "b5d69dce24f26583d4b9b7d99589a476"
  },
  {
    "url": "assets/js/66.995a229b.js",
    "revision": "ae192a43e563f5e9d1b739579d5580a4"
  },
  {
    "url": "assets/js/67.61cc750d.js",
    "revision": "729733f7312202fe65f28af312c3b5e1"
  },
  {
    "url": "assets/js/68.086323e9.js",
    "revision": "d09cf9bd231f6edb41f8e6c039648e2e"
  },
  {
    "url": "assets/js/69.b31b1061.js",
    "revision": "51ad308f9fde42c3d68f6f363b0a7f6b"
  },
  {
    "url": "assets/js/7.a9a2fb59.js",
    "revision": "ff8b5727c77026a0783b0c9210a448aa"
  },
  {
    "url": "assets/js/70.a5ae6d4d.js",
    "revision": "11c707dfe4896c624fed0ba076bb3539"
  },
  {
    "url": "assets/js/71.8fbc1fa9.js",
    "revision": "a50f22209e4dfb01bde6843213ee94d5"
  },
  {
    "url": "assets/js/72.95233be1.js",
    "revision": "ad7e6a0cf540d1b19caa990f1121fdcc"
  },
  {
    "url": "assets/js/73.78ba142b.js",
    "revision": "ed90158c3eb843394405ab1684ddd541"
  },
  {
    "url": "assets/js/8.871273ea.js",
    "revision": "84ee0a5a3da86a32685cbfb604eac5d8"
  },
  {
    "url": "assets/js/9.0e0f8ab1.js",
    "revision": "05431b370809bede7ede9fb2bad0f608"
  },
  {
    "url": "assets/js/app.20cd7c57.js",
    "revision": "60218b504d5bc986e95fc83ea4d0b54e"
  },
  {
    "url": "assets/logo/article.svg",
    "revision": "d2976d2c4ac153a284def3b60e7afccb"
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
    "url": "assets/md-imgs/baidu/baidu_tongji_04_1.png",
    "revision": "ec21bb048b1e372847606b834c5270eb"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04_2.png",
    "revision": "7f2a75d90f10d73bda45db627ce7208a"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04_3.png",
    "revision": "666f6438738a188bb45dbcaf75f90d88"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_04.png",
    "revision": "16d3b45c872e56a08305149c7f608e17"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_05.png",
    "revision": "b702e62efd4a810ce183c6d3d3913fe0"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_06.png",
    "revision": "7f23729a6789ab72f48d8ed4a415e8b3"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_07.png",
    "revision": "28cf0b17e1330c1fd1875c926ab569d8"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_08.png",
    "revision": "2aab5451260c1d5e40b3053f312fdaec"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_09.png",
    "revision": "93f05dba153a947b2a1f18cc6c6f40cb"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_10_1.png",
    "revision": "035c0b0cab3855e4574af5faff2d9825"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_10_2.png",
    "revision": "2d699cbab13fbbd10d3fc9a9dce92646"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_10.png",
    "revision": "a63cf443a42eefe08c95d91d14e332dd"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_11_1.png",
    "revision": "7be1b0b5247ff7d56dd7a02e3e5fd99f"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_11.png",
    "revision": "69489df4083e92e161de51494e435c5e"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_12.png",
    "revision": "377a30317ca3411d44f681fb34f48e8d"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_13.png",
    "revision": "bfbd79f23303f4cf84b633193c6e9086"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_14.png",
    "revision": "59a92144d8157c0fb72d30aedcfcb136"
  },
  {
    "url": "assets/md-imgs/baidu/baidu_tongji_15.png",
    "revision": "bf6ff9b0fe6d34b8eb22296bdbb5f86f"
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
    "url": "assets/md-imgs/footer/csdn.svg",
    "revision": "3fceea6302fafe8f2f232a152944b60a"
  },
  {
    "url": "assets/md-imgs/footer/email.svg",
    "revision": "f2da738a5428693ee1e5284c9b562e24"
  },
  {
    "url": "assets/md-imgs/footer/email2.svg",
    "revision": "80f4968b5289516e5082077d25cb39ce"
  },
  {
    "url": "assets/md-imgs/footer/email3.svg",
    "revision": "287e946aa4d550ea8ac6b47f385f8687"
  },
  {
    "url": "assets/md-imgs/footer/gitee.svg",
    "revision": "fc3c17cbbf58ccb8e8236b464d53507d"
  },
  {
    "url": "assets/md-imgs/footer/github.svg",
    "revision": "3a6420bcd1130de54b5dfb4c80c352eb"
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
    "url": "assets/md-imgs/git/git_01.png",
    "revision": "74e26c5b715e1a3e6e1ff553a3ae029a"
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
    "url": "assets/md-imgs/home/bg_01.jpg",
    "revision": "f9fc40c421cc57be249e96418b3c042b"
  },
  {
    "url": "assets/md-imgs/home/bg_02.jpg",
    "revision": "ec443572c6b22ab01742c37187bb6229"
  },
  {
    "url": "assets/md-imgs/home/bg_03.jpg",
    "revision": "2ce41b74ce948c846e76639e88dacc8d"
  },
  {
    "url": "assets/md-imgs/home/bg_04.jpg",
    "revision": "94798876b9d5adf90e98671043250b13"
  },
  {
    "url": "assets/md-imgs/home/bg.jpg",
    "revision": "1158e0010f557ef2bc86d35d5e0dba9f"
  },
  {
    "url": "assets/md-imgs/home/bg01.jpeg",
    "revision": "6c9bc7081eefdfe68d3d2de304c01380"
  },
  {
    "url": "assets/md-imgs/home/bg02.jpeg",
    "revision": "490278b60f4aa984931d44acd1557c95"
  },
  {
    "url": "assets/md-imgs/home/bg03.jpeg",
    "revision": "85aa3950f473252282b6666a3a6881e5"
  },
  {
    "url": "assets/md-imgs/num_sound.png",
    "revision": "e4cb18d6014ad9bdab0363a5643d39ff"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_01.png",
    "revision": "0db7b8cf6d1b5df1cd8eaac378a454a9"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_02_1.png",
    "revision": "dee0150672ee6a2b4d97a40edb4b342d"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_02_2.png",
    "revision": "4f30d2d2a7880ead18009ffb6eded4e9"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_02.png",
    "revision": "d2bb8d81f646b90f497793bcd0481465"
  },
  {
    "url": "assets/md-imgs/selfTheme/self_theme_03.png",
    "revision": "2eb678ffae18d9f866e48b890b84691e"
  },
  {
    "url": "assets/md-imgs/server/centos_001.png",
    "revision": "6ea474fa36f84576bed1de03895d0671"
  },
  {
    "url": "assets/md-imgs/server/linux_01.png",
    "revision": "833dea9ad5f88013a0ee70c316a6684c"
  },
  {
    "url": "assets/md-imgs/server/linux_03.png",
    "revision": "85fec4b5d51f8f29478e62f8b0c4fd86"
  },
  {
    "url": "assets/md-imgs/server/linux_04.png",
    "revision": "6b84bf5bd860639edb55ba6302491d5b"
  },
  {
    "url": "assets/md-imgs/server/linux_05.png",
    "revision": "729dd0e263fee59e7e1442da20a553fc"
  },
  {
    "url": "assets/md-imgs/server/linux_06.png",
    "revision": "27a8a7185ebcdfa99c36fd020c49ff40"
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
    "url": "assets/md-imgs/svg/404.svg",
    "revision": "a5d151c9fda4d31805f82b9bd365a084"
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
    "revision": "0bc355513b10e215055ae1470d8e4dbf"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "af3cb0f673ec5cee00b46b917ac50652"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "95425582cc08582a89d14c4cf1abb300"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "8ac40e1cf532e4b43c69a62b73c17a41"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "e522e0c5901d3dd29e566a35ef9dcda9"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "8e67acef730d2a2e8ad4966f77e2ea9d"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "2f495a5198658a51ed9ada4881725e87"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "f13d9328ee39c858e7fae6ae95e19fa1"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "786b82a5e6923f785aea3776156ff840"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "b2e160de3f40a99594828b35028b6ba6"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "95425582cc08582a89d14c4cf1abb300"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/1-字体选中样式更改.html",
    "revision": "a51ef2ea733363809e519d41ba0c87e5"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/2-引入外部字体.html",
    "revision": "7501467bf02b4ee994ddcaaea5c1ca0f"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "87d7d2f7923bd6645b77564b289e76fd"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "a6abe358d6561c445055af30f6727f29"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "3d63a374850fb2967b7caa46d2b74be6"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "3857916834774521a106a8b69cea56d8"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "12b0fd17400330de3003c3b0f63c5552"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "adb6fbf05f68d58d89d76746809cb465"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "f93d1c4a62b4041c3a3bcdf07967cb96"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "c0a9931988cb68a96f761226539afe43"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "8f2ba3da9cc84485b7cad76f1551880f"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "19fd1a7de24f7a278aa8dcadbc712517"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "3a9ceffd7d53028d38641b6a4474109c"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "2564202b491f530a5e3ddfe0167dfa56"
  },
  {
    "url": "notes/10-前端/31-Vue/1-监听路由.html",
    "revision": "645351b09dac715b599ceccf031533ce"
  },
  {
    "url": "notes/10-前端/31-Vue/2-计时器使用.html",
    "revision": "cee3b967a2d563767fa1b911f6897116"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "d5657924eb565eb349224f6335d74319"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "0acce201f198a7c5c05dac766701a7aa"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "c08bd83073ae3c15b5b06884ec49d4a1"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "7bf9e4efeae71a80663f51d5bcacb39a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "55cba743889351098cde68b7a888f8fb"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "220212381a81589c5b962ba676b80ca6"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "618b0607e99968ad90ed979260711690"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "ed7a957707fef9a0c649932ae6158bd7"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "4e7486af1d40d1af787db73c2e94881c"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "88e2e4864a90925c14a095d78a3d5fd5"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "ac62ba6303173826be01ca9b87d4f642"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "8ae44303ba258bb858f1add4ddfb892b"
  },
  {
    "url": "notes/10-前端/50-Vuepress/11-代码块复制.html",
    "revision": "a54fb49a2cfe5cf49542d04f79740165"
  },
  {
    "url": "notes/10-前端/50-Vuepress/12-全局搜索.html",
    "revision": "21e39a5ef813e64abdcf1aca2ad8abd7"
  },
  {
    "url": "notes/10-前端/50-Vuepress/13-图片放大.html",
    "revision": "8e0e2d393ee761f6faf3483099a94b85"
  },
  {
    "url": "notes/10-前端/50-Vuepress/14-样式更改.html",
    "revision": "44ff3bd8bdfb3aacef9dcd654f309de7"
  },
  {
    "url": "notes/10-前端/50-Vuepress/15-引入百度普通版统计.html",
    "revision": "b1832c4ea659fb8ce18745cf2a1c2724"
  },
  {
    "url": "notes/10-前端/50-Vuepress/16-自定义主题开发.html",
    "revision": "6fa1d1fb98e3b23e2402487c07d56af9"
  },
  {
    "url": "notes/10-前端/50-Vuepress/17-百度普通版统计API使用.html",
    "revision": "503bb5aa0794d36cd895c448016bfac2"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "d83dd3a287fb15ba1c997b57c33c43c3"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "0936fa7f6c813d80fa12ef87d24613eb"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "9c74bbf9e2084a07ba0022084cd75744"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "f954650168dfb98688ee361bd74d9880"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "781969eeba43bf8bbab3354debff2a56"
  },
  {
    "url": "notes/20-后端/11-Linux/1-行内常用命令集合.html",
    "revision": "2dd2c673e5456ee7ad3d3a7b14114cf6"
  },
  {
    "url": "notes/98-杂谈/10-GitHub/github报错信息记录.html",
    "revision": "450ed006e13430e88bee83ee6aab0a53"
  },
  {
    "url": "notes/98-杂谈/10-GitHub/github提交代码失败的几种原因.html",
    "revision": "4e6a281d7c8d00d635d2b0c487d3142e"
  },
  {
    "url": "notes/98-杂谈/10-GitHub/github速度慢解决方案.html",
    "revision": "af5af2e7b559089f0054dbb4ee918ff4"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "5857f6f91e7082435013f138b8e61e11"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "71ef9423c11359524155783e68a01091"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "b126b26f04ca48066e704c557f4d754a"
  },
  {
    "url": "notes/关于.html",
    "revision": "b48eebf7b672eb3ac6825da02821d840"
  },
  {
    "url": "notes/时间轴.html",
    "revision": "9d6e41c1ef729a05f6bc251e5a267ca1"
  },
  {
    "url": "utils/autopush-baidu.js",
    "revision": "bf96a691b27f6b242ac8ebce9940e77a"
  },
  {
    "url": "utils/get-sidebar-by-dir.js",
    "revision": "74a41817eec04149627e0435d02ce602"
  },
  {
    "url": "utils/tongji_baidu.js",
    "revision": "db3c5ef6b01d88d551a84f0eaf2231f9"
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
