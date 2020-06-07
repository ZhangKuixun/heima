<?php
$name = '张三丰';
$age = 145;
$sex = '男';

// 1.通过服务器连接数据库
$link = mysqli_connect('127.0.0.1', 'root', 'root', 'z_test');

// 2.准备sql语句
// 如果sql中的变量是字符串，必须加单引号
// sql语句引号采用外双内单
$sql = "insert into stu (name, age, sex) value ('$name', $age, '$sex')";
// echo $sql;

// 3.将sql语句传递给数据库执行
$reslut = mysqli_query($link, $sql);
// var_dump($reslut);

// 4.分析执行结果
if ($reslut) {
    echo '操作成功';
} else {
    echo '操作失败';
}

// 5.关闭数据库的连接
mysqli_close($link);
