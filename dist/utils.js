(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Utils"] = factory();
	else
		root["Utils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Base64 = exports.Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function encode(e) {
        var t = "";
        var n = void 0,
            r = void 0,
            i = void 0,
            s = void 0,
            o = void 0,
            u = void 0,
            a = void 0;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64;
            } else if (isNaN(i)) {
                a = 64;
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
        }
        return t;
    },
    decode: function decode(e) {
        var t = "";
        var n = void 0,
            r = void 0,
            i = void 0;
        var s = void 0,
            o = void 0,
            u = void 0,
            a = void 0;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r);
            }
            if (a != 64) {
                t = t + String.fromCharCode(i);
            }
        }
        t = Base64._utf8_decode(t);
        return t;
    },
    _utf8_encode: function _utf8_encode(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128);
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128);
            }
        }
        return t;
    },
    _utf8_decode: function _utf8_decode(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++;
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2;
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3;
            }
        }
        return t;
    }
};

exports.default = Base64;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Md5 = Md5;
function Md5(string) {
    function md5_RotateLeft(lValue, iShiftBits) {
        return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    }
    function md5_AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = lX & 0x80000000;
        lY8 = lY & 0x80000000;
        lX4 = lX & 0x40000000;
        lY4 = lY & 0x40000000;
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return lResult ^ 0x80000000 ^ lX8 ^ lY8;
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
            } else {
                return lResult ^ 0x40000000 ^ lX8 ^ lY8;
            }
        } else {
            return lResult ^ lX8 ^ lY8;
        }
    }
    function md5_F(x, y, z) {
        return x & y | ~x & z;
    }
    function md5_G(x, y, z) {
        return x & z | y & ~z;
    }
    function md5_H(x, y, z) {
        return x ^ y ^ z;
    }
    function md5_I(x, y, z) {
        return y ^ (x | ~z);
    }
    function md5_FF(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_F(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };
    function md5_GG(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_G(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };
    function md5_HH(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_H(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };
    function md5_II(a, b, c, d, x, s, ac) {
        a = md5_AddUnsigned(a, md5_AddUnsigned(md5_AddUnsigned(md5_I(b, c, d), x), ac));
        return md5_AddUnsigned(md5_RotateLeft(a, s), b);
    };
    function md5_ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - lByteCount % 4) / 4;
            lBytePosition = lByteCount % 4 * 8;
            lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
            lByteCount++;
        }
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    };
    function md5_WordToHex(lValue) {
        var WordToHexValue = "",
            WordToHexValue_temp = "",
            lByte,
            lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = lValue >>> lCount * 8 & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    };
    function md5_Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if (c > 127 && c < 2048) {
                utftext += String.fromCharCode(c >> 6 | 192);
                utftext += String.fromCharCode(c & 63 | 128);
            } else {
                utftext += String.fromCharCode(c >> 12 | 224);
                utftext += String.fromCharCode(c >> 6 & 63 | 128);
                utftext += String.fromCharCode(c & 63 | 128);
            }
        }
        return utftext;
    };
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;
    var S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;
    var S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;
    var S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;
    string = md5_Utf8Encode(string);
    x = md5_ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = md5_FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = md5_FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = md5_FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = md5_FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = md5_FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = md5_FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = md5_FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = md5_FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = md5_FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = md5_FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = md5_FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = md5_FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = md5_FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = md5_FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = md5_FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = md5_FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = md5_GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = md5_GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = md5_GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = md5_GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = md5_GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = md5_GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = md5_GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = md5_GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = md5_GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = md5_GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = md5_GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = md5_GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = md5_GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = md5_GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = md5_GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = md5_GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = md5_HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = md5_HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = md5_HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = md5_HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = md5_HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = md5_HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = md5_HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = md5_HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = md5_HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = md5_HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = md5_HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = md5_HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = md5_HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = md5_HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = md5_HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = md5_HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = md5_II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = md5_II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = md5_II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = md5_II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = md5_II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = md5_II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = md5_II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = md5_II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = md5_II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = md5_II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = md5_II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = md5_II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = md5_II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = md5_II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = md5_II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = md5_II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = md5_AddUnsigned(a, AA);
        b = md5_AddUnsigned(b, BB);
        c = md5_AddUnsigned(c, CC);
        d = md5_AddUnsigned(d, DD);
    }
    return (md5_WordToHex(a) + md5_WordToHex(b) + md5_WordToHex(c) + md5_WordToHex(d)).toLowerCase();
}

exports.default = Md5;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 百度SEO
var seo = function seo() {
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
};

// 函数节流
var throttle = function throttle(method, context) {
    console.log(context);
    clearTimeout(method.tId);
    method.tId = setTimeout(function () {
        method.call(context);
    }.bind(this), context ? context : 1000);
};

// base64位码转blob对象
var dataURLtoBlob = function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

// 获取n-m的随机整数
var getRandomNum = function getRandomNum(n, m) {
    return Math.ceil(Math.random() * (m - n), n);
};

// 将数字转成3位分隔符
var splitNum = function splitNum(num) {
    if (num === null || num === undefined) {
        return null;
    }
    if (typeof num === "number") {
        num = num.toString();
    }
    return num.replace(/\B(?=(?:\d{3})+\b)/g, ',');
};

