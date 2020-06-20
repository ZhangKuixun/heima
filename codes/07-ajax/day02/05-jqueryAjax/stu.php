<?php
// echo 'hehe';
include_once '../../fn.php';

$sql = "select * from stu";
// 执行查询
$data = my_query($sql);
// 把数据转成json字符串
// 如果后台返回的是json字符串，在后台就不要有任何多余输出
echo json_encode($data);