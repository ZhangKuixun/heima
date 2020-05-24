<?php
/*
需求：把每个用上传的图片，都保存到upload目录下面
*/

$file = $_FILES['photo'];// 一维数组
echo '<pre>';
print_r($file);
echo '</pre>';

// 判断文件是否上传成功
if ($file['error'] === 0) {

    // 先获取后缀名
    $ext = explode('.', $file['name'])[1];

    // 随机生成新的文件名
    $newName = time() . rand(1000, 99999) . '.' . $ext;

    // 转移到新的文件名中
    move_uploaded_file($file['tmp_name'], './upload/' . $newName);
}
