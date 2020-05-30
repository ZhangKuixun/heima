<?php
$info = [
  'name'=>"xiaoming",
  'age'=>18,
  'sex'=>'m'
];

// 在数据销毁前，将数据持久化到文件中
// file_put_contents('./data.txt', $info);
// 复杂类型数据直接写文件，会丢失数据原有格式，且无法复原
// 解决方案：
// 先将复杂的数据转成一个带有格式的字符串（json）,存储到文件中
// 后期使用，从文件中读取json字符串，再转回原有格式
// 复杂数据-->json字符串
// json字符串-->原来数据类型

$str = json_encode($info);
var_dump($str);
file_put_contents('./data.txt', $str);
