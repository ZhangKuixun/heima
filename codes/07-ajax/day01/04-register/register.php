<?php
// 1.获取前端传递用户名
$name = $_GET['name'];
// 2.获取数据库中所有用户名 select name from user;
$names = ['zs','ls','wu'];
// 3.判断
// in_array(a, b); 判断数据a是否在数组b中
//
if (in_array($name, $names)) {
    echo 'x';
} else {
    echo '√';
}
