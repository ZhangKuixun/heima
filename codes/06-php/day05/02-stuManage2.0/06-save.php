<?php
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// echo '<pre>';
// print_r($_FILES);
// echo '</pre>';
include_once './fn.php';

// 3.用户修改完成后，点击保存按钮，获取表单数据，提交给服务器进行更新

// 1 获取前端提交的表单数据
$id = $_POST['id'];
$username = $_POST['username'];
$nickname = $_POST['nickname'];
$age = $_POST['age'];
$tel = $_POST['tel'];
$sex = $_POST['sex'];
$class = $_POST['class'];
$photo = '';

// 2 获取上传的新图像
$file = $_FILES['photo'];
if ($file['error'] === 0) {
    $ext = explode('.', $file['name'])[1];
    $newName = rand(1000, 9999) . time() . '.' . $ext;
    $photo = './upload/' . $newName;
    move_uploaded_file($file['tmp_name'], $photo);
}

// 3 将获取到的修改后数据根据id，更新回数据库
if (empty($photo)) {
    $sql = "update stu set name='$username', nickname='$nickname', age=$age, sex='$sex', tel='$tel', classid=$class where id=$id";
} else {
    $sql = "update stu set name='$username', nickname='$nickname', age=$age, sex='$sex', tel='$tel', classid=$class, photo='$photo' where id=$id";
}
// echo $sql;
my_exec($sql);

// 4 跳转到列表页
header('location:./02-list.php');
