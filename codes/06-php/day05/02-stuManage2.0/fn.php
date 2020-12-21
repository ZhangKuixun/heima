<?php

define("HOST", "127.0.0.1");
define("USER", "root");
define("PWD", "root");
define('DB', 'z_stu');


// 添加、删除、修改的逻辑基本一样，封成公共的方法
// 1.提取公共代码
// 2.变化部分暴露成参数
// 参数：sql语句
// 返回值：成功或者失败
function my_exec($sql)
{
    // 连接数据库
    $link = mysqli_connect(HOST, USER, PWD, DB);
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


// 封装执行查询语句方法
// 参数：sql
// 返回值：失败 false   成功：二维数组
function my_query($sql)
{
    // 连接数据库
    $link = mysqli_connect(HOST, USER, PWD, DB);

    // 执行sql
    $result = mysqli_query($link, $sql);

    $num = mysqli_num_rows($result);
    // 分析结果
    if (!$result || $num === 0) {
        return false;
    }

    // 获取数据
    $data = [];
    // 遍历数据库
    for ($i = 0; $i < $num; $i++) {
        $data[] = mysqli_fetch_assoc($result);
    }

    // 关闭数据库
    mysqli_close($link);

    return $data;
}