var Common = exports.Common = {
    seo: seo,
    throttle: throttle,
    dataURLtoBlob: dataURLtoBlob,
    getRandomNum: getRandomNum,
    splitNum: splitNum
};

exports.default = {
    seo: seo,
    throttle: throttle,
    dataURLtoBlob: dataURLtoBlob,
    getRandomNum: getRandomNum,
    splitNum: splitNum
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 大陆手机号判断
var isPhone = function isPhone(val) {
    return (/^1[3456789]\d{9}$/.test(val)
    );
};

/*
* 全中文校验
* */
function ChineseWordValid(val) {
    return (/^[\u4E00-\u9FA5]+$/.test(val)
    );
}

// 英文和数字校验
function wordNumValid(val) {
    return (/^[0-9A-Za-z]+$/.test(val)
    );
}

// emoji表情校验
function emojiValid(val) {
    var regStr = /[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF][\u200D|\uFE0F]|[\uD83C|\uD83D|\uD83E][\uDC00-\uDFFF]|[0-9|*|#]\uFE0F\u20E3|[0-9|#]\u20E3|[\u203C-\u3299]\uFE0F\u200D|[\u203C-\u3299]\uFE0F|[\u2122-\u2B55]|\u303D|[\A9|\AE]\u3030|\uA9|\uAE|\u3030/ig;
    return regStr.test(val);
}

// 邮箱校验
function emailValid(val) {
    return (/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(val)
    );
}

/*
* 大陆身份证校验
* */
var IdentityCodeValid = function IdentityCodeValid(code) {
    var city = {
        11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏",
        33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南",
        50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆",
        71: "台湾", 81: "香港", 82: "澳门", 91: "国外 "
    };
    var tip = '';
    var pass = true;

    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        tip = "地址编码错误";
        pass = false;
    } else {
        // 18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split('');
            // ∑(ai×Wi)(mod 11)
            // 加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            // 校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != code[17]) {
                tip = "校验位错误";
                pass = false;
            }
        }
    }
    return pass;
};

var Valid = exports.Valid = {
    isPhone: isPhone, ChineseWordValid: ChineseWordValid, wordNumValid: wordNumValid, emojiValid: emojiValid, IdentityCodeValid: IdentityCodeValid
};

