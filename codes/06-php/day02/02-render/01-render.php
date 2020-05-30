<?php
// php的代码必须方哉php标签的内部

echo 2+3;
echo '<br>';
echo '呵呵';

// 不能把裸标签写在php标签内
// <h1>窗前明月光</h1>
?>

<!-- 显示 窗前明月光
    因为浏览器能解析h1标签
-->
<h1>窗前明月光</h1>

<!-- 显示 echo 2+3; -->
echo 2+3;

<!-- 
php网页动态渲染：
  php文件的执行过程：
    在服务器中，执行php文件时，只会执行php标签内部代码，php标签外部
    代码直接忽略，php标签内的代码执行完成后，会将php的执行结果和非
    php标签内的代码一起返回给浏览器，由浏览器再次进行解析
 -->