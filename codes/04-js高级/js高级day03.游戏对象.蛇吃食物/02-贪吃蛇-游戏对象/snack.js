/* 
蛇的代码

蛇的属性：
  width：蛇一节的宽度
  height：蛇一节的宽度
  headBgc：蛇头的背景色
  bodyBgc：身体的颜色
  body: [
          通过数组能得到蛇的长度，数组中的每一节是一个对象，通过这个对象可以得到这一节的坐标信息。
          注意点：数组中第一项永远都是蛇头
          {w:2,y=0},// 蛇头的坐标信息
          {w:1,y=0},// 蛇中间一节的坐标信息
          {w:0,y=0} // 蛇尾巴一节的坐标信息
        ]
蛇的方法：
  render：把蛇创建出来添加到地图中，设置样式，根据蛇实例对象
  move：让蛇移动起来。实现原理：修改body数组中的每一项的坐标
        两种修改坐标的方式：
          方式1：修改蛇的每一节的坐标，for循环一个一个的修改蛇的每一节坐标（如果太长，性能差）
          方式2：
              1.复制当前蛇头的坐标----
              2.根据蛇的移动方向去修改复制的蛇头----
              3.将复制出的蛇头添加到存放蛇的body数组中 （unshift）
              4.删除蛇尾----
              5.把地图中原来的蛇的每一节找到，从地图中删除掉
              6.蛇的坐标发生了改变，需要把蛇重新渲染到地图上 （render）
*/

// 创建蛇对象
function Snake(options) {
  options = options || {};

  this.width = options.width || 20;
  this.height = options.height || 20;
  this.direction = options.direction || 'right';
  this.headBgc = options.headBgc || 'red';
  this.bodyBgc = options.bodyBgc || 'green';
  this.body = this.body || [
    { x: 2, y: 0 },// 蛇头的坐标信息
    { x: 1, y: 0 },// 蛇中间一节的坐标信息
    { x: 0, y: 0 } // 蛇尾巴一节的坐标信息
  ]
}

// target：装载蛇的容器
Snake.prototype.render = function (target) {
  for (let i = 0; i < this.body.length; i++) {
    var span = document.createElement('span')

    span.style.width = this.width + 'px'
    span.style.height = this.height + 'px'

    span.style.backgroundColor = i == 0 ? this.headBgc : this.bodyBgc

    span.style.position = 'absolute';
    span.style.left = this.body[i].x * this.width + 'px';
    span.style.top = this.body[i].y * this.height + 'px';

    target.appendChild(span)
  }
}

Snake.prototype.move = function (target) {

  // 1.复制当前蛇头的坐标
  var newHead = {
    x: this.body[0].x,
    y: this.body[0].y
  }
  // 不能这么复制蛇头，复杂数据类型，相当于把地址给了newHead，修改newHead的时候，body也会修改
  // var newHead = this.body[0]

  // 2.根据蛇的移动方向去修改复制的蛇头
  switch (this.direction) {
    case 'right':
      newHead.x++;
      break;
    case 'left':
      newHead.x--;
      break;
    case 'up':
      newHead.y--;
      break;
    case 'down':
      newHead.y++;
      break;
  }
  
  // 3.将复制出的蛇头添加到蛇的body数组中
  this.body.unshift(newHead)
  
  // 4.删除蛇尾
  this.body.pop()

  // 5.把地图中原来的蛇的每一节找到，从地图中删除掉
  var spans = target.querySelectorAll('span');
  // target.removeChild(spans)// 错误的写法
  for (let i = 0; i < spans.length; i++) {
    target.removeChild(spans[i])
  }

  // 6.蛇的坐标发生了改变，需要把蛇重新渲染到地图上 （render）
  this.render(target);
}