exports.default = {
    isPhone: isPhone, ChineseWordValid: ChineseWordValid, wordNumValid: wordNumValid, emojiValid: emojiValid, IdentityCodeValid: IdentityCodeValid
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Country = exports.Country = [{
    "name": "Andorra",
    "cnName": "安道尔",
    "abbr": "AD",
    "code": "020"
}, {
    "name": "United Arab Emirates",
    "cnName": "阿联酋",
    "abbr": "AE",
    "code": "784"
}, {
    "name": "Afghanistan",
    "cnName": "阿富汗",
    "abbr": "AF",
    "code": "004"
}, {
    "name": "Antigua and Barbuda",
    "cnName": "安提瓜和巴布达",
    "abbr": "AG",
    "code": "028"
}, {
    "name": "Anguilla",
    "cnName": "安圭拉",
    "abbr": "AI",
    "code": "660"
}, {
    "name": "Albania",
    "cnName": "阿尔巴尼亚",
    "abbr": "AL",
    "code": "008"
}, {
    "name": "Armenia",
    "cnName": "亚美尼亚",
    "abbr": "AM",
    "code": "051"
}, {
    "name": "Angola",
    "cnName": "安哥拉",
    "abbr": "AO",
    "code": "024"
}, {
    "name": "Antarctica",
    "cnName": "南极洲",
    "abbr": "AQ",
    "code": "010"
}, {
    "name": "Argentina",
    "cnName": "阿根廷",
    "abbr": "AR",
    "code": "032"
}, {
    "name": "American Samoa",
    "cnName": "美属萨摩亚",
    "abbr": "AS",
    "code": "016"
}, {
    "name": "Austria",
    "cnName": "奥地利",
    "abbr": "AT",
    "code": "040"
}, {
    "name": "Australia",
    "cnName": "澳大利亚",
    "abbr": "AU",
    "code": "036"
}, {
    "name": "Aruba",
    "cnName": "阿鲁巴",
    "abbr": "AW",
    "code": "533"
}, {
    "name": "Aland Island",
    "cnName": "奥兰群岛",
    "abbr": "AX",
    "code": "248"
}, {
    "name": "Azerbaijan",
    "cnName": "阿塞拜疆",
    "abbr": "AZ",
    "code": "031"
}, {
    "name": "Bosnia and Herzegovina",
    "cnName": "波黑",
    "abbr": "BA",
    "code": "070"
}, {
    "name": "Barbados",
    "cnName": "巴巴多斯",
    "abbr": "BB",
    "code": "052"
}, {
    "name": "Bangladesh",
    "cnName": "孟加拉",
    "abbr": "BD",
    "code": "050"
}, {
    "name": "Belgium",
    "cnName": "比利时",
    "abbr": "BE",
    "code": "056"
}, {
    "name": "Burkina",
    "cnName": "布基纳法索",
    "abbr": "BF",
    "code": "854"
}, {
    "name": "Bulgaria",
    "cnName": "保加利亚",
    "abbr": "BG",
    "code": "100"
}, {
    "name": "Bahrain",
    "cnName": "巴林",
    "abbr": "BH",
    "code": "048"
}, {
    "name": "Burundi",
    "cnName": "布隆迪",
    "abbr": "BI",
    "code": "108"
}, {
    "name": "Benin",
    "cnName": "贝宁",
    "abbr": "BJ",
    "code": "204"
}, {
    "name": "Saint Barthélemy",
    "cnName": "圣巴泰勒米岛",
    "abbr": "BL",
    "code": "652"
}, {
    "name": "Bermuda",
    "cnName": "百慕大",
    "abbr": "BM",
    "code": "060"
}, {
    "name": "Brunei",
    "cnName": "文莱",
    "abbr": "BN",
    "code": "096"
}, {
    "name": "Bolivia",
    "cnName": "玻利维亚",
    "abbr": "BO",
    "code": "068"
}, {
    "name": "Caribbean Netherlands",
    "cnName": "荷兰加勒比区",
    "abbr": "BQ",
    "code": "535"
}, {
    "name": "Brazil",
    "cnName": "巴西",
    "abbr": "BR",
    "code": "076"
}, {
    "name": "The Bahamas",
    "cnName": "巴哈马",
    "abbr": "BS",
    "code": "044"
}, {
    "name": "Bhutan",
    "cnName": "不丹",
    "abbr": "BT",
    "code": "064"
}, {
    "name": "Bouvet Island",
    "cnName": "布韦岛",
    "abbr": "BV",
    "code": "074"
}, {
    "name": "Botswana",
    "cnName": "博茨瓦纳",
    "abbr": "BW",
    "code": "072"
}, {
    "name": "Belarus",
    "cnName": "白俄罗斯",
    "abbr": "BY",
    "code": "112"
}, {
    "name": "Belize",
    "cnName": "伯利兹",
    "abbr": "BZ",
    "code": "084"
}, {
    "name": "Canada",
    "cnName": "加拿大",
    "abbr": "CA",
    "code": "124"
}, {
    "name": "Cocos Keeling Islands",
    "cnName": "科科斯群岛",
    "abbr": "CC",
    "code": "166"
}, {
    "name": "Central African Republic",
    "cnName": "中非",
    "abbr": "CF",
    "code": "140"
}, {
    "name": "Switzerland",
    "cnName": "瑞士",
    "abbr": "CH",
    "code": "756"
}, {
    "name": "Chile",
    "cnName": "智利",
    "abbr": "CL",
    "code": "152"
}, {
    "name": "Cameroon",
    "cnName": "喀麦隆",
    "abbr": "CM",
    "code": "120"
}, {
    "name": "Colombia",
    "cnName": "哥伦比亚",
    "abbr": "CO",
    "code": "170"
}, {
    "name": "Costa Rica",
    "cnName": "哥斯达黎加",
    "abbr": "CR",
    "code": "188"
}, {
    "name": "Cuba",
    "cnName": "古巴",
    "abbr": "CU",
    "code": "192"
}, {
    "name": "Cape Verde",
    "cnName": "佛得角",
    "abbr": "CV",
    "code": "132"
}, {
    "name": "Christmas Island",
    "cnName": "圣诞岛",
    "abbr": "CX",
    "code": "162"
}, {
    "name": "Cyprus",
    "cnName": "塞浦路斯",
    "abbr": "CY",
    "code": "196"
}, {
    "name": "Czech Republic",
    "cnName": "捷克",
    "abbr": "CZ",
    "code": "203"
}, {
    "name": "Germany",
    "cnName": "德国",
    "abbr": "DE",
    "code": "276"
}, {
    "name": "Djibouti",
    "cnName": "吉布提",
    "abbr": "DJ",
    "code": "262"
}, {
    "name": "Denmark",
    "cnName": "丹麦",
    "abbr": "DK",
    "code": "208"
}, {
    "name": "Dominica",
    "cnName": "多米尼克",
    "abbr": "DM",
    "code": "212"
}, {
    "name": "Dominican Republic",
    "cnName": "多米尼加",
    "abbr": "DO",
    "code": "214"
}, {
    "name": "Algeria",
    "cnName": "阿尔及利亚",
    "abbr": "DZ",
    "code": "012"
}, {
    "name": "Ecuador",
    "cnName": "厄瓜多尔",
    "abbr": "EC",
    "code": "218"
}, {
    "name": "Estonia",
    "cnName": "爱沙尼亚",
    "abbr": "EE",
    "code": "233"
}, {
    "name": "Egypt",
    "cnName": "埃及",
    "abbr": "EG",
    "code": "818"
}, {
    "name": "Western Sahara",
    "cnName": "西撒哈拉",
    "abbr": "EH",
    "code": "732"
}, {
    "name": "Eritrea",
    "cnName": "厄立特里亚",
    "abbr": "ER",
    "code": "232"
}, {
    "name": "Spain",
    "cnName": "西班牙",
    "abbr": "ES",
    "code": "724"
}, {
    "name": "Finland",
    "cnName": "芬兰",
    "abbr": "FI",
    "code": "246"
}, {
    "name": "Fiji",
    "cnName": "斐济群岛",
    "abbr": "FJ",
    "code": "242"
}, {
    "name": "Falkland Islands",
    "cnName": "马尔维纳斯群岛（ 福克兰）",
    "abbr": "FK",
    "code": "238"
}, {
    "name": "Federated States of Micronesia",
    "cnName": "密克罗尼西亚联邦",
    "abbr": "FM",
    "code": "583"
}, {
    "name": "Faroe Islands",
    "cnName": "法罗群岛",
    "abbr": "FO",
    "code": "234"
}, {
    "name": "France",
    "cnName": "法国",
    "abbr": "FR",
    "code": "250"
}, {
    "name": "Gabon",
    "cnName": "加蓬",
    "abbr": "GA",
    "code": "266"
}, {
    "name": "Grenada",
    "cnName": "格林纳达",
    "abbr": "GD",
    "code": "308"
}, {
    "name": "Georgia",
    "cnName": "格鲁吉亚",
    "abbr": "GE",
    "code": "268"
}, {
    "name": "French Guiana",
    "cnName": "法属圭亚那",
    "abbr": "GF",
    "code": "254"
}, {
    "name": "Ghana",
    "cnName": "加纳",
    "abbr": "GH",
    "code": "288"
}, {
    "name": "Gibraltar",
    "cnName": "直布罗陀",
    "abbr": "GI",
    "code": "292"
}, {
    "name": "Greenland",
    "cnName": "格陵兰",
    "abbr": "GL",
    "code": "304"
}, {
    "name": "Guinea",
    "cnName": "几内亚",
    "abbr": "GN",
    "code": "324"
}, {
    "name": "Guadeloupe",
    "cnName": "瓜德罗普",
    "abbr": "GP",
    "code": "312"
}, {
    "name": "Equatorial Guinea",
    "cnName": "赤道几内亚",
    "abbr": "GQ",
    "code": "226"
}, {
    "name": "Greece",
    "cnName": "希腊",
    "abbr": "GR",
    "code": "300"
}, {
    "name": "South Georgia and the South Sandwich Islands",
    "cnName": "南乔治亚岛和南桑威奇群岛",
    "abbr": "GS",
    "code": "239"
}, {
    "name": "Guatemala",
    "cnName": "危地马拉",
    "abbr": "GT",
    "code": "320"
}, {
    "name": "Guam",
    "cnName": "关岛",
    "abbr": "GU",
    "code": "316"
}, {
    "name": "Guinea-Bissau",
    "cnName": "几内亚比绍",
    "abbr": "GW",
    "code": "624"
}, {
    "name": "Guyana",
    "cnName": "圭亚那",
    "abbr": "GY",
    "code": "328"
}, {
    "name": "Hong Kong",
    "cnName": "香港",
    "abbr": "HK",
    "code": "344"
}, {
    "name": "Heard Island and McDonald Islands",
    "cnName": "赫德岛和麦克唐纳群岛",
    "abbr": "HM",
    "code": "334"
}, {
    "name": "Honduras",
    "cnName": "洪都拉斯",
    "abbr": "HN",
    "code": "340"
}, {
    "name": "Croatia",
    "cnName": "克罗地亚",
    "abbr": "HR",
    "code": "191"
}, {
    "name": "Haiti",
    "cnName": "海地",
    "abbr": "HT",
    "code": "332"
}, {
    "name": "Hungary",
    "cnName": "匈牙利",
    "abbr": "HU",
    "code": "348"
}, {
    "name": "Indonesia",
    "cnName": "印尼",
    "abbr": "ID",
    "code": "360"
}, {
    "name": "Ireland",
    "cnName": "爱尔兰",
    "abbr": "IE",
    "code": "372"
}, {
    "name": "Israel",
    "cnName": "以色列",
    "abbr": "IL",
    "code": "376"
}, {
    "name": "Isle of Man",
    "cnName": "马恩岛",
    "abbr": "IM",
    "code": "833"
}, {
    "name": "India",
    "cnName": "印度",
    "abbr": "IN",
    "code": "356"
}, {
    "name": "British Indian Ocean Territory",
    "cnName": "英属印度洋领地",
    "abbr": "IO",
    "code": "086"
}, {
    "name": "Iraq",
    "cnName": "伊拉克",
    "abbr": "IQ",
    "code": "368"
}, {
    "name": "Iran",
    "cnName": "伊朗",
    "abbr": "IR",
    "code": "364"
}, {
    "name": "Iceland",
    "cnName": "冰岛",
    "abbr": "IS",
    "code": "352"
}, {
    "name": "Italy",
    "cnName": "意大利",
    "abbr": "IT",
    "code": "380"
}, {
    "name": "Jersey",
    "cnName": "泽西岛",
    "abbr": "JE",
    "code": "832"
}, {
    "name": "Jamaica",
    "cnName": "牙买加",
    "abbr": "JM",
    "code": "388"
}, {
    "name": "Jordan",
    "cnName": "约旦",
    "abbr": "JO",
    "code": "400"
}, {
    "name": "Japan",
    "cnName": "日本",
    "abbr": "JP",
    "code": "392"
}, {
    "name": "Cambodia",
    "cnName": "柬埔寨",
    "abbr": "KH",
    "code": "116"
}, {
    "name": "Kiribati",
    "cnName": "基里巴斯",
    "abbr": "KI",
    "code": "296"
}, {
    "name": "The Comoros",
    "cnName": "科摩罗",
    "abbr": "KM",
    "code": "174"
}, {
    "name": "Kuwait",
    "cnName": "科威特",
    "abbr": "KW",
    "code": "414"
}, {
    "name": "Cayman Islands",
    "cnName": "开曼群岛",
    "abbr": "KY",
    "code": "136"
}, {
    "name": "Lebanon",
    "cnName": "黎巴嫩",
    "abbr": "LB",
    "code": "422"
}, {
    "name": "Liechtenstein",
    "cnName": "列支敦士登",
    "abbr": "LI",
    "code": "438"
}, {
    "name": "Sri Lanka",
    "cnName": "斯里兰卡",
    "abbr": "LK",
    "code": "144"
}, {
    "name": "Liberia",
    "cnName": "利比里亚",
    "abbr": "LR",
    "code": "430"
}, {
    "name": "Lesotho",
    "cnName": "莱索托",
    "abbr": "LS",
    "code": "426"
}, {
    "name": "Lithuania",
    "cnName": "立陶宛",
    "abbr": "LT",
    "code": "440"
}, {
    "name": "Luxembourg",
    "cnName": "卢森堡",
    "abbr": "LU",
    "code": "442"
}, {
    "name": "Latvia",
    "cnName": "拉脱维亚",
    "abbr": "LV",
    "code": "428"
}, {
    "name": "Libya",
    "cnName": "利比亚",
    "abbr": "LY",
    "code": "434"
}, {
    "name": "Morocco",
    "cnName": "摩洛哥",
    "abbr": "MA",
    "code": "504"
}, {
    "name": "Monaco",
    "cnName": "摩纳哥",
    "abbr": "MC",
    "code": "492"
}, {
    "name": "Moldova",
    "cnName": "摩尔多瓦",
    "abbr": "MD",
    "code": "498"
}, {
    "name": "Montenegro",
    "cnName": "黑山",
    "abbr": "ME",
    "code": "499"
}, {
    "name": "Saint Martin",
    "cnName": "法属圣马丁",
    "abbr": "MF",
    "code": "663"
}, {
    "name": "Madagascar",
    "cnName": "马达加斯加",
    "abbr": "MG",
    "code": "450"
}, {
    "name": "Marshall islands",
    "cnName": "马绍尔群岛",
    "abbr": "MH",
    "code": "584"
}, {
    "name": "Republic of Macedonia",
    "cnName": "马其顿",
    "abbr": "MK",
    "code": "807"
}, {
    "name": "Mali",
    "cnName": "马里",
    "abbr": "ML",
    "code": "466"
}, {
    "name": "Myanmar",
    "cnName": "缅甸",
    "abbr": "MM",
    "code": "104"
}, {
    "name": "Macao",
    "cnName": "澳门",
    "abbr": "MO",
    "code": "446"
}, {
    "name": "Martinique",
    "cnName": "马提尼克",
    "abbr": "MQ",
    "code": "474"
}, {
    "name": "Mauritania",
    "cnName": "毛里塔尼亚",
    "abbr": "MR",
    "code": "478"
}, {
    "name": "Montserrat",
    "cnName": "蒙塞拉特岛",
    "abbr": "MS",
    "code": "500"
}, {
    "name": "Malta",
    "cnName": "马耳他",
    "abbr": "MT",
    "code": "470"
}, {
    "name": "Maldives",
    "cnName": "马尔代夫",
    "abbr": "MV",
    "code": "462"
}, {
    "name": "Malawi",
    "cnName": "马拉维",
    "abbr": "MW",
    "code": "454"
}, {
    "name": "Mexico",
    "cnName": "墨西哥",
    "abbr": "MX",
    "code": "484"
}, {
    "name": "Malaysia",
    "cnName": "马来西亚",
    "abbr": "MY",
    "code": "458"
}, {
    "name": "Namibia",
    "cnName": "纳米比亚",
    "abbr": "NA",
    "code": "516"
}, {
    "name": "Niger",
    "cnName": "尼日尔",
    "abbr": "NE",
    "code": "562"
}, {
    "name": "Norfolk Island",
    "cnName": "诺福克岛",
    "abbr": "NF",
    "code": "574"
}, {
    "name": "Nigeria",
    "cnName": "尼日利亚",
    "abbr": "NG",
    "code": "566"
}, {
    "name": "Nicaragua",
    "cnName": "尼加拉瓜",
    "abbr": "NI",
    "code": "558"
}, {
    "name": "Netherlands",
    "cnName": "荷兰",
    "abbr": "NL",
    "code": "528"
}, {
    "name": "Norway",
    "cnName": "挪威",
    "abbr": "NO",
    "code": "578"
}, {
    "name": "Nepal",
    "cnName": "尼泊尔",
    "abbr": "NP",
    "code": "524"
}, {
    "name": "Nauru",
    "cnName": "瑙鲁",
    "abbr": "NR",
    "code": "520"
}, {
    "name": "Oman",
    "cnName": "阿曼",
    "abbr": "OM",
    "code": "512"
}, {
    "name": "Panama",
    "cnName": "巴拿马",
    "abbr": "PA",
    "code": "591"
}, {
    "name": "Peru",
    "cnName": "秘鲁",
    "abbr": "PE",
    "code": "604"
}, {
    "name": "French polynesia",
    "cnName": "法属波利尼西亚",
    "abbr": "PF",
    "code": "258"
}, {
    "name": "Papua New Guinea",
    "cnName": "巴布亚新几内亚",
    "abbr": "PG",
    "code": "598"
}, {
    "name": "The Philippines",
    "cnName": "菲律宾",
    "abbr": "PH",
    "code": "608"
}, {
    "name": "Pakistan",
    "cnName": "巴基斯坦",
    "abbr": "PK",
    "code": "586"
}, {
    "name": "Poland",
    "cnName": "波兰",
    "abbr": "PL",
    "code": "616"
}, {
    "name": "Pitcairn Islands",
    "cnName": "皮特凯恩群岛",
    "abbr": "PN",
    "code": "612"
}, {
    "name": "Puerto Rico",
    "cnName": "波多黎各",
    "abbr": "PR",
    "code": "630"
}, {
    "name": "Palestinian territories",
    "cnName": "巴勒斯坦",
    "abbr": "PS",
    "code": "275"
}, {
    "name": "Palau",
    "cnName": "帕劳",
    "abbr": "PW",
    "code": "585"
}, {
    "name": "Paraguay",
    "cnName": "巴拉圭",
    "abbr": "PY",
    "code": "600"
}, {
    "name": "Qatar",
    "cnName": "卡塔尔",
    "abbr": "QA",
    "code": "634"
}, {
    "name": "Réunion",
    "cnName": "留尼汪",
    "abbr": "RE",
    "code": "638"
}, {
    "name": "Romania",
    "cnName": "罗马尼亚",
    "abbr": "RO",
    "code": "642"
}, {
    "name": "Serbia",
    "cnName": "塞尔维亚",
    "abbr": "RS",
    "code": "688"
}, {
    "name": "Russia",
    "cnName": "俄罗斯",
    "abbr": "RU",
    "code": "643"
}, {
    "name": "Rwanda",
    "cnName": "卢旺达",
    "abbr": "RW",
    "code": "646"
}, {
    "name": "Solomon Islands",
    "cnName": "所罗门群岛",
    "abbr": "SB",
    "code": "090"
}, {
    "name": "Seychelles",
    "cnName": "塞舌尔",
    "abbr": "SC",
    "code": "690"
}, {
    "name": "Sudan",
    "cnName": "苏丹",
    "abbr": "SD",
    "code": "729"
}, {
    "name": "Sweden",
    "cnName": "瑞典",
    "abbr": "SE",
    "code": "752"
}, {
    "name": "Singapore",
    "cnName": "新加坡",
    "abbr": "SG",
    "code": "702"
}, {
    "name": "Slovenia",
    "cnName": "斯洛文尼亚",
    "abbr": "SI",
    "code": "705"
}, {
    "name": "Country data SJM Svalbard",
    "cnName": "斯瓦尔巴群岛和 扬马延岛",
    "abbr": "SJ",
    "code": "744"
}, {
    "name": "Slovakia",
    "cnName": "斯洛伐克",
    "abbr": "SK",
    "code": "703"
}, {
    "name": "Sierra Leone",
    "cnName": "塞拉利昂",
    "abbr": "SL",
    "code": "694"
}, {
    "name": "San Marino",
    "cnName": "圣马力诺",
    "abbr": "SM",
    "code": "674"
}, {
    "name": "Senegal",
    "cnName": "塞内加尔",
    "abbr": "SN",
    "code": "686"
}, {
    "name": "Somalia",
    "cnName": "索马里",
    "abbr": "SO",
    "code": "706"
}, {
    "name": "Suriname",
    "cnName": "苏里南",
    "abbr": "SR",
    "code": "740"
}, {
    "name": "South Sudan",
    "cnName": "南苏丹",
    "abbr": "SS",
    "code": "728"
}, {
    "name": "Sao Tome and Principe",
    "cnName": "圣多美和普林西比",
    "abbr": "ST",
    "code": "678"
}, {
    "name": "El Salvador",
    "cnName": "萨尔瓦多",
    "abbr": "SV",
    "code": "222"
}, {
    "name": "Syria",
    "cnName": "叙利亚",
    "abbr": "SY",
    "code": "760"
}, {
    "name": "Swaziland",
    "cnName": "斯威士兰",
    "abbr": "SZ",
    "code": "748"
}, {
    "name": "Turks and Caicos Islands",
    "cnName": "特克斯和凯科斯群岛",
    "abbr": "TC",
    "code": "796"
}, {
    "name": "Chad",
    "cnName": "乍得",
    "abbr": "TD",
    "code": "148"
}, {
    "name": "Togo",
    "cnName": "多哥",
    "abbr": "TG",
    "code": "768"
}, {
    "name": "Thailand",
    "cnName": "泰国",
    "abbr": "TH",
    "code": "764"
}, {
    "name": "Tokelau",
    "cnName": "托克劳",
    "abbr": "TK",
    "code": "772"
}, {
    "name": "East Timor",
    "cnName": "东帝汶",
    "abbr": "TL",
    "code": "626"
}, {
    "name": "Tunisia",
    "cnName": "突尼斯",
    "abbr": "TN",
    "code": "788"
}, {
    "name": "Tonga",
    "cnName": "汤加",
    "abbr": "TO",
    "code": "776"
}, {
    "name": "Turkey",
    "cnName": "土耳其",
    "abbr": "TR",
    "code": "792"
}, {
    "name": "Tuvalu",
    "cnName": "图瓦卢",
    "abbr": "TV",
    "code": "798"
}, {
    "name": "Tanzania",
    "cnName": "坦桑尼亚",
    "abbr": "TZ",
    "code": "834"
}, {
    "name": "Ukraine",
    "cnName": "乌克兰",
    "abbr": "UA",
    "code": "804"
}, {
    "name": "Uganda",
    "cnName": "乌干达",
    "abbr": "UG",
    "code": "800"
}, {
    "name": "United States",
    "cnName": "美国",
    "abbr": "US",
    "code": "840"
}, {
    "name": "Uruguay",
    "cnName": "乌拉圭",
    "abbr": "UY",
    "code": "858"
}, {
    "name": "Vatican City",
    "cnName": "梵蒂冈",
    "abbr": "VA",
    "code": "336"
}, {
    "name": "Venezuela",
    "cnName": "委内瑞拉",
    "abbr": "VE",
    "code": "862"
}, {
    "name": "British Virgin Islands",
    "cnName": "英属维尔京群岛",
    "abbr": "VG",
    "code": "092"
}, {
    "name": "United States Virgin Islands",
    "cnName": "美属维尔京群岛",
    "abbr": "VI",
    "code": "850"
}, {
    "name": "Vietnam",
    "cnName": "越南",
    "abbr": "VN",
    "code": "704"
}, {
    "name": "Wallis and Futuna",
    "cnName": "瓦利斯和富图纳",
    "abbr": "WF",
    "code": "876"
}, {
    "name": "Samoa",
    "cnName": "萨摩亚",
    "abbr": "WS",
    "code": "882"
}, {
    "name": "Yemen",
    "cnName": "也门",
    "abbr": "YE",
    "code": "887"
}, {
    "name": "Mayotte",
    "cnName": "马约特",
    "abbr": "YT",
    "code": "175"
}, {
    "name": "South Africa",
    "cnName": "南非",
    "abbr": "ZA",
    "code": "710"
}, {
    "name": "Zambia",
    "cnName": "赞比亚",
    "abbr": "ZM",
    "code": "894"
}, {
    "name": "Zimbabwe",
    "cnName": "津巴布韦",
    "abbr": "ZW",
    "code": "716"
}, {
    "name": "China",
    "cnName": "中国",
    "abbr": "CN",
    "code": "156"
}, {
    "name": "Republic of the Congo",
    "cnName": "刚果（布）",
    "abbr": "CG",
    "code": "178"
}, {
    "name": "Democratic Republic of the Congo",
    "cnName": "刚果（金）",
    "abbr": "CD",
    "code": "180"
}, {
    "name": "Mozambique",
    "cnName": "莫桑比克",
    "abbr": "MZ",
    "code": "508"
}, {
    "name": "Guernsey",
    "cnName": "根西岛",
    "abbr": "GG",
    "code": "831"
}, {
    "name": "Gambia",
    "cnName": "冈比亚",
    "abbr": "GM",
    "code": "270"
}, {
    "name": "Northern Mariana Islands",
    "cnName": "北马里亚纳群岛",
    "abbr": "MP",
    "code": "580"
}, {
    "name": "Ethiopia",
    "cnName": "埃塞俄比亚",
    "abbr": "ET",
    "code": "231"
}, {
    "name": "New Caledonia",
    "cnName": "新喀里多尼亚",
    "abbr": "NC",
    "code": "540"
}, {
    "name": "Vanuatu",
    "cnName": "瓦努阿图",
    "abbr": "VU",
    "code": "548"
}, {
    "name": "French Southern Territories",
    "cnName": "法属南部领地",
    "abbr": "TF",
    "code": "260"
}, {
    "name": "Niue",
    "cnName": "纽埃",
    "abbr": "NU",
    "code": "570"
}, {
    "name": "United States Minor Outlying Islands",
    "cnName": "美国本土外小岛屿",
    "abbr": "UM",
    "code": "581"
}, {
    "name": "Cook Islands",
    "cnName": "库克群岛",
    "abbr": "CK",
    "code": "184"
}, {
    "name": "United Kingdom",
    "cnName": "英国",
    "abbr": "GB",
    "code": "826"
}, {
    "name": "Trinidad and Tobago",
    "cnName": "特立尼达和多巴哥",
    "abbr": "TT",
    "code": "780"
}, {
    "name": "St. Vincent and the Grenadines",
    "cnName": "圣文森特和格林纳丁斯",
    "abbr": "VC",
    "code": "670"
}, {
    "name": "Taiwan",
    "cnName": "中国台湾",
    "abbr": "TW",
    "code": "158"
}, {
    "name": "New Zealand",
    "cnName": "新西兰",
    "abbr": "NZ",
    "code": "554"
}, {
    "name": "Saudi Arabia",
    "cnName": "沙特阿拉伯",
    "abbr": "SA",
    "code": "682"
}, {
    "name": "Laos",
    "cnName": "老挝",
    "abbr": "LA",
    "code": "418"
}, {
    "name": "North Korea",
    "cnName": "朝鲜 北朝鲜",
    "abbr": "KP",
    "code": "408"
}, {
    "name": "South Korea",
    "cnName": "韩国 南朝鲜",
    "abbr": "KR",
    "code": "410"
}, {
    "name": "Portugal",
    "cnName": "葡萄牙",
    "abbr": "PT",
    "code": "620"
}, {
    "name": "Kyrgyzstan",
    "cnName": "吉尔吉斯斯坦",
    "abbr": "KG",
    "code": "417"
}, {
    "name": "Kazakhstan",
    "cnName": "哈萨克斯坦",
    "abbr": "KZ",
    "code": "398"
}, {
    "name": "Tajikistan",
    "cnName": "塔吉克斯坦",
    "abbr": "TJ",
    "code": "762"
}, {
    "name": "Turkmenistan",
    "cnName": "土库曼斯坦",
    "abbr": "TM",
    "code": "795"
}, {
    "name": "Uzbekistan",
    "cnName": "乌兹别克斯坦",
    "abbr": "UZ",
    "code": "860"
}, {
    "name": "St. Kitts and Nevis",
    "cnName": "圣基茨和尼维斯",
    "abbr": "KN",
    "code": "659"
}, {
    "name": "Saint-Pierre and Miquelon",
    "cnName": "圣皮埃尔和密克隆",
    "abbr": "PM",
    "code": "666"
}, {
    "name": "St. Helena and Dependencies",
    "cnName": "圣赫勒拿",
    "abbr": "SH",
    "code": "654"
}, {
    "name": "St. Lucia",
    "cnName": "圣卢西亚",
    "abbr": "LC",
    "code": "662"
}, {
    "name": "Mauritius",
    "cnName": "毛里求斯",
    "abbr": "MU",
    "code": "480"
}, {
    "name": "C?te d'Ivoire",
    "cnName": "科特迪瓦",
    "abbr": "CI",
    "code": "384"
}, {
    "name": "Kenya",
    "cnName": "肯尼亚",
    "abbr": "KE",
    "code": "404"
}, {
    "name": "Mongolia",
    "cnName": "蒙古国 蒙古",
    "abbr": "MN",
    "code": "496"
}];

exports.default = Country;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// 获取URL参数
var getUrlParam = function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg); //匹配目标参数
    if (r != null) return decodeURIComponent(r[2]);
    return null; //返回参数值
};

