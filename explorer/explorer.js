// 获取URL参数
const getUrlParam = function (name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    let r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null)
        return decodeURIComponent(r[2]);
    return null; //返回参数值
};

// 判断ie浏览器版本
const IEVersion = function () {
    let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11
    } else {
        return false;//不是ie浏览器
    }
};

// 浏览器滚动到底部时执行fn函数
const ScrollBottom = function (fn) {
    let $elem = document.documentElement;
    let $body = document.body;
    let scroll = $elem.scrollTop || $body.scrollTop; // 滚动条滚动的距离
    let clientH = $elem.clientHeight || $body.clientHeight; // 可视窗口总高度
    let scrollH = $elem.scrollHeight || $body.scrollHeight; // 窗口总高度
    let stayBottom = fn() || function () {};
    if (scroll >= scrollH - clientH) {
        stayBottom();
    }
};

const u = navigator.userAgent;
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
const isWeixin = u.indexOf('MicroMessenger') > -1;
const isQQ = u.match(/\sQQ/i) == " QQ";

const explorerType = {
    isAndroid, isiOS, isWeixin, isQQ
};

const scrollToTop = function () {
    let height = document.documentElement.scrollTop;
    clearInterval(window.timer);
    window.timer = null;
    let target = 0;
    window.timer = setInterval(function () {
        target = document.documentElement.scrollTop;
        target -= Math.ceil(target/10); // 做减速运动
        window.scrollTo(0, target);
        if (target == 0) {
            clearInterval(timer);
            window.timer = null;
        }
    }, 10);
};

const validInternet = function() {
    return window.navigator.onLine;
};

export const Explorer = {
    getUrlParam, IEVersion, ScrollBottom, explorerType, scrollToTop, validInternet
};

export default Explorer;
