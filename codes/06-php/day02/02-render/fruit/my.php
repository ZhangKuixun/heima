<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class='header'>传智网上水果超市</div>
  <div class='container'>
    <p>
      <a href="#">水果</a>
      <a href="#">蔬菜</a>
      <a href="#">干果</a>
    </p>
    <!-- 
      inlcude 引入php文件
      引入数据库的水果数据
     
      类似于js中的<script src='test.js'>
     -->
    <?php include 'fruit.php'?>
    <ul>
      <?php foreach ($arr as $key => $value) {?>
        <li>
          <img src="<?php echo $value['path'] ?>">
          <a href="#"><?php echo $value['name'] ?></a>
        </li>
      <?php } ?>
    </ul>
  </div>
  <div class='footer'>传智播客 版权所有</div>
</body>
</html>