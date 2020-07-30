// 轮播图
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical',
    autoplay: 2000, //可选选项，自动滑动
    speed: 1000,
    loop: true, // 无缝滚动
    longSwipesRatio: 0.33, // 触发swiper所需要的最小拖动距离比例

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
})