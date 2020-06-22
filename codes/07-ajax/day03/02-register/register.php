<?php
// echo '<pre>';
// print_r($_POST);
// echo '</pre>';

// 获取前端数据，判断是否合理，如果合理注册成功，添加到数据库，不合理，注册失败
$info = [];
if (!empty($_POST['name'])) {
    // 注册成功
    $info = [
      "code"=>200,
      "msg"=>"注册成功"
    ];
} else {
    // 注册失败
    $info=[
      "code"=>100,
      "msg"=>"注册失败"
    ];
}
echo json_encode($info);
sleep(3);
