<?php
// 1.告诉浏览器，返回的文件格式是xml，及编码格式
header('content-type:text/xml;charset=utf-8');
// 2.获取star.xml中数据，返回给前端
echo file_get_contents('./star.xml');
