<?php
$str = file_get_contents('./data.txt');
echo $str;

$info = json_decode($str, true);

echo '<pre>';
print_r($info);
echo '</pre>';
