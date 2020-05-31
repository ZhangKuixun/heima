<?php
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

echo '<pre>';
print_r($_FILES);
echo '</pre>';

// 1.获取表单的基本数据
$info = $_POST;

// 2.保存上传头像
//   图片回再服务中单独储存
$file = $_FILES['photo'];
if ($file['error'] === 0) {
    $ext = explode('.', $file['name'])[1];
    $newName = rand(1000, 9999) . time() . '.' . $ext;
    $photo = './upload/' . $newName;
    move_uploaded_file($file['tmp_name'], $photo);
    // 将图片再服务中的地址添加到$info中
    $info['photo'] = $photo;
}
// echo '<pre>';
// print_r($info);
// echo '</pre>';


// 3.将学生的基本数据和头像保存到数据库 data.txt
// 3.1.先读取data.txt中json字符串
$str = file_get_contents('./data.txt');
var_dump($str);

// 3.2.将json字符串解码成二维数组
$arr = json_decode($str, true);
echo '<pre>';
print_r($arr);
echo '</pre>';

// 3.3.将info中个人信息，添加到二维数组中
$arr[] = $info;
echo '<pre>';
print_r($arr);
echo '</pre>';

// 3.4.将数组转成json字符串
$str = json_encode($arr);
echo $str;

// 3.5.将json字符串写入data.txt中
file_put_contents('./data.txt', $str);
