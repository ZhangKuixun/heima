<?php
include_once './fn.php';
// 1.先读取数据库的全部数据
$sql = "select * from stu";
$arr = my_query($sql);

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/list.css">
</head>

<body>
    <h4>用户信息列表</h4>
    <a href="./01-add.html">添加新用户</a>
    <table>
        <tr>
            <th>用户名</th>
            <th>昵称</th>
            <th>性别</th>
            <th>年龄</th>
            <th>电话</th>
            <th>班级</th>
            <th>头像</th>
            <!-- <th>班级id</th> -->
            <th>操作</th>
        </tr>
        <!-- 2.动态渲染列表 -->
        <?php foreach ($arr as $k => $v) { ?>
          <tr>
              <td><?php echo $v['name'] ?></td>
              <td><?php echo $v['nickname'] ?></td>
              <td><?php echo $v['age']?></td>
              <td><?php echo $v['tel']?></td>
              <td><?php echo $v['sex']?></td>
              <td>黑马<?php echo $v['class'] ?></td>
              <td><img src="<?php echo $v['photo']?>"></td>
              <!-- <td><?php echo $v['id']?></td> -->
              <td>
                  <a href="./03-delete.php?id=<?php echo $v['id'] ?>">删除</a>
                  <a href="./04-detail.php?id=<?php echo $v['id'] ?>">详情</a>
                  <a href="#">编辑</a>
                </td>
          </tr>
        <?php } ?>
    </table>
</body>

</html>
