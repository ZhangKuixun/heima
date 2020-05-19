// pages/04-bindevent/04-bindevent.js
Page({
  fn1() {
    console.log('点击 父 view');
  },
  fn2() {
    console.log("触发了 bindtap");
  },
  fn3() {
    console.log("触发了 catchtap");
  },
  // send(number) {
  //   console.log("send", number);
  // },
  send(e) {
    // e 事件对象
    console.log("send", e);
    console.log('send', e.currentTarget.dataset);
  }
})