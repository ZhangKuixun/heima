<?php
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// echo '<pre>';
// print_r($_FILES);
// echo '</pre>';

// 转移文件位置
move_uploaded_file($_FILES['photo']['tmp_name'], './test.png');

echo '<img src="./test.png"/>';
