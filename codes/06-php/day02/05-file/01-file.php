<?php
// echo 'hello form!';
/*
  后台接收前端提交的文件
  需要使用php提供的一个超全局变量 $_FILES

  服务器的保护机制：
    自动删除上传但未处理的文件，删除时间是在程序执行结束时，如果想让文件保存在服务器中，必须在程序结束之前，手动转移文件的位置

  保存上传图片完整思路：
    1.上传文件成功后，再来保存图片
    2.每次保存的图片名字必须不一样
        文件名不一样，后缀名必须一样
    3.用新的文件名来转移文件到新的目录
*/

echo '<pre>';
print_r($_FILES);// 二维数组
echo '</pre>';
/*
输出：
Array
(
    [photo] => Array
        (
            [name] => QQ图片20200105212238.jpg
            [type] => image/jpeg
            [tmp_name] => C:\Windows\php45A2.tmp
            [error] => 0
            [size] => 23225
        )

)
*/

echo '<pre>';
print_r($_FILES['photo']);
echo '</pre>';
/*
输出：
Array
(
    [name] => QQ图片20200105212238.jpg  //文件名
    [type] => image/jpeg  //文件类型
    [tmp_name] => C:\Windows\phpF72B.tmp  //文件存放位置
    [error] => 0  //错误码，0表示没有错误
    [size] => 23225  //文件大小
)
*/

$file = $_FILES['photo'];// 一维数组
echo $file['tmp_name'];

// 如果要保留上传的文件，必须手动转移文件到其他位置
// move_uploaded_file(临时文件的路径，新文件位置);
move_uploaded_file($file['tmp_name'], './1.jpg');
