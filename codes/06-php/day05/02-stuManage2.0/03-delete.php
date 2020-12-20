<?php
include_once './fn.php';
// 1.根据前端传递的id，删除对应的数据
$id =  $_GET['id'];

// 2.转成数组
$sql = "delete from stu where id=$id";
my_exec($sql);

// 3.删除完成后跳转到列表页
header('location:./02-list.php');
