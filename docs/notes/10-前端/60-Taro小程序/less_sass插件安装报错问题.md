### less、sass 插件安装报错问题

- 场景

![场景](/assets/md-imgs/taro-error-01.png)

-解决

根据报错，安装对应插件，依旧提示同样错误

.依照官网对 sass 问题的处理，尝试安装\$ npm install -g mirror-config-china，依旧不行

.后来发现 taro 版本过低，升级 taro

```js
taro update self
```
