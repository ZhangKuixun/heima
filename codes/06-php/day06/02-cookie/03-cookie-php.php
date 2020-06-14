<?php
/*
通过php来操作cookie
设置cookie
  setcookie(key, 值);
  setcookie(key, 值, 有效期);
删除
  setcookie(key, 值, 有效期(今天之前的日期));
获取
  $_COOKIE['key'] 超全局变量
*/
setcookie('phpname', 'lisi');
setcookie('phpage', 18);
setcookie('phpsex', 'm', time()+7*24*3600);

// 删除
setcookie('phpsex', 'm', time()-1000);

echo '<pre>';
print_r($_COOKIE);
echo '</pre>';
