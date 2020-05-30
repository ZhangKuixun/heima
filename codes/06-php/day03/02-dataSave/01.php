<?php
$num = 100;
echo $num;

/*
程序是在内存中运行的，变量存储在内存中，在程序运行结束后，数据会被销毁，如果希望某些数据能够永久存储，需要将数据存储的硬盘上
数据持久化：永久存储，把数据从内存中转移到硬盘的过程

读写数据的方法：
  file_get_contents(path); 读取文件内容，返回一个字符串
  file_put_contents(path, $str); 将一个字符串写入文件中，会覆盖之前的内容
  json_enconde($data); 把PHP变量转成JSON格式字符串，
  json_decode($str, true); 接收一个JSON编码的字符串并且把它转成PHP变量
*/
file_put_contents('./data.txt', $num);
