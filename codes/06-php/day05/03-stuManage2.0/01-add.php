<?php
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// echo '<pre>';
// print_r($_FILES);
// echo '</pre>';

include_once './fn.php';

// 1.获取前端传递基本表单数据
$username = $_POST['username'];
$nickname = $_POST['nickname'];
$age = $_POST['age'];
$tel = $_POST['tel'];
$sex = $_POST['sex'];
$class = $_POST['class'];
// 存放学生图片的地址
$photo ='';

// 2.上传头像存储在服务器中
$file = $_FILES['photo'];
if ($file['error'] === 0) {
    $ext = explode('.', $file['name'])[1];// 取后缀名
    $newName = rand(1000, 9999) . time() . '.' . $ext;// 生成新文件名
    $photo =  './upload/'. $newName;
    move_uploaded_file($file['tmp_name'], $photo);
}
echo $photo;

// 3.将用户的数据和图片地址插入到数据库中
// 电话号码是一个字符串
$sql = "insert into stu (name,nickname,age,tel,sex,photo,classid)
        values('$username','$nickname',$age,'$tel','$sex','$photo',$class)";
echo $sql;
// 执行
my_exec($sql);

header("location:./02-list.php");
