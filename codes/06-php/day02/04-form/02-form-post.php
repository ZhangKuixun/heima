<?php
// echo 'hello post!';
/*
  后台接收前端post方式提交的表单数据
  后台提供了一个超全局变量$_POST，专门用于获取post方式提交的数据
*/

echo '<pre>';
print_r($_POST);
echo '</pre>';
/*
输出：
Array
(
    [username] => zs
    [password] => 123
)
*/

echo $_POST['username'];
echo '<br>';
echo $_POST['password'];
