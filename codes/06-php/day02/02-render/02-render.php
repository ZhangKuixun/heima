<!-- 
  
  php文件的内容可以和js html css混合写

  没有php标签，直接把内容返回给浏览器，浏览器自己解析
 -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    h1 {
      color:red;
      transform:rotate(30deg);
      transform-origin: left top;
    }
  </style>
  <script>
    alert('呵呵');
  </script>
</head>
<body>
  <h1>太过分了 <?php echo 2+3?> </h1>
  <p>pppp <?php echo '总有刁民想朕'?> pppp </p>
</body>
</html>