<?php
// 数组

// 索引数组
// $arr = [1, 2, 3];

// 只能打印简单类型
// echo $aar;

// 输出复杂类型的数据
// print_r( $arr );

// 获取数组的长度
// var_dump( $arr );

// 获取数组的长度
// count();
// echo count( $arr );

// 关联数组
// 类似于js的对象

// $info = [
//     'name'=>'zs',
//     'age'=>18
// ];
// $info['name'] = 'abc';
// print_r( $info );
// echo $info['name'];

// 二维数组
// 数组中的元素又是一个一维数组
// $arr = [[1, 2, 3, 4], [4, 5, 52, 6], [7, 8, 9, 0]];
// echo $arr[1][2];
$info = [
    [
        'name'=>'zs',
        'age'=>18,
        'sex'=>'m'
    ],
    [
        'name'=>'dddddd',
        'age'=>18,
        'sex'=>'m'
    ],
    [
        'name'=>'fffff',
        'age'=>18,
        'sex'=>'m'
    ],
];
echo $info[1]['name'];
