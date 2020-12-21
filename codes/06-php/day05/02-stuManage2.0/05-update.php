<?php
include_once './fn.php';
// 1.前端用户点击编辑按钮，会将id传递给后台
// 2.后台获取前端传递id，根据id查询对应的数据，将数据填充在页面中，供用户修改
// 3.用户修改完成后，点击保存按钮，获取表单数据，提交给服务器进行更新
// 4.更新完成后，重新渲染列表页
$id = $_GET['id'];
$sql = "select stu.*,class.classname from stu join class on stu.classid = class.id where stu.id = $id";
$data = my_query($sql)[0];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/add.css">
</head>

<body>
    <form action="./06-save.php" method="post" enctype="multipart/form-data">
        <!-- 隐藏域 -->
        <!-- 就是一个普通的表单，只是看不见，用于向后台提交数据 -->
        <input type="hidden" name='id' value='<?php echo $data['id'] ?>'>
        姓名：<br>
        <input type="text" name="username" value="<?php echo $data['name'] ?>"><br> 昵称：
        <br>
        <input type="text" name="nickname" value="<?php echo $data['nickname'] ?>"><br> 年龄：
        <br>
        <input type="text" name="age" value="<?php echo $data['age'] ?>"><br> 电话：
        <br>
        <input type="text" name="tel" value="<?php echo $data['tel'] ?>"><br> 性别：
        <br>
        <input type="radio" name="sex" value="m" <?php echo $data['sex'] == 'm' ? 'checked' : '' ?>>男
        <input type="radio" name="sex" value="f" <?php echo $data['sex'] == 'f' ? 'checked' : '' ?>>女
        <br> 班级：<br />
        <select name="class">
            <option value="1" <?php echo $data['classid'] == 1 ? 'selected' : '' ?>>黑马1期</option>
            <option value="2" <?php echo $data['classid'] == 2 ? 'selected' : '' ?>>黑马2期</option>
            <option value="3" <?php echo $data['classid'] == 3 ? 'selected' : '' ?>>黑马3期</option>
            <option value="3" <?php echo $data['classid'] == 4 ? 'selected' : '' ?>>黑马4期</option>
        </select>
        <br> 头像：<br />
        <img src="<?php echo $data['photo'] ?>" width='60px'>
        <br>
        <input type="file" name="photo">
        <input type="submit" value="保存修改">
    </form>
</body>

</html>