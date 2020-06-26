/* 
瀑布流思路：

    瀑布流定位：
        1.每个图片在布局之前，找一排中高度最小列，向最小列后面添加图片，准备一个数据储存每一列列高
        2.追加当前图片的位置：
            top：最小列列高 + 间距
            left：最小列索引值 * ( 宽度 + 间距 )
        3.更新当前列高，用新列高进行后面比较
            cloumn[minIndex] += $(ele).height() + gap;
        4.获取最大列高，设置给items，撑开items盒子

    动态加载：
        1.在页面打开后，获取第一页的数据，渲染在页面上
        2.点击加载更多，加载下一屏
        3.滚动到底部，加载下一屏
*/
$.fn.waterFall = function() {
    var column = [0, 0, 0, 0, 0];
    // 列宽
    var width = 230;
    // 间距
    var gap = 10;
    // 获取所有items
    // var items = $('.item');
    // console.log(items);

    $('.item').each(function(index, ele) {
        // 1.先找高度最小的列
        var min = column[0]; // 假设第一列是最小值
        var minIndex = 0;

        // 找最小列
        column.forEach(function(v, i) {
            if (v < min) {
                min = v;
                minIndex = i; // 保存最小列索引值
            }
        });

        // 2.开始设置图片的位置
        $(ele).css({
            left: minIndex * (width + gap),
            top: min + gap
        })

        // 3.更新最小列列高
        column[minIndex] += $(ele).height() + gap;
    });

    // 4.获取最大列高，设置给items，撑开items盒子
    var h = Math.max.apply(null, column);
    // console.log(column, h);

    // $('.items').height(h);
    this.height(h);

}