$.fn.bgc = function (color) {
  this.css('backgroundColor', color)

  // 链式编程的原理
  return this;
}