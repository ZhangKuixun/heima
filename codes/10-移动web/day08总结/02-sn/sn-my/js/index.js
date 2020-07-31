// 轮播图
var mySwiper = new Swiper('.swiper-container', {
    // 自动滑动
    autoplay: 1000,

    // 滑动时间
    speed: 1000,

    // 无缝滚动
    loop: true,

    // 触发swiper所需要的最小拖动距离比例
    longSwipesRatio: 0.3,

    //用户操作swiper之后，是否禁止autoplay.默认为true：停止。
    autoplayDisableOnInteraction: false,

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要分页器
    pagination: '.swiper-pagination',

    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    // 如果需要滚动条
    scrollbar: '.swiper-scrollbar',
})