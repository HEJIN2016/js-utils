// 百度SEO
const seo = function() {
    let bp = document.createElement('script');
    let curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
};

// 函数节流
const throttle = function(method, context) {
    console.log(context);
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }.bind(this), context?context:1000);
};

// base64位码转blob对象
const dataURLtoBlob = (dataurl)=>{
    let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], {type:mime});
};

// 获取n-m的随机整数
const getRandomNum = (n, m)=> {
    return Math.ceil(Math.random()*(m-n), n);
};

// 将数字转成3位分隔符
const splitNum = function (num) {
    if (num === null || num === undefined) {
        return null;
    }
    if (typeof num === "number") {
        num = num.toString()
    }
    return num.replace(/\B(?=(?:\d{3})+\b)/g, ',')
};

// 字符串/数字数组去重
function unique(arr) {
    return Array.from(new Set(arr));
}

// 生成uuid
function getUuid() {
    let s = [];
    let hexDigits = "0123456789abcdef";
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    return s.join("");
}

// 过滤掉某个字符串中的中文字符
function filterChineseWord(str) {
    return str.replace(/[\u4E00-\u9FA5]/g, '');
}

// nodejs获取本地ip
function getIPAddress() {
  let interfaces = os.networkInterfaces();
  for (let devName in interfaces) {
    let iface = interfaces[devName];
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address;
      }
    }
  }
}

export const Common = {
    seo,
    throttle,
    dataURLtoBlob,
    getRandomNum,
    splitNum,
    getUuid,
    unique,
    filterChineseWord,
    getIPAddress
};

export default Common;