// 判断ie浏览器版本
var IEVersion = function IEVersion() {
    var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; // 判断是否IE的Edge浏览器
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6; //IE版本<=7
        }
    } else if (isEdge) {
        return 'edge'; //edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return false; //不是ie浏览器
    }
};

// 浏览器滚动到底部时执行fn函数
var ScrollBottom = function ScrollBottom(fn) {
    var $elem = document.documentElement;
    var $body = document.body;
    var scroll = $elem.scrollTop || $body.scrollTop; // 滚动条滚动的距离
    var clientH = $elem.clientHeight || $body.clientHeight; // 可视窗口总高度
    var scrollH = $elem.scrollHeight || $body.scrollHeight; // 窗口总高度
    var stayBottom = fn() || function () {};
    if (scroll >= scrollH - clientH) {
        stayBottom();
    }
};

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var isWeixin = u.indexOf('MicroMessenger') > -1;
var isQQ = u.match(/\sQQ/i) == " QQ";

var explorerType = {
    isAndroid: isAndroid, isiOS: isiOS, isWeixin: isWeixin, isQQ: isQQ
};

var Explorer = exports.Explorer = {
    getUrlParam: getUrlParam, IEVersion: IEVersion, ScrollBottom: ScrollBottom, explorerType: explorerType
};

