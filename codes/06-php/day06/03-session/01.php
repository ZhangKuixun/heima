<?php
// 开启session
session_start();

// 设置
$_SESSION['name'] = 'zs';
$_SESSION['age'] = 18;
$_SESSION['sex'] = 'm';

// 删除
unset($_SESSION['age']);

echo '<pre>';
print_r($_SESSION);
echo '</pre>';
