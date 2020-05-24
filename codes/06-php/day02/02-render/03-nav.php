<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="nav-style.css">
</head>
<body>
  <?php
    // 模拟数据库
    $nav = ['新闻1','新闻2','新闻3','新闻4','新闻5'];
    // 导航栏的数据，根据数据库的数据动态渲染上去
  ?>
  <ul>
    <?php
      foreach ($nav as $key => $value) {
          $str .= '<li>' . $value . '</li>';
          // $str += '<li>' + $value + '</li>';
      }
      echo $str;
    ?>
  </ul>
</body>
</html>