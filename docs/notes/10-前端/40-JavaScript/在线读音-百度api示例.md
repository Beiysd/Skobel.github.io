---
tag: JavaScript
author: beiysd
title: 在线读音-百度 api 示例
---

> 参考：https://www.cnblogs.com/HelloBytes/p/13069667.html

## 1.TTS

:::tip
TTS 是 Text To Speech 的缩写，即“从文本到语音”，是人机对话的一部分，让机器能够说话。
:::

TTS 是语音合成应用的一种，它将储存于电脑中的文件，如帮助文件或者网页，转换成自然语音输出。TTS 不仅能帮助有视觉障碍的人阅读计算机上的信息，更能增加文本文档的可读性。TTS 应用包括语音驱动的邮件以及声音敏感系统，并常与声音识别程序一起使用。 [百度百科](https://baike.baidu.com/item/TTS/3512737)

## 2.参数详解及注意事项

:::warning
1、本文示例中 api 疑似内部地址，不确定永久有效，如不能使用请查看[百度语音识别](https://ai.baidu.com/tech/speech)

2、识别内容长度最大为 1024，超出将无法识别
:::

### 示例

lan：文本类型-中文或英文，中文需用 encodeURI 转码

text：文本内容，最大为 1024

spd：发音语速 1-9，逐渐变快

```js
http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&text=" + 文本内容 + "&spd=" + 发音速度;
```

## 3.源码示例

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>百度语音示例</title>
  </head>
  <body>
    <div id="wordDiv">
      <audio
        src="http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&text=hello"
        id="word"
      ></audio>
      <p>
        <span id="english">hello </span>
        <button id="fanyiEn">点我发音</button>
      </p>
      <p>
        <span id="chinese">你好</span>
        <button id="fanyiCh">点我发音</button>
      </p>
    </div>
    <script>
      var word = document.getElementById("word");
      var wordEn = document.getElementById("english");
      var wordCh = document.getElementById("chinese");
      var fanyiEn = document.getElementById("fanyiEn");
      var fanyiCh = document.getElementById("fanyiCh");
      var wdEn = wordEn.textContent;
      var wdCh = wordCh.textContent;
      //spd语速
      var spd = 2;
      //英文
      fanyiEn.onmousedown = function () {
        word.src =
          "http://tts.baidu.com/text2audio?lan=en&ie=UTF-8&text=" +
          wdEn +
          "&spd=" +
          spd;
        word.autoplay = "autoplay";
      };
      // 中文
      fanyiCh.onmousedown = function () {
        word.src =
          "http://tts.baidu.com/text2audio?lan=zh&pid=101&ie=UTF-8&text=" +
          encodeURI(wdCh, "UTF-8") +
          "&spd=" +
          spd;
        word.autoplay = "autoplay";
      };
    </script>
  </body>
</html>

```
