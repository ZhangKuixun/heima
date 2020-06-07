<?php
// 添加、删除、修改的逻辑基本一样，封成公共的方法
// 1.提取公共代码
// 2.变化部分暴露成参数
// 参数：sql语句
// 返回值：成功或者失败
function my_exec($sql)
{
    // 连接数据库
    $link = mysqli_connect('127.0.0.1', 'root', 'root', 'z_test');
    // 执行sql
    $result = mysqli_query($link, $sql);
    // 分析结果
    if ($result) {
        echo "执行成功";
    } else {
        echo "执行失败!";
    }
    // 关闭数据库
    mysqli_close($link);

    return $result;
}

$sql = "delete from stu where id = 6";
my_exec($sql);
