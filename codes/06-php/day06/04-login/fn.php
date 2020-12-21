<?php
// 判断用户是否登录
function isLogin()
{
    // 访问此页面之前，先判断用户之前是否登录过
    // 1.先判断浏览器的cookie是否有携带PSESSID数据
    if (empty($_COOKIE['PHPSESSID'])) {
        // 去登录页
        header('location:./login.html');
        die();
    } else {
        // 2.判断浏览器的sessionID是否和服务器的一致
        // 一定要先开启session
        session_start();

        if (empty($_SESSION['username'])) {
            // session对应文件不存在
            // 去登录
            header('location:./login.html');
            die();
        }
    }
}
