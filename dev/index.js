// import { Base64 } from "../encrypt/base64";
// console.log(Base64);

import Utils from "../dist/utils.min";

import { Md5 } from "../dist/utils.min";

const Common = require("../dist/utils.min");
console.log(Common);

// 订阅消息

Utils.Observer.subscribe('test', function (e) {
  console.log(e);
});
// 发布消息
Utils.Observer.publish('test', {
  msg: '参数'
});

document.getElementById("point").onclick = ()=>{
    Utils.Common.slideToggle(document.getElementById("elem"), 300);
}
