<?php
// echo "delete";
$id =  $_GET['id'];
// echo $id;// 就是数组下标
// 根据前端传递id，删除对应数据
// 删除思路：
// 1.先读取data.txt中的json字符串
$data = file_get_contents('./data.txt');

// 2.转成数组
$arr = json_decode($data, true);
// echo '<pre>';
// print_r($arr);
// echo '</pre>';

// 3.从数组中删除对应的下标元素
// 删除数组：
// js: arr.splice(从哪删,  删几个,  添加项)
// php: array_splice(被删数组,  从哪开始删除,  删几个,  替换项);
array_splice($arr, $id, 1);
// echo '<pre>';
// print_r($arr);
// echo '</pre>';

// 4.将删除完成后的数组转回json字符串
$str = json_encode($arr);

// 5.存回到data.txt中
file_put_contents('./data.txt', $str);


// 删除完成后跳转到列表页
header('location:./02-list.php');
