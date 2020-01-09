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

/**
 * 将base64/dataurl转成File
 * @param dataurl
 * @param filename
 * @returns {File}
 */
function dataURLtoFile(dataurl, filename) {
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
}

// 获取File 对象或 Blob 对象的临时路径
function getObjectURL(file) {
    let url = null;
    if (window.createObjectURL) {
        // basic
        url = window.createObjectURL(file);
    } else if (window.URL) {
        // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL) {
        // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

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

/**
 * nodejs获取本地ip
 * @param os node.js os模块
 * @returns {*}
 */
function getIPAddress(os) {
    if (!os) return '';
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

/**
 * 获取元素实际样式值
 * @param el dom元素
 * @param styleName 样式名
 */
function getStyle(el, styleName) {
    if (el.currentStyle) return el.currentStyle[styleName];
    if (getComputedStyle) return window.getComputedStyle(el, null)[styleName];
    return el.style[styleName];
}

// 优雅降级requestAnimationFrame
const requestAnimationF = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function (callback) {
            return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
        };
})();

// 优雅降级cancelAnimationFrame
const cancelAnimationF = (function () {
    return window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.oCancelAnimationFrame ||
        function (id) {
            window.clearTimeout(id);
        };
})();


/**
 * 获取元素实际高度
 * @param el  dom元素
 * @returns {number} 元素高度
 */
function getHeight(el) {
    let height;
    // 已隐藏的元素
    if (getStyle(el, "display") === "none") {
        el.style.position = "absolute";
        el.style.visibility = "hidden";
        el.style.display = "block";
        height = getStyle(el, "height");
        el.style.position = "";
        el.style.visibility = "";
        el.style.display = "";
        return parseFloat(height);
    }
    return parseFloat(getStyle(el, "height"));
}

/**
 * 获取已隐藏元素的css值
 * @param el
 * @param styleName
 * @returns {*}
 */
function getCurrentStyle(el, styleName) {
    let styleValue;
    // 已隐藏的元素
    if (getStyle(el, "display") === "none") {
        el.style.position = "absolute";
        el.style.visibility = "hidden";
        el.style.display = "block";
        styleValue = getStyle(el, styleName);
        el.style.position = "";
        el.style.visibility = "";
        el.style.display = "";
        return (styleValue);
    }
    return (getStyle(el, styleName));
}

/**
 * 优化实现sildeToggle效果
 * @param el dom元素
 * @param time 动画时长，单位ms，默认值300
 * @param fn 回调函数
 */
function slideToggle(el, time, fn) {
    if (!el) return false;
    time = time || 300;
    if (el.dataUid) return false; // 如该dom元素已有动画未处理完，则必须等到动画结束才执行

    cancelAnimationF(el.dataUid);

    // 已隐藏的元素，下拉
    if (getStyle(el, "display") === "none" || getHeight(el) === 0) {
        down(el, time, fn);
    } else {
        up(el, time, fn)
    }
}

function down(el, time, fn) {
    let aniSplitTime = Date.now();

    let height = 0, paddingTop = 0, paddingBottom = 0;
    let totalHeight = parseFloat(getCurrentStyle(el, "height"));
    let totalPaddingTop = parseFloat(getCurrentStyle(el, "paddingTop"));
    let totalPaddingBottom = parseFloat(getCurrentStyle(el, "paddingBottom"));

    let basePaddingBottom = totalPaddingBottom/time;
    let basePaddingTop = totalPaddingBottom/time;
    let baseHeight = totalHeight/time;

    el.style.overflow = "hidden";
    el.style.display = "block";

    el.dataUid = requestAnimationF(function go(){
        let aniTime = Date.now();
        let splitTime = aniTime - aniSplitTime;
        aniSplitTime = aniTime;
        let splitPaddingBottom = basePaddingBottom*splitTime;
        let splitPaddingTop = basePaddingTop*splitTime;
        let splitHeight = baseHeight*splitTime;

        if (height >= totalHeight){
            el.style.overflow = "";
            el.style.height = "";
            el.style.paddingTop = "";
            el.style.paddingBottom = "";

            if (fn && typeof fn === "function") fn();
            cancelAnimationF(el.dataUid);
            el.dataUid = null;
            delete el.dataUid;
        } else {
            el.style.height = height + "px";
            el.style.paddingTop = paddingTop + "px";
            el.style.paddingBottom = paddingBottom + "px";
            el.dataUid = requestAnimationF(go);
        }
        height = height + splitHeight;
        paddingTop = paddingTop + splitPaddingTop;
        paddingBottom = paddingBottom + splitPaddingBottom;
    });
}

function up(el, time, fn) {
    // 上拉
    let aniSplitTime = Date.now();
    let height = getHeight(el);
    let paddingTop = parseFloat(getStyle(el, "paddingTop"));
    let paddingBottom = parseFloat(getStyle(el, "paddingBottom"));
    el.style.overflow = "hidden";

    let basePaddingBottom = paddingBottom/time;
    let basePaddingTop = paddingTop/time;
    let baseHeight = height/time;

    el.dataUid = requestAnimationF(function go(){
        let aniTime = Date.now();
        let splitTime = aniTime - aniSplitTime;
        aniSplitTime = aniTime;
        let splitPaddingBottom = basePaddingBottom*splitTime;
        let splitPaddingTop = basePaddingTop*splitTime;
        let splitHeight = baseHeight*splitTime;

        if (height <= 0) {
            el.style.height = 0;
            el.style.paddingTop = 0;
            el.style.paddingBottom = 0;

            setTimeout(()=>{
                el.style.height = "";
                el.style.overflow = "";
                el.style.paddingTop = "";
                el.style.paddingBottom = "";
                el.style.display = "none";
            },0);

            if (fn && typeof fn === "function") fn();
            cancelAnimationF(el.dataUid);
            el.dataUid = null;
            delete el.dataUid;
        } else {
            el.style.height = height + "px";
            el.style.paddingTop = paddingTop + "px";
            el.style.paddingBottom = paddingBottom + "px";
            el.dataUid = requestAnimationF(go);
        }

        height = height - splitHeight;
        paddingBottom = paddingBottom - splitPaddingBottom;
        paddingTop = paddingTop - splitPaddingTop;
    });
}

/**
 * 优化实现jquery slideDown效果
 * @param el dom元素
 * @param time 动画时长，单位ms，默认值300
 * @param fn 回调函数
 */
function slideDown(el, time, fn) {
    if (!el) return false;
    time = time || 300;
    if (el.dataUid) return false; // 如该dom元素已有动画未处理完，则必须等到动画结束才执行

    cancelAnimationF(el.dataUid);
    if (getStyle(el, "display") === "none" || getHeight(el) === 0) {
        down(el, time, fn);
    }
}

/**
 * 优化实现jquery slideUp效果
 * @param el dom元素
 * @param time 动画时长，单位ms，默认值300
 * @param fn 回调函数
 */
function slideUp(el, time, fn) {
    if (!el) return false;
    time = time || 300;
    if (el.dataUid) return false; // 如该dom元素已有动画未处理完，则必须等到动画结束才执行

    cancelAnimationF(el.dataUid);

    if (getStyle(el, "display") === "none" || getHeight(el) === 0) {

    } else {
        up(el, time, fn);
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
    getIPAddress,
    getStyle,
    getCurrentStyle,
    slideToggle,
    slideUp,
    slideDown,
    getObjectURL,
    dataURLtoFile
};

export default Common;


