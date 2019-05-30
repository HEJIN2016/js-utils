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

export const Common = {
    seo,
    throttle,
    dataURLtoBlob,
    getRandomNum,
    splitNum
};

export default {
    seo,
    throttle,
    dataURLtoBlob,
    getRandomNum,
    splitNum
}


