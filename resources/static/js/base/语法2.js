// 数组
[1,2,3,'hello',5,3];

//使用函数创建

new Array(1,2,3);

//数组可以通过索引访问
var arr = [1, 2, 3.14, 'Hello', null, true];
arr[0]; // 返回索引为0的元素，即1
arr[5]; // 返回索引为5的元素，即true
arr[6]; // 索引超出了范围，返回undefined



// 对象
// JavaScript的对象是一组由键-值组成的无序集合，例如：

var person = {
    name: 'Bob',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Beijing',
    hasCar: true,
    zipcode: null
};

// 要获取一个对象的属性，我们用对象变量.属性名的方式：

person.name; // 'Bob'
person.zipcode; // null


// 变量
// 变量的概念基本上和初中代数的方程变量是一致的，只是在计算机程序中，变量不仅可以是数字，还可以是任意数据类型。
//
// 变量在JavaScript中就是用一个变量名表示，变量名是大小写英文、数字、$和_的组合，
// 且不能用数字开头。变量名也不能是JavaScript的关键字，如if、while等。申明一个变量用var语句，比如：

var a; // 申明了变量a，此时a的值为undefined
var $b = 1; // 申明了变量$b，同时给$b赋值，此时$b的值为1
var s_007 = '007'; // s_007是一个字符串
var Answer = true; // Answer是一个布尔值true
var t = null; // t的值是null

console.log(x);


// 启用strict模式的方法是在JavaScript代码的第一行写上：

'use strict';