/* 
1.倒计时
2.头部滚动变色
3.banner无缝滚动
4.轮播图 定时器切换轮播图、触屏滑动轮播图
*/

// 1.倒计时
downTime();

// 2.头部滚动变色
Header();

// 3.banner无缝滚动
news();

// 4.轮播图
banner();

// 倒计时思路
// 1.指定目标时间，用目标时间-当前时间=时间差，把时间差转成时分秒，显示
// 2.把时分秒显示在span标签中
function downTime() {
    var times = document.querySelectorAll('.time span:nth-child(odd)');
    // 目标时间
    var target = new Date('2020-7-13 14:06:30');
    var timer = setInterval(function() {
        // 获取当前时间
        var now = new Date();
        var t = (target - now) / 1000;

        if (t < 0) {
            // 小于0，清空定时器
            clearInterval(timer);
            return;
        }

        var h = Math.floor(t / 3600); // 向下取整
        var m = Math.floor(t % 3600 / 60);
        var s = Math.floor(t % 60);

        h = h < 10 ? "0" + h : h;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        // 设置值
        times[0].innerHTML = h;
        times[1].innerHTML = m;
        times[2].innerHTML = s;
    }, 1000)
}

// 头部滚动变色思路
// 1.监听页面滚动事件，在页面滚动后，获取页面卷曲高度，用高度和指定高度（500px）做对比，比值设置为头部透明度
function Header() {
    var head = document.querySelector('.jd-header');
    // 监听页面滚动事件
    window.onscroll = function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var target = 500;
        var value = scrollTop / target;
        if (value > 0.8)
            value = 0.8
            // 设置颜色
        head.style.backgroundColor = 'rgba(222, 24, 27, ' + value + ')';
    }
}

// 快报无缝滚动
function news() {
    var index = 0;
    var ul = document.querySelector(".cut ul");
    var li = document.querySelectorAll(".cut ul li");
    setInterval(function() {
        index++;
        // 添加过渡
        setTransition();
        // 计算ul移动的距离
        var y = -index * 30;
        setTranslateY(y);
    }, 2000);

    // 在每次ul移动结束瞬间进行判断
    ul.addEventListener('transitionend', function() {
        check();
    })
    ul.addEventListener('webkitTransitionEnd', function() { // 事件监听兼容代码
        check();
    })

    // 添加过渡
    function setTransition() {
        ul.style.transition = "transform .4s";
        ul.style.webkitTransition = "transform .4s";
    }

    // 删除过渡
    function removeTransition() {
        ul.style.transition = 'none';
        ul.style.webkitTransition = 'none';
    }

    // ul位移
    function setTranslateY(y) {
        ul.style.transform = 'translateY(' + y + 'px)';
        ul.style.webkitTransform = 'translateY(' + y + 'px)';
    }

    function check() {
        if (index >= li.length - 1) {
            index = 0; // 复位
            // 去掉动画
            removeTransition();
            // 瞬间跳回第一个进行重合
            setTranslateY(0);
        }
    }
};


// 4.轮播图 定时器切换轮播图、触屏滑动轮播图
// 1.定时器切换轮播图
// 2.触屏切换轮播图
function banner() {
    var banner = document.querySelector('.jd-banner');
    var ul = banner.querySelector('ul');
    var li = ul.querySelectorAll('li');
    var points = banner.querySelectorAll('ol li');
    var w = banner.offsetWidth;
    /* 
    1.定时器切换轮播图
    2.定义index记录当前图片
    3.根据index推算出ul移动距离：-index * 轮播图宽度
    4.让ul进行移动，加过渡
    5.小圆点同步切换
    */
    var index = 1; //默认显示第二张图，索引为1
    var timer = setInterval(() => {
        index++;
        // ul移动距离=-index * 轮播图宽度
        var x = -index * w;
        // 添加过渡
        setTransition();
        // ul移动
        setTranslateX(x);
    }, 2000);

    // 在每次ul移动结束瞬间进行判断
    ul.addEventListener('transitionend', function() {
        check();
    })
    ul.addEventListener('webkitTransitionEnd', function() { // 事件监听兼容代码
        check();
    })

    function check() {
        if (index >= li.length - 1) { // index>=9
            // 让index设置为1
            index = 1;
            // 让ul瞬间跳到第一个进行重合
            // 删除过渡
        }
        if (index <= 0) {
            // 瞬间跳转进行重合
            // 删除过渡
            index = 8;
        }

        // 去掉动画
        removeTransition();
        // 瞬间跳回第一个进行重合
        var x = -index * w;
        setTranslateX(x);

        setPoint(index - 1);
    }

    // 3.触屏滑动切换轮播图
    //  1.触屏开始
    //      1.清除定时器
    //      2.记录触屏起始位置
    //  2.触屏移动
    //      1.获取移动后的坐标位置
    //      2.计算距离差
    //      3.ul跟着手指移动，移动距离 = 距离差
    //  3.触屏结束
    //      1.判断触屏滑动距离 > 屏幕宽度1/3，切换图片
    //                        < 屏幕宽度1/3，就不切换
    //          判断左滑，下一张，index++
    //          右滑：上一张，index--
    //              让轮播图进行切换
    //      2.开启定时器
    //      3.数据重置
    var startX = 0;
    var moveX = 0;
    var distanceX = 0;
    banner.ontouchstart = function(e) {
        console.log('触屏开始');
        clearInterval(timer);
        startX = e.targetTouches[0].clientX;
    }
    banner.ontouchmove = function(e) {
        // console.log("触屏移动");
        moveX = e.targetTouches[0].clientX;
        // 计算距离差值
        distanceX = moveX - startX;
        console.log(distanceX);
        // 3.ul跟着手指移动，移动距离 = 距离差
        // 如果使用 移动距离 = 距离差，始终都是滑动的第一张图片，
        // 图片之前的x坐标(一张图片撑满全屏，按屏幕来算) + 距离差
        var x = -index * w + distanceX;
        setTranslateX(x);
    }
    banner.ontouchend = function(e) {
        if (distanceX > w / 3) {
            //切换图片
            if (distanceX < 0) {
                //左滑 下一张
                index++;
                var x = -index * w;
                setTranslateX(x);
            } else {
                //右滑 上一张
                index--;
                var x = -index * w;
                setTranslateX(x);
            }
        }

        if (distanceX < w / 3) {
            //不切换
            var x = -index * w;
            setTranslateX(x);
        }
    }



    function setPoint(i) {
        points.forEach(function(v, i) {
            v.classList.remove('current');
        })
        points[i].classList.add('current');
    }

    // 添加过渡
    function setTransition() {
        ul.style.transition = "transform .9s";
        ul.style.webkitTransition = "transform .9s";
    }

    // 删除过渡
    function removeTransition() {
        ul.style.transition = 'none';
        ul.style.webkitTransition = 'none';
    }

    // ul位移
    function setTranslateX(x) {
        ul.style.transform = 'translateX(' + x + 'px)';
        ul.style.webkitTransform = 'translateX(' + x + 'px)';
    }
}