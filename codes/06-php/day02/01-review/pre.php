<?php
// 保留文本原有格式
$str = '<h1>我是标题</h1>';
echo $str;

$arr = [1,2,3,4,5];
// 没有格式
print_r($arr);// Array ( [0] => 1 [1] => 2 [2] => 3 [3] => 4 [4] => 5 )

// 有格式
echo "<pre>";
print_r($arr);
echo "</pre>";
    /*
    输出：
    Array
    (
        [0] => 1
        [1] => 2
        [2] => 3
        [3] => 4
        [4] => 5
    )
    */

 
  /*
  新键代码片段：
    "Print to console": {
      "scope": "php",
      "prefix": "ptr",
      "body": [
        "echo '<pre>';",
        "print_r($1);",
        "echo '</pre>';"
      ],
      "description": "按格式输出文本"
    }
  */
