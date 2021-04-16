### KB 单位转换

```js
/**
 * @name twoDecimal
 * @param {Number} val 传入数字
 * @param {Number} len 位数-需要取小数点后几位-默认2位
 * @remake Math.round(val) 四舍五入取整
 * @remake Math.floor(val) 向下取整
 * @description 运算，取小数点后两位
 */
function twoDecimal(val = 0, len = 2) {
  let digit = Math.pow(10, len); //指数幂
  let num = Math.round(val * digit) / digit;
  return num;
}
/**
 *
 * @param {Number} num1 标准数据
 * @param {Number} num2 源数据
 * @description 计算num2是num1的最大次方
 * @returns 最大次方
 */
const power = (num1, num2) => {
  let _power = 0;
  if (
    num1 &&
    num2 &&
    typeof num1 === "number" &&
    typeof num2 === "number" &&
    num2 > num1
  ) {
    //递归
    function numPower(val1, val2) {
      let _quotient = val2 / val1; //商
      if (_quotient >= val1) {
        _power += 1;
        numPower(num1, _quotient);
      }
    }
    numPower(num1, num2);
    _power += 1; //num2>num1-最初始+1
  }
  return _power;
};
/**
 * @name unitConver
 * @param {Number} val 原始大小/B(byte:字节)=8b(bit:比特位); 1字符=2字节
 * @remake B,KB,M,G,T,PB,EB,ZB,YB,BB
 * @remake Math.pow(1024, x);x=1,2,3,4,5,6,7,8,9,10
 * @return 返回相对应的大小描述
 */
function unitConver(val = 0) {
  let size = Number(val) || 0; //规范传入值
  let sizeList = ["B", "KB", "M", "G", "T", "PB", "EB", "ZB", "YB", "BB"];
  let standNum = 1024; //标准值
  let _power = power(standNum, val); //幂指
  let tag = sizeList[_power];
  size = twoDecimal(size / Math.pow(standNum, _power));
  return size + tag;
}
```
