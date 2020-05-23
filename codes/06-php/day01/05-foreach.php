<?php
header('content-type:text/html;charset=utf-8');
// 遍历普通数组
// $arr = [11, 22, 33, 44];
// for ($i=0; $i < count($arr); $i++) {
//     echo $arr[$i]*2 . '--';
// }

// 99乘法表
// for ($i=1; $i <= 9; $i++) {
//     for ($j=1; $j <= $i; $j++) {
//         echo  $i . '*' . $j . '=' . $i * $j . ' ';
//     }
//     echo "<br>";
// }


// 遍历关联数组
$infos = [
  "name"=>"涛涛",
  "age"=>18,
  "sex"=>"未知"
];
foreach ($infos as $key => $value) {
    echo $key . "-->" . $value . '<br>';
}
