# js-utils

> js常用工具类函数

### 使用方法
1.直接调用
```html
<script src="utils.min.js"></script>
<script>console.log(Utils.Common.getRandomNum(1,30))</script>
```
2.import 调用

npm install h-utils.js -D
```javascript
import Utils from 'h-utils.js';
console.log(Utils.Common.getRandomNum(1,30));
```

3.require引用

npm install h-utils.js -D
```javascript
const Utils = require('h-utils.js').default;
console.log(Utils.Common.getRandomNum(1,30));
```

4.按需引用
```javascript
import Common from 'h-utils.js/common/common';
console.log(Common.getRandomNum(1,30));

const Common = require('h-utils.js/common/common');
Common.default.getRandomNum(1,30);
```

### Api
#### Base64模块
  1.Base64编码
  Utils.Base64.encode("12");
  2.Base64解码
  Utils.Base64.decode("MTI=")
  
#### Md5模块
  md5加密
  Utils.Md5("test");
  
#### Common模块
  1.百度SEO
  Utils.Common.seo()
  
  2.函数节流 节流函数fn
  Utils.Common.throttle(fn)
  
  3.base64位码转blob对象
  @params dataurl - dataUrl
  Utils.Common.dataURLtoBlob(dataUrl)
  
  4.获取n-m大小的随机整数
  Utils.Common.getRandomNum(1, 10)；
  
  5.将数字转成3位分隔符
  Utils.Common.splitNum(12003)  // 12,000
  
#### Valid 表单校验模块
  1.大陆手机号判断
  Utils.Valid.isPhone(15074956533)
  
  2.全中文汉字校验
  Utils.Valid.ChineseWordValid("中国")
  
  3.英文和数字校验
  Utils.Valid.wordNumValid("123sdd"); // true
  
  4.emoji表情校验
  Utils.Valid.emojiValid(params)
  
  5.大陆身份证校验
  Utils.Valid.IdentityCodeValid("430125455566556687") // false
  
#### Country模块 -- 全世界国家和地区的英文名、中文名、英文简称、国家区号数组
  console.log(Utils.Country);
  
#### Explorer浏览器相关模块
  1.从浏览器序列化get参数路径中获取参数
  例子：
```javascript
  var str = "http://baidu.com?a=1&b=2"
  console.log(Utils.Explorer.getUrlParam("a")); // 1
```
  2.获取ie浏览器版本
  tils.Explorer.IEVersion();
  
  3.浏览器滚动到底部时执行fn函数
  window.addEventListener('scroll', ()=>{
    Utils.Explorer.ScrollBottom(fn);
  })
  window.addEventListener('touchmove', ()=>{
    Utils.Explorer.ScrollBottom(fn);
  })
  
  4.判断手机浏览器版本
  console.log(Utils.Explorer.explorerType);
  
  返回参数说明：
    isAndroid： 是否为安卓环境
    isiOS：是否为ios环境
    isWeixin：是否为微信环境
    isQQ： 是否为qq环境
  
  
  
  