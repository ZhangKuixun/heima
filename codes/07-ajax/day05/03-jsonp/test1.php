<?php

// jsonp==>json with padding 用json数据进行填充
// 后台就是仓库，有的就是数据
$info=[
  'name'=>'小米',
  'age'=>18
];

$info = json_encode($info);// {'name':'zs','age':18}

echo $_GET['callback'] . '(' . $info . ')';
