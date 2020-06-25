<?php
// 从文件中读取数据到PHP变量
$json_string = file_get_contents('data.json');

// 转换成php数组 200 条数据
$data = json_decode($json_string);

// 根据页面计算offset
$page = $_POST['page'];

// 每页10条
// 1    0-9    0
// 2    10-19    10
// 3    20-29    20
// (page - 1) * 10 计算得到每一页的第一条数据

// 每页的数据计算每页数据的“起点”
$offset = ($page - 1) * 10;

// 从数组取出一部分数据

// 截取10条数据
// array_slice(截取的数组，起始索引，截取长度)
$result = array_slice($data, $offset, 10);

// 翻页
$page++;

// 放到数组里
$arr = array(
  'page'=> $page,
  'items'=>$result
);
echo json_encode($arr);

// sleep(1);