exports.default = Explorer;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _export = __webpack_require__(7);

Object.keys(_export).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _export[key];
        }
    });
});

var _base = __webpack_require__(0);

var _base2 = _interopRequireDefault(_base);

var _md = __webpack_require__(1);

var _md2 = _interopRequireDefault(_md);

var _common = __webpack_require__(2);

var _common2 = _interopRequireDefault(_common);

var _valid = __webpack_require__(3);

var _valid2 = _interopRequireDefault(_valid);

var _worldCountry = __webpack_require__(4);

var _worldCountry2 = _interopRequireDefault(_worldCountry);

var _explorer = __webpack_require__(5);

var _explorer2 = _interopRequireDefault(_explorer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    Base64: _base2.default, Md5: _md2.default, Explorer: _explorer2.default, Common: _common2.default, Valid: _valid2.default, Country: _worldCountry2.default
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _base = __webpack_require__(0);

Object.defineProperty(exports, 'Base64', {
  enumerable: true,
  get: function get() {
    return _base.Base64;
  }
});

var _md = __webpack_require__(1);

Object.defineProperty(exports, 'Md5', {
  enumerable: true,
  get: function get() {
    return _md.Md5;
  }
});

var _common = __webpack_require__(2);

Object.defineProperty(exports, 'Common', {
  enumerable: true,
  get: function get() {
    return _common.Common;
  }
});

var _valid = __webpack_require__(3);

Object.defineProperty(exports, 'Valid', {
  enumerable: true,
  get: function get() {
    return _valid.Valid;
  }
});

var _worldCountry = __webpack_require__(4);

Object.defineProperty(exports, 'Country', {
  enumerable: true,
  get: function get() {
    return _worldCountry.Country;
  }
});

var _explorer = __webpack_require__(5);

Object.defineProperty(exports, 'Explorer', {
  enumerable: true,
  get: function get() {
    return _explorer.Explorer;
  }
});

/***/ })
/******/ ])["default"];
});