/**
 * action:
 *  1.是行为的抽象,要做的每一件事情就是action
 *  2.action是一个对象,代码中用"{}"表示
 *  3.每个action必须有一个属性:type属性,它是action的类型
 *  4.type属性的值是一个字符串,采用全大写字母表示,多个单词使用"_"连接
 */

import React from 'react';
import ReactDOM from 'react-dom';


const addTodo = {
    type: 'ADD_TODO'
}