<?php
// require 'head.html';
// require 'head.html';
// require 'head.html';

// require_once 'head.html';
// require_once 'head.html';
// require_once 'head.html';


// require和include区别：
// include引入的文件不存在，后面的代码会执行
// require引入的文件不存在，后面的代码不执行
include 'head111.html';
echo 'aaa1';

require 'head111.html';
echo 'aaa2';
