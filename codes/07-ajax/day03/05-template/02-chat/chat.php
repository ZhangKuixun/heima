<?php
// echo '呵呵';
// 后台回复前端消息
$messages = [
  '我真好',
  '然后呢',
  '那好吧',
  '我在洗澡',
  '他在睡觉',
  '够了',
  '我也是'
];

$index = rand(0, count($messages)-1);

echo $messages[$index];

sleep(1);
