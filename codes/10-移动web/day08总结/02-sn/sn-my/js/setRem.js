// 动态获取当前屏幕的宽度，时时设置屏幕的rem；
function setRem() {
    // 获取屏幕宽
    var w = window.innerWidth;
    // if (w > 1020) {
    //     w = 1020;
    // }

    // 设置html的rem的值
    console.log(w / 10);
    document.documentElement.style.fontSize = w / 10 + 'px';
}
setRem();

// 当页面尺寸发送变化时，时时设置rem
window.onresize = setRem;