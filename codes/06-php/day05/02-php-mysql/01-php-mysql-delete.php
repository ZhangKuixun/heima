<?php
$id = 3;
/*
通过服务器操作数据库基本步骤：
  1.通过服务器连接数据库
  2.准备sql语句
  3.将sql语句传递给数据库执行
  4.分析执行结果
  5.关闭数据库的连接
*/

/*
连接数据库
  mysqli_connect(主机ip, 用户名, 密码, 数据库, 端口);
  成功：返回一个对象（数据库连接对象）
  失败：返回false

将sql传递给数据库进行执行
  mysqli_query(数据库的对象, sql);
  成功：返回true
  失败：返回false
*/


// 1.通过服务器连接数据库
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'z_test');
// echo '<pre>';
// print_r($link);
// echo '</pre>';

// 2.准备sql语句
// 建议使用双引号，可以解析字符串中的变量
$sql = "delete from stu where id = $id";
// echo $sql;

// 3.将sql语句传递给数据库执行
$reslut = mysqli_query($link, $sql);
// var_dump($reslut);

// 4.分析执行结果
if ($reslut) {
    echo '操作成功';
} else {
    echo '操作失败';
}

// 5.关闭数据库的连接
mysqli_close($link);
