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
    "revision": "c62bab657305729ff754b68a97012d6d"
  },
  {
    "url": "assets/css/0.styles.6e36fe2a.css",
    "revision": "69446548fa5cf4fd31a8abc91ec9fdd2"
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
    "url": "assets/img/catalog.2815a6ff.svg",
    "revision": "2815a6ff6aa68d2f73dc731a81acdaa8"
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
    "url": "assets/js/10.9e2fcff4.js",
    "revision": "87a7f9487b5b042f825cd3aeb2d0dc6e"
  },
  {
    "url": "assets/js/11.4640c2c8.js",
    "revision": "bc6655cd6161c8865ed22ef2df7724e2"
  },
  {
    "url": "assets/js/12.31581229.js",
    "revision": "3d997d444b4f54ce5b6c6a0bf89c01c6"
  },
  {
    "url": "assets/js/13.6eebc9ac.js",
    "revision": "c180d2bdc4c1317eee0b3c750aa1437e"
  },
  {
    "url": "assets/js/14.8b37dee8.js",
    "revision": "cdc8b6176ffbf11d06564a3c0d00779e"
  },
  {
    "url": "assets/js/15.c57f50db.js",
    "revision": "6c79d63f5dbf6efd4aff132ab497f4d7"
  },
  {
    "url": "assets/js/16.17f5ae47.js",
    "revision": "fde17020d968b66a29e89a2294aeaa20"
  },
  {
    "url": "assets/js/17.60ff335f.js",
    "revision": "55c0d57d312dea4f5bcd291e4b511408"
  },
  {
    "url": "assets/js/18.7c296c2a.js",
    "revision": "f5ba4d2906edd6f6bf09470b0bd60c2d"
  },
  {
    "url": "assets/js/19.4ae64374.js",
    "revision": "5cbc1881567f459ec9822d65bc42eb75"
  },
  {
    "url": "assets/js/2.bbb259d3.js",
    "revision": "4bed001203368a46dae3845b579d320d"
  },
  {
    "url": "assets/js/20.de2f2e57.js",
    "revision": "f677f1be36a6ea4fa97fd66be779a638"
  },
  {
    "url": "assets/js/21.b592013c.js",
    "revision": "3d1934d904b5220bbbdf0afc6d16027a"
  },
  {
    "url": "assets/js/22.1626b3da.js",
    "revision": "49d134c4adcf2246074af483e952208d"
  },
  {
    "url": "assets/js/23.a002cd8a.js",
    "revision": "736db7ff52348d9993cd4e2e654c0c48"
  },
  {
    "url": "assets/js/24.424f8201.js",
    "revision": "498b109dc345aa58d211c567f5cb3cfc"
  },
  {
    "url": "assets/js/25.89bf7360.js",
    "revision": "add0f4b53fd3073004d6d0c8a8697bb5"
  },
  {
    "url": "assets/js/26.b1eed4a1.js",
    "revision": "7f176505f264ae2cc3fca8e8fe324a1f"
  },
  {
    "url": "assets/js/27.2e1853b4.js",
    "revision": "aa479f03c89d529341637287c310049a"
  },
  {
    "url": "assets/js/28.420464c7.js",
    "revision": "48443d566ab6af4b51d2775b60eb84b0"
  },
  {
    "url": "assets/js/29.3c6505e7.js",
    "revision": "0d37ecc313a99ab688e718ad442175cf"
  },
  {
    "url": "assets/js/3.436c97de.js",
    "revision": "3bce4d10fdc03c9788f4d01d8d7b2dc9"
  },
  {
    "url": "assets/js/30.85b4170a.js",
    "revision": "cee6ca5912b9cc997f1d171863abf566"
  },
  {
    "url": "assets/js/31.1602d3dc.js",
    "revision": "ca131ffe73c3ce90db81d8240e86a6aa"
  },
  {
    "url": "assets/js/32.0f83b6ca.js",
    "revision": "7ffab444c72a49b7400e26d0ec247b3c"
  },
  {
    "url": "assets/js/33.02260301.js",
    "revision": "f8c3b83b9d728a95bf717d078400ade7"
  },
  {
    "url": "assets/js/34.87ee0cdf.js",
    "revision": "9a814e9cfad546aa5e094801155a8036"
  },
  {
    "url": "assets/js/35.b5cab628.js",
    "revision": "a0ca29b840ea959eeba71d33402fe8d6"
  },
  {
    "url": "assets/js/36.f40c9a02.js",
    "revision": "8313418c7592dedd0326af6e853bd539"
  },
  {
    "url": "assets/js/37.8623357d.js",
    "revision": "d31d709f3a7fcc404f8d9c0a934914b0"
  },
  {
    "url": "assets/js/38.802b7fba.js",
    "revision": "39f444d1df2bc16a45ebabe2dc62eea7"
  },
  {
    "url": "assets/js/39.e15992af.js",
    "revision": "9f7972ef5f88d3b93e624d5127789565"
  },
  {
    "url": "assets/js/4.d44fd9e0.js",
    "revision": "12b5f1172fe8d54956d332129292ccb5"
  },
  {
    "url": "assets/js/40.612fa3e9.js",
    "revision": "7a993664bffcd9b0f462d44545fd372a"
  },
  {
    "url": "assets/js/41.0b1d3802.js",
    "revision": "2aab379e4b0278a73d866a6d0438378f"
  },
  {
    "url": "assets/js/42.4cedad6e.js",
    "revision": "080c889cf3713831ff9ae9d28fa25f89"
  },
  {
    "url": "assets/js/43.2fa7ccad.js",
    "revision": "653b9e35cea09f406a1618e9923955a8"
  },
  {
    "url": "assets/js/44.2848c035.js",
    "revision": "d1b8826a9202c29c28351d5fba669522"
  },
  {
    "url": "assets/js/45.1ce0f8f4.js",
    "revision": "64277de7b623b3cfa473a9f98dbd0f41"
  },
  {
    "url": "assets/js/46.401a2b6a.js",
    "revision": "44a86bd19860fa58bc6c1f08e3f6c2ba"
  },
  {
    "url": "assets/js/47.78ff1ca7.js",
    "revision": "fe268835a0a9aa5e9e859765dd30bec4"
  },
  {
    "url": "assets/js/48.910fd34c.js",
    "revision": "ae3be7087d9c0b5876c2273033dbaf61"
  },
  {
    "url": "assets/js/49.22fe5480.js",
    "revision": "848fed4d6da87404d06d7e7503713fcd"
  },
  {
    "url": "assets/js/5.bfbec7bb.js",
    "revision": "58a7a68ce6b10110bd98613c91e4e2d5"
  },
  {
    "url": "assets/js/50.93d6b9c5.js",
    "revision": "fabfef7e9a47e85dab7a04bd923c1a8e"
  },
  {
    "url": "assets/js/51.6b183795.js",
    "revision": "b9a5f3c8a519877dd3bff70392d043e6"
  },
  {
    "url": "assets/js/52.bdf1949a.js",
    "revision": "14496ba977ecab9567f97f38438aead8"
  },
  {
    "url": "assets/js/53.a917759a.js",
    "revision": "37b6529d5b94dd4a6468d4e82454bfc5"
  },
  {
    "url": "assets/js/54.cd3ab2ef.js",
    "revision": "2d3ab7f4b54069661680d64f7a20db3c"
  },
  {
    "url": "assets/js/55.7ed62a1c.js",
    "revision": "37774d3bbab48ef83fd45138ddd63d66"
  },
  {
    "url": "assets/js/56.a166b98a.js",
    "revision": "1bd6157afdf697318c45ebf9bc4cb983"
  },
  {
    "url": "assets/js/57.8ce2b69e.js",
    "revision": "6d22d8fb9d4266574ae86720430c3178"
  },
  {
    "url": "assets/js/58.79f83aba.js",
    "revision": "dc84d1a7b4457eb01ce1e866f6d72b21"
  },
  {
    "url": "assets/js/59.25a772ce.js",
    "revision": "2d4a45f14a9b0366b3224b6ea548a6c7"
  },
  {
    "url": "assets/js/6.68bf1dad.js",
    "revision": "436432a6bf11676d702d8e0975d9d7b2"
  },
  {
    "url": "assets/js/60.76dfd471.js",
    "revision": "b413ed149f549f2daa83d8be35baa70a"
  },
  {
    "url": "assets/js/61.a451b4b6.js",
    "revision": "83bbaef4099cea8d2c178e1e068557f2"
  },
  {
    "url": "assets/js/62.4c584ebb.js",
    "revision": "5d25fde976304144c4532067fa83e651"
  },
  {
    "url": "assets/js/63.133b861a.js",
    "revision": "4b6516ff9769bc2ef8a597c9b2c23773"
  },
  {
    "url": "assets/js/64.84a7a583.js",
    "revision": "097aaa596af05f4945fd3ae069c0a6a4"
  },
  {
    "url": "assets/js/65.8e44c1ea.js",
    "revision": "dd1f731bb0b625d0ad7ca796f1c6c138"
  },
  {
    "url": "assets/js/66.93e8df5d.js",
    "revision": "2df92f8904df131e794354c7a41cce42"
  },
  {
    "url": "assets/js/7.bdd44802.js",
    "revision": "637bec84b4e72e48f981b07ab90ee851"
  },
  {
    "url": "assets/js/8.95f2a4ac.js",
    "revision": "5c2266bc6ef94a72a8bec2f076741e10"
  },
  {
    "url": "assets/js/9.c0a4d51b.js",
    "revision": "236fe1ef4ca69c5d05d381bc7818231f"
  },
  {
    "url": "assets/js/app.1528d41c.js",
    "revision": "5e0f0144ec51c348b87200eceff495e9"
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
    "revision": "393b032ba74405217d6e67e9c29cae7e"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Checkbox.html",
    "revision": "226efae3dacf184984bd0fddec9bbf22"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/DatePicker.html",
    "revision": "aabaddd2e3befa317f44d6ef335b920d"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Input.html",
    "revision": "e8c3002515b10c704107872cdd7f1181"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Modal.html",
    "revision": "8ea6967f885606171a98d8c7607c9925"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Popover.html",
    "revision": "da9a34965429ea6b470882475065d7da"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Progress.html",
    "revision": "1a36af70fe9ae7533aa4d2ca3902c43b"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Select.html",
    "revision": "b402b2232f651b52a233daa0ec37e593"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Table.html",
    "revision": "7ca1146e4939a208e5892161e288d3c2"
  },
  {
    "url": "notes/10-前端/10-CSS/10-Antd3.x/Upload.html",
    "revision": "9e8776ae195e552eabc87d06bd0ec64e"
  },
  {
    "url": "notes/10-前端/10-CSS/20-Antd4.x/DatePicker.html",
    "revision": "b63ba8fdfde78bdf8dfbe3cecf72b1c8"
  },
  {
    "url": "notes/10-前端/10-CSS/30-Css3/字体选中样式更改.html",
    "revision": "eaeba66d3d789658eff63b955fc6a21f"
  },
  {
    "url": "notes/10-前端/20-常用方法/KB单位转换.html",
    "revision": "0ac8dd90107bc15572b50ede023ccea2"
  },
  {
    "url": "notes/10-前端/20-常用方法/Scroll滚动.html",
    "revision": "750cdfada369a614e4dee7e33a7c186d"
  },
  {
    "url": "notes/10-前端/20-常用方法/URL传参.html",
    "revision": "c0600245bb0b2ace8573c6685dc45ec0"
  },
  {
    "url": "notes/10-前端/20-常用方法/一键复制.html",
    "revision": "10fb6f25d07c66fe47389574b934d940"
  },
  {
    "url": "notes/10-前端/20-常用方法/小数点后X位.html",
    "revision": "3165caa41758fcc59943999ae92c1d9e"
  },
  {
    "url": "notes/10-前端/20-常用方法/常用正则.html",
    "revision": "e032b892dc6f06fb27eed1694937f199"
  },
  {
    "url": "notes/10-前端/20-常用方法/数组均分.html",
    "revision": "39aa1cabd8a571036ea963e813f08b66"
  },
  {
    "url": "notes/10-前端/20-常用方法/时分秒转换.html",
    "revision": "512dfcc2a5ce2c4b655b495ab955fdb0"
  },
  {
    "url": "notes/10-前端/20-常用方法/浏览器缓存取用.html",
    "revision": "416fcf73f745335f357555ac581e181a"
  },
  {
    "url": "notes/10-前端/20-常用方法/防抖函数.html",
    "revision": "47ebbdaaad54a0b3a23519ed82b7d5cb"
  },
  {
    "url": "notes/10-前端/20-常用方法/随机数生成.html",
    "revision": "bb2d038dee64306d86e08daf408c1417"
  },
  {
    "url": "notes/10-前端/30-React/Error Boundaries错误边界.html",
    "revision": "546ed9c7404345ab4a565080ad072bc3"
  },
  {
    "url": "notes/10-前端/40-JavaScript/onFocus.html",
    "revision": "5c4c2ddaef659d06cdf56d781121e4b7"
  },
  {
    "url": "notes/10-前端/40-JavaScript/Reduce方法.html",
    "revision": "f09922bb7ae30baa954e3c1112d99851"
  },
  {
    "url": "notes/10-前端/40-JavaScript/window常用方法.html",
    "revision": "9e8035cd8d57e334f7b0b07ec0260ee1"
  },
  {
    "url": "notes/10-前端/40-JavaScript/在线读音-百度api示例.html",
    "revision": "64b27c00bf085c1096e1cf2bee0e8a8a"
  },
  {
    "url": "notes/10-前端/40-JavaScript/对数组操作.html",
    "revision": "03158cf0ebadaf24a2f17a6060bcf491"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽文字选中.html",
    "revision": "9a20db5fc9dc165f0c6ee202c11f6b3b"
  },
  {
    "url": "notes/10-前端/40-JavaScript/屏蔽鼠标右键.html",
    "revision": "825e7a49b301c968445e81b9e195a74b"
  },
  {
    "url": "notes/10-前端/40-JavaScript/打包时间显示.html",
    "revision": "5958bc8be4b12c8d34f6ee49b0d698a3"
  },
  {
    "url": "notes/10-前端/40-JavaScript/时间小记.html",
    "revision": "f75a027e7e22b3f986f2c1238598479d"
  },
  {
    "url": "notes/10-前端/40-JavaScript/浏览器缓存.html",
    "revision": "fcbdca2daf18660908e8a2ca34572fc7"
  },
  {
    "url": "notes/10-前端/40-JavaScript/输入框千分位数字显示.html",
    "revision": "9a3764852734c4332a5facd1340e57d5"
  },
  {
    "url": "notes/10-前端/50-Vuepress/10-注意事项.html",
    "revision": "04b1d035e4edccddfa94ce93116f7c34"
  },
  {
    "url": "notes/10-前端/50-Vuepress/11-代码块复制.html",
    "revision": "2f38a1519cd3ac37e13a01f04354044a"
  },
  {
    "url": "notes/10-前端/50-Vuepress/12-全局搜索.html",
    "revision": "1e8383f79103b27e5b7ec55b476541cd"
  },
  {
    "url": "notes/10-前端/50-Vuepress/13-图片放大.html",
    "revision": "79f9ac14977e0abeb7350064bb3b167b"
  },
  {
    "url": "notes/10-前端/50-Vuepress/14-样式更改.html",
    "revision": "6b5593589af2772d77b8b630445a19c1"
  },
  {
    "url": "notes/10-前端/50-Vuepress/15-引入百度普通版统计.html",
    "revision": "5804a69a697c62a619d57c34f97476ad"
  },
  {
    "url": "notes/10-前端/50-Vuepress/16-自定义主题开发.html",
    "revision": "eb29116d06ea2f647c917cf12a2dd67b"
  },
  {
    "url": "notes/10-前端/50-Vuepress/17-百度普通版统计API使用.html",
    "revision": "79efa65b7c12bb6cc702ab904c0c7d46"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/less_sass插件安装报错问题.html",
    "revision": "63c519f8f02f9e3ca98e67aefa651db9"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/React模板生命周期.html",
    "revision": "f0a67a29d998b08428fdbc54b89ea87b"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro_h5并行开发.html",
    "revision": "03ebcb50e3c6892687fafd188842cef0"
  },
  {
    "url": "notes/10-前端/60-Taro小程序/taro+canvas画圆形进度条+canvas转图片.html",
    "revision": "ba1847ae4cc162726ed288722043d97b"
  },
  {
    "url": "notes/20-后端/10-Nginx/1-Nginx跨域处理.html",
    "revision": "fabe4cac31911f1c548b511899d704fc"
  },
  {
    "url": "notes/66-随笔/10-阿雅/001-森林.html",
    "revision": "4e9ececdeb340eec6572b1bf358e02bd"
  },
  {
    "url": "notes/66-随笔/10-阿雅/002-村庄.html",
    "revision": "17b0dff07cc570603113a78d4bdeac53"
  },
  {
    "url": "notes/66-随笔/20-百里/001-深坑.html",
    "revision": "2586f2a721f28809ebcf17ce6493de98"
  },
  {
    "url": "notes/98-杂谈/GitHub/github报错信息记录.html",
    "revision": "40626e49cae990f086b95db8ab8d3b8a"
  },
  {
    "url": "notes/98-杂谈/GitHub/github速度慢解决方案.html",
    "revision": "2c3e510906338e8c0aaef91068916bd8"
  },
  {
    "url": "notes/98-杂谈/最受欢迎.html",
    "revision": "1595fdada26847cd3df228e48cc3eb6b"
  },
  {
    "url": "notes/99-开发相关/前端代码规范.html",
    "revision": "e55c1fc020d1e18a68a4a192bc1cb7fb"
  },
  {
    "url": "notes/99-开发相关/开发注意事项.html",
    "revision": "f3ea12d52c9c41e711ebc128d9d2b17b"
  },
  {
    "url": "notes/关于.html",
    "revision": "56afcc750ef727e5dffa110145ad465f"
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
