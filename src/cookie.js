const CookieUtil = (function () {
    return {
        set (name, value, attributes) {
            let expires, path;
            if (attributes) {
                expires = attributes.expires || 0;
                path = attributes.path || '/';
            }
            let date = Date.now() + expires * 24 * 60 * 60 * 1000; // cookie过期时间
            date = new Date(date).toUTCString();
            document.cookie = name + "=" + encodeURIComponent(value) + ((!expires)?"":( "; expires=" + date)) + ";path=" + path + ";";
        }, // 设置cookie
        setCookies (obj){
            for(let i = 0;i < obj.length;i++){
                this.set(obj[i][0],obj[i][1],obj[i][2]);
            }
        }, // 批量设置cookie
        get (name) {
            if (document.cookie.length > 0) {
                let start = document.cookie.indexOf(name + '=');
                if (start !== -1) {
                    start = start + name.length + 1;
                    let end = document.cookie.indexOf(';', start);
                    if (end === -1) {
                        end = document.cookie.length;
                    }
                    return decodeURIComponent(document.cookie.substring(start, end))/* 获取解码后的cookie值 */
                } else {
                    return null;
                }
            } else return null;
        }, // 获取cookie
        remove (name) {
            this.set(name, '', -1);
        }, // 清除特定cookie
        clearCookies (obj) {
            for (let i = obj.length - 1; i >= 0; i--) {
                this.remove(obj[i]);
            }
            this.set(name, '', -1);
        }, // 批量清除cookie
        clearAllCookie: function () {
            let keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (let i = keys.length; i--;) {
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString();
                }
            }
        },// 清除所有cookie
        setCacheData (name, val, cacheDay) {
            // 判断是否支持或开启localStorage
            // 无痕模式下和ie安全模式下localStorage会被禁用
            if (localStorage) {
                localStorage.setItem(name, val);
            } else {
                this.set(name, val, cacheDay || 1000);
            }
        }, // 设置缓存
        getCacheData (name) {
            if (localStorage) {
                return localStorage.getItem(name);
            } else {
                return this.get(name);
            }
        }, // 获取缓存
        removeCacheData (name) {
            if (localStorage) {
                localStorage.removeItem(name);
            } else {
                this.remove(name);
            }
        } // 清除缓存
    }
});
export const Cookie = new CookieUtil();
export default Cookie;
