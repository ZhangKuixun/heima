/* 
推荐用js操作类名的方式，控制样式
del.onclick = function() {
    up.classList.add('open');
}
*/

// 需求：
// 1.点击删除按钮：
//  桶盖打开，加open
//  模态框显示 display:block
//  删除盒子做动画，加bounceInDown

var dels = document.querySelectorAll('.del');
var winBox = document.querySelector('.win-box');
var delBox = document.querySelector('.del-box')
var btnCancels = document.querySelectorAll('.btn-cancel')
dels.forEach(function(v, i) {
    v.onclick = function() {
        // 开盖动画
        this.classList.add('open');
        // 显示模态框
        winBox.classList.add('show');
        // 删除盒子做动画
        delBox.classList.add('bunceInDown');
    }
});

// 点击取消按钮
//  模态框隐藏 删除show
//  去掉删除盒子类名 删除bounceInDown
//  桶盖闭合 删除open
btnCancels.forEach(function(v, i) {
    v.onclick = function() {
        // 模态框隐藏
        winBox.classList.remove('show');
        // 去掉删除盒子类名
        delBox.classList.remove('bunceInDown');
        // 桶盖闭合
        document.querySelector('.open').classList.remove('open');
    }
})