<?php
// time(); 获取当前时间戳
// date(); 格式化时间

$t = time();
echo $t;

echo date('Y年m月d日 H小时i分钟s秒', $t);
