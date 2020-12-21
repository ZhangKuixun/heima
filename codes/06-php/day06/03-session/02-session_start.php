<?php
// session_start();
//    作用：开启或重启一个会话，如果把同一个服务器的页面都叉掉，在打开页面，是开启
//    会话：浏览器和服务器请求交互的过程
// session_start() 做的三件事：
//    1 判断浏览器cookie中是否有PHPSESSID，如果有继续用同一个session文件，
//      如果没有PHPSESSID，创建一个新的sessionID
//    2 在服务器中创建一个同名session文件存放数据
//    3 通过响应报文将sessionID传递给浏览器的cookie
session_start();

echo "sessionID=" . session_id();
