/*
* 发布-订阅模式（观察者模式）
* */

export const Observer = (function () {
  let messages = {}; // 消息队列

  return {
    // 订阅消息
    subscribe (type, fn) {
      // 消息不存在，创建消息执行队列
      if (typeof messages[type] === 'undefined') {
        messages[type] = [fn];
      }
      // 消息存在，将执行动作推进消息执行队列
      else {
        messages[type].push(fn);
      }
    },
    // 发布消息
    publish (type, args) {
      // 如果消息未被注册，返回false
      if (!messages[type]) return false;
      // 定义消息信息
      let events = {
        type: type, // 消息类型
        args: args || {} // 消息携带数据
      };
      for (let i = 0;i < messages[type].length; i++) {
        // 执行动作
        messages[type][i].call(this, events)
      }
    },
    // 删除消息
    remove (type, fn) {
      // 消息队列存在
      if (messages[type] instanceof Array) {
        // 从最后一个消息动作遍历
        let i = messages[type].length - 1;
        for (; i >=0; i++) {
          // 存在该消息动作，则移除
          messages[type][i] === fn && messages[type].splice(i ,1);
        }
      }
    }
  }
})();

export default Observer;