<?php
// str_replace(查找的值, 替换的值, 执行替换操作的字符串); 字符串替换
// trim(字符串); 去除字符串首尾处的空白字符
// explode(分割符, 执行分割的字符串); 使用一个字符串分割另一个字符串
// implode(连接符, 执行连接的数组); 将一个一维数组的值拼接为字符串
// substr(字符串, 起始索引，截取长度); 返回字符串的子串
// strchr(字符串, 表示字符); 从左向右查找指定的字符串，并返回该字符后全部字符
// strchr(字符串, 表示字符); 从右向左查找指定的字符串，返回该字符后全部字符串

// $str = '夏日炎炎，两只香蕉散步，一只曰：好热，随脱衣，另一香蕉遂到';
// // 香蕉替换成**
// echo str_replace('香蕉', '**', $str);

// 分割
// $str1 = 'www.baidu.com';
// $arr = explode('.', $str1);
// print_r($arr);

// 拼接
// $arr = ['aa','bb','cc','dd'];
// echo implode('-', $arr);

// 截取
$str = 'sfjlsdkjfisd';
echo substr($str, 0, 4);
