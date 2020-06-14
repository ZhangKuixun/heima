<?php
// session_start();
//    作用：开启或重启一个会话
//    会话：浏览器和服务器请求交互的过程
// session_start() 做的三件事：
//    1 判断浏览器cookie中是否有PHPSESSION，如果有继续用同一个session文件，
//      如果没有PHPSESSION，创建一个新的sessionID
//    2 在服务器中创建一个同名session文件存放数据
//    3 通过响应报文将sessionID传递给浏览器的cookie
session_start();
