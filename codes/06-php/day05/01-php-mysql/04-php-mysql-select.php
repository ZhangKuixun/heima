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
  mysqli_query(数据库的对象, 非查询sql);
  失败：返回false
  成功：返回true  只适用于非查询语句

  mysqli_query(数据库的对象, 查询sql);
  失败：返回false
  成功：返回结果集，要处理查询到的结果  适用查询语句

  mysqli_close($link); 关闭数据库

  mysqli_num_rows(); 获取结果集的行数
  mysqli_fetch_assoc(); 从结果中获取数据
    一次只取一条数据，以关联数据的形式返回
*/

// 1.连接
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'z_test');
// 2.准备
// $sql = "select * from stu where id > 100";
$sql = "select * from stu";
// 3.执行
$r = mysqli_query($link, $sql); // 失败=false 成功=结果集
// var_dump($r);
$num = mysqli_num_rows($r);
// echo $num;

if (!$r || $num === 0) {
  die('未获取到数据！');
}

// echo '<pre>';
// print_r(mysqli_fetch_assoc($r));
// print_r(mysqli_fetch_assoc($r));
// print_r(mysqli_fetch_assoc($r));
// print_r(mysqli_fetch_assoc($r));
// echo '</pre>';

// 4.获取结果集中的全部数据
$data = [];
for ($i = 0; $i < $num; $i++) {
  $data[] = mysqli_fetch_assoc($r);
}
// echo '<pre>';
// print_r($data);
// echo '</pre>';

// 往页面渲染数据

// 5.关闭数据库
mysqli_close($link);
