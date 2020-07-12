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
    var points = banner.querySelectorAll('ol li');
    setPoint(3);

    function setPoint(i) {
        points.forEach(function(v, i) {
            v.classList.remove('current');
        })
        points[i].classList.add('current');
    }
}