<?php
// echo $num;

// 去data.txt中获取num的数据
// 读取data.txt中的内容
$num = file_get_contents('./data.txt');
echo $num;
