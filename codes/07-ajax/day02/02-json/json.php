<?php
$info = [
  "name" => "xiaoming",
  "age" => 18,
  "sex" => "m"
];
// 将object对象转成json字符串
echo json_encode($info);

$str = '{"name":"zs","age":18,"sex":"m"}';
$str1 = '[{"name":"zs","age":18,"sex":"m"},{"name":"ls","age":20,"sex":"f"}]';

// 将json字符串转成js的数据
$str = json_decode($str);

echo '<pre>';
print_r($str);
echo '</pre>';
