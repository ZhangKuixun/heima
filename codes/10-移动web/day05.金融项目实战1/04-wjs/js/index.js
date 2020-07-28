// 触屏轮播图
touchBanner();

// 给ul设置宽度
setWidth();

// 实现触屏轮播图
//  1.触屏开始，记录起始位置，停止定时器
//  2.触屏移动，记录移动后位置，计算距离差值
//  3.触屏结束，判断用户的滑动方向
function touchBanner() {
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;

    var banner = $('.wjs-banner');
    banner.on('touchstart', function(e) {
        // console.log(e.originalEvent); // 获取原始dom事件对象；
        // 记录实际位置，停止定时器；
        startX = e.originalEvent.targetTouches[0].clientX;
        // console.log(startX);
        $('.carousel').carousel('pause');
    });
    banner.on('touchmove', function(e) {
        moveX = e.originalEvent.targetTouches[0].clientX;
        distanceX = moveX - startX;
    });
    banner.on('touchend', function(e) {
        if (distanceX > 0) {
            // 右滑，上一张
            $('.carousel').carousel('prev');
        }
        if (distanceX < 0) {
            // 左滑，下一张
            $('.carousel').carousel('next');
        }

        startX = 0;
        moveX = 0;
        distanceX = 0;

        $('.carousel').carousel('cycle');
    });
}

// 累加所有产品模块导航li长度；
// jqery获取各种宽度：
// width();           content
// innerWidth();      content+padding
// outerWidth();      content+padding+border
// outerWidth(true);  content+padding+border+margin
function setWidth() {
    var w = 0;
    $('.wjs-tabs li').each(function(index, ele) {
        w += $(ele).outerWidth(true);
    });
    $('.wjs-tabs').width(w);
}