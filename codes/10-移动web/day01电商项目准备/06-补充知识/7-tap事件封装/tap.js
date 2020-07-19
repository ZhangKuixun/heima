var itcast = {
    // selector 要绑定事件元素的选择器
    // callback 触发事件后要执行的回调函数
    tap: function(selector, callback) {
        // 1.获取元素
        var ele = document.querySelector(selector);

        // 2.给盒子绑定tap事件
        if (ele) {
            var move = false; // 是否移动
            var startT = 0; // 起始时间
            ele.ontouchstart = function() {
                startT = Date.now();
            }
            ele.ontouchmove = function() {
                move = true;
            }
            ele.ontouchend = function(e) {
                if (Date.now() - startT < 100 && !move) {
                    // 事件对象e，是浏览器提供的
                    callback && callback(e);
                }

                // 数据重置
                move = false;
                startT = 0;
            };
        }
    }
}