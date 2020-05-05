$.fn.accordion = function (options) {
  options = options || {};
  /* 
  功能1：给每一个li设置背景图片
    1.for循环找到所有li元素
    2.for循环，给每一个li都要设置背景图片
  
  功能2：鼠标移入li，li的宽变成800,其他变100
  
  功能3：鼠标离开li
  */

  // 1.
  // 优化01：
  // var $lis = $('li')
  var $lis = this.find('li')

  var maxW = options.maxW || 800;
  var minW = (this.width() - maxW) / ($lis.length - 1)
  var averageW = this.width() / $lis.length
  var imgs = options.imgsList;

  // 优化02：
  // for (let index = 0; index < $lis.length; index++) {
  //   $lis.eq(index).css('backgroundImage', 'url(images/' + (index + 1) + '.jpg)')
  // }
  $lis.each(function (index, ele) {
    $(ele).css('backgroundImage', 'url(' + imgs[index] + ')')
  })

  //2.
  // stop() 解决鼠标在做动画的元素上快速移入移除
  $lis.mouseenter(function () {
    $(this).stop().animate({ width: maxW }).siblings().stop().animate({ width: minW })
  })

  //3.
  this.mouseleave(function () {
    $lis.stop().animate({ width: averageW })
  })
}