import Utils from "../dist/utils.min";
console.log(Utils.Observer);

import { Common } from "../src/index";
console.log(Common)

const Common1 = require("../dist/utils.min");
console.log(Common1)
console.log(Common1.Md5);

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
