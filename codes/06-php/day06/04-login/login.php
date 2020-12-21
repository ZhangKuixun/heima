<?php
/*
1.在用户登录成功时，给用户添加一个标记
    session_start();
        1.服务器会产生一个sessionID
        2.会生成一个和sessionID相同的同名文件用于存储数据
        3.把sessionID给到登录成功用户cookie
2.在用户再次登录时，判断用户是否携带有这个标记，并且判断是否和服务器一致
    - 如果一致，已登录
    - 如果没有，去登录
        1.判断用户是否携带sessionID过来
        2.sessionID是否和服务器的一致
            - 通过去session文件中取数据，即可判断
            - 如果是真的sessionID，后台一定有同名session文件可以获取数据
*/

$username = $_GET['username'];
$password = $_GET['password'];
if ($username == 'zs' && $password == '123') {
    echo '登录成功';
    // 给登录成功用户添加标记
    session_start();
    // 在session文件中，设置一个数据
    $_SESSION['username'] = $username;
    // 立即跳转到首页
    header('location:./index.php');
} else {
    echo '登录失败';
    // 延迟3秒后，跳转到登录页面
    header('refresh:3; url=login.html');
}
