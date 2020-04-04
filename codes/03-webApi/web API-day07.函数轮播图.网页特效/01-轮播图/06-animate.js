/* 
动画函数
作用：可以实现任何元素去任意left位置
封装：把写死的值提取成参数

解决了能够到达终点
不存在来回抖动的问题
*/
/* 
element 就是让哪个元素做动画效果
target 目标位置的值，负值=向左移动，正值=向右移动
num 每次需要移动的距离
*/
function animation (element, target, num) {
  /* 
  06-细节2

  num设置默认值
  */
  num = num || 80

  // 把timerid储存到element的dome对象上，类似于存下标。
  // 用console.dir(element);可以查看timerid
  console.dir(element);
  clearInterval(element.timerid)

  element.timerid = setInterval(() => {
    var current = element.offsetLeft;// 每次获取div左边的距离

    var step = current < target ? num : -num;// 每次移动的距离，往左走还是往右走

    if (Math.abs(target - current) < Math.abs(step)) {// 判断剩下的距离 < 移动的距离。只比较值，所有取绝对值
      clearInterval(element.timerid)// 到达终点

      element.style.left = target + 'px'// 可能设置的是96px，到不了终点
    } else {
      current += step;// 增加移动的值，值可负可正
      element.style.left = current + 'px'// 继续移动
    }
  }, 30);
}