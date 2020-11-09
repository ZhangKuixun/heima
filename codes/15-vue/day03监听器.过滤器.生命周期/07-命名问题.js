let xxx = 'sex';

let obj = {
    'mg-name': 'zs', // 不是数字 字母 _ \ $，用''包着
    [xxx]: '男' // 想读取xxx的值用[]
}


/* 

'' "" ``(反引号)
模板字符串``

<div><p></p></div>
*/
let name = '春'
let str2 = `<div><p>${name}</p></div>`
console.log(str2);