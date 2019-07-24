// import { Base64 } from "../encrypt/base64";
// console.log(Base64);

import Utils from '../dist/utils.min'
console.log(Utils);

import { Md5 } from "../index";
console.log(Md5);

const Common = require('../common/common').default;
console.log(Common);

// 订阅消息

Utils.Observer.subscribe('test', function (e) {
  console.log(e);
});
// 发布消息
Utils.Observer.publish('test', {
  msg: '参数'
});