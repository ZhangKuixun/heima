/*
缓动动画最终版本
element 做动画的元素
obj 对象，动画的键值对
fn 回调函数，当定时器清楚了才执行fn函数
*/
function animate(element, obj, fn) {
  clearInterval(element.timerId)
  element.timerId = setInterval(() => {
    var flag = true
    for (const k in obj) {
      var attr = k
      var target = obj[k]
      var current = window.getComputedStyle(element, null)[attr]
      current = parseInt(current)

      var step = (target - current) / 10
      step = step > 0 ? Math.ceil(step) : Math.floor(step)

      current += step
      element.style[attr] = current + "px"

      if (current != target) {
        flag = false
      }
    }
    console.log(flag);
    if (flag) {
      clearInterval(element.timerId)

      // && 解决：如果没有传递fn的情况下，会报错。比如最后一次动画做完了，没有fn
      fn && fn()
    }
  }, 30);
}