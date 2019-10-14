# js-utils

> js常用工具类函数

### 使用方法
1.直接调用
```html
<script src="https://cdn.jsdelivr.net/npm/h-utils.js/dist/utils.min.js"></script>
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


### Api
#### Base64模块
  1.Base64编码
```javascript
   Utils.Base64.encode("12");
```

  2.Base64解码
```javascript
  Utils.Base64.decode("MTI=")
```

  
#### Md5模块
  md5加密
```javascript
  Utils.Md5("test");
```
  
#### Common模块
```
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
  
  6.字符串/数字数组去重
  
  Utils.Common.unique(["a", "a","b"]); // ["a","b"]
  
  7.生成uuid
  
  Utils.Common.getUuid();
  
  8.过滤某字符串中的中文字符
  console.log(Utils.Common.filterChineseWord("我是js插件h-utils")); // jsh-utils
  
  9.nodejs获取本地ip
  Utils.Common.getIPAddress()
  
  10.获取元素实际样式值
  let dom = document.getElementById("demo");
  Utils.Common.getStyle(dom, "height");
  
  11.获取display：none的元素的宽度高度等
  Utils.Common.getCurrentStyle(dom, "height")
  
  12. * 实现jquery sildeToggle效果
      * @param el dom元素
      * @param time 动画时长，默认值300ms
      * @param fn 回调函数
      * @returns {boolean}
   Utils.Common.slideToggle( dom,300,function(){})
```
  
#### Valid 表单校验模块
```
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
  
  6.邮箱校验
  Utils.Valid.emailValid()
```
  
#### Country模块 -- 全世界国家和地区的英文名、中文名、英文简称、国家区号数组
country未内置在Utils模块里，需要单独引入
```javascript
import Country from 'h-utils.js/common/worldCountry'
console.log(Country);
```
  
#### Explorer浏览器相关模块
  1.从浏览器序列化get参数路径中获取参数
  例子：
```javascript
  var str = "http://baidu.com?a=1&b=2"
  console.log(Utils.Explorer.getUrlParam("a")); // 1
```
  2.获取ie浏览器版本
  ```javascript
    Utils.Explorer.IEVersion();
  ```
  
  3.浏览器滚动到底部时执行fn函数
  ```javascript
  window.addEventListener('scroll', ()=>{
    Utils.Explorer.ScrollBottom(fn);
  })
  window.addEventListener('touchmove', ()=>{
    Utils.Explorer.ScrollBottom(fn);
  })
  ```
  4.判断设备是否有网络权限
  ```
  Utils.Explorer.validInternet();   // true
   ```
  
  
  4.判断手机浏览器版本
  ```javascript
  console.log(Utils.Explorer.explorerType());
   ```
  
  返回参数说明：
    isAndroid： 是否为安卓环境
    isiOS：是否为ios环境
    isWeixin：是否为微信环境
    isQQ： 是否为qq环境
    
  5.浏览器从底部减速缓慢滚动到顶部
  ```javascript
  Utils.Explorer.scrollToTop()
  ```
  
  
#### Cookie模块
```javascript
Utils.Cookie.set('name', 'value', { expires: 365, path: '/' });
Utils.Cookie.get('name'); // => 'value'
Utils.Cookie.remove('name');
```

### 设计模式
#### 观察者模式（发布-订阅模式）
```javascript
// 订阅消息
Utils.Observer.subscribe('test', function (e) {
  console.log(e);
});
// 发布消息
Utils.Observer.publish('test', {
  msg: '参数'
});
```
  
  
  