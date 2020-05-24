<?php
/*
变量作用存储数据
命名：变量必须以$开头，后面跟变量名，变量名的命名规则同js命名规则
php中变量必须先赋值，在使用
*/
// $name = 'zs';
// echo $name;

// $sex = 'afdssa';
// echo $sex;

/*
变量相关函数
unset();
删除变量 delete
isset();
判断变量是否赋值，
如果变量没有赋值，或者值为null，都没有赋值
empty();
判断变量是否为空，
在php中，如果变量没有值，这值为null, false, '', [], 0, '0', 都为空，这些虽然有值，但没有实际意义，为空
*/

// 删除
$name = 'zs';
unset($name);
echo $name;

// 判断是否赋值
// $test;
$test = null;
if (isset($test)) {// false
    echo $test;
}

// 是否为空
$test = false;
if (empty($test)) {// true
    echo 'empty!';
} else {
    echo 'not empty!';
}
