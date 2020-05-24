<?php
// echo 'hello form!';
/*
  后台接收前端get方式提交的表单数据
  在服务器中，后台可以使用一个超全局变量$_GET，在$_GET中存放有表单get方式提交的数据
*/

echo '<pre>';
print_r($_GET);
echo '</pre>';
/*
输出：
Array
(
    [username] => zs
    [password] => 123
)
*/

$username = $_GET['username'];
$password = $_GET['password'];
if ($username== '123' && $password == '123') {
    echo '登录成功';
    // 立即跳转到首页
    header('location:http://www.baidu.com');
} else {
    echo '登录失败';
    // 延迟3秒后，跳转到登录页面
    header('refresh:3; url=01-form.html');
}
