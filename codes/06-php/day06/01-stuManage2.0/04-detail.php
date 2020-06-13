<?php
  include_once './fn.php';
  // 根据前端传递的id,显示对应学生信息
  // 1.前端点击详情按钮，传递id给后台

  // 2.后台获取前端传递id，根据id获取对应学生信息
  $id = $_GET['id'];
  $sql = "select stu.*,class.classname from stu join class on stu.classid = class.id where stu.id = $id";
  $data = my_query($sql)[0];

  // 3.将获取的学生信息动态渲染到详情页
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>详情</title>
    <link rel="stylesheet" href="./css/table.css">
</head>

<body>
    <table>
        <tr>
            <th>序号</th>
            <td><?php echo $data['id'] ?></td>
        </tr>
        <tr>
            <th>姓名</th>
            <td><?php echo $data['name'] ?></td>
        </tr>
        <tr>
            <th>昵称</th>
            <td><?php echo $data['nickname'] ?></td>
        </tr>
        <tr>
            <th>年龄</th>
            <td><?php echo $data['age'] ?></td>
        </tr>
        <tr>
            <th>电话</th>
            <td><?php echo $data['tel'] ?></td>
        </tr>
        <tr>
            <th>性别</th>
            <td><?php echo $data['sex'] ?></td>
        </tr>
        <tr>
            <th>班级</th>
            <td><?php echo $data['classname'] ?></td>
        </tr>
        <tr>
            <th>图像</th>
            <td><img src="<?php echo $data['photo'] ?>"></td>
        </tr>
        <tr>
            <th></th>
            <td><a href="./02-list.php">返回</a></td>
        </tr>
    </table>
</body>

</html>