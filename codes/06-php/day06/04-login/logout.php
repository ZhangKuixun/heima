<?php
// 删除用户的标记
session_start();
unset($_SESSION['username']);
// 回到登录页
header('location:./login.html');
