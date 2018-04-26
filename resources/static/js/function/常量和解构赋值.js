const PI=3.14;

console.log(PI);



//解构赋值
// 解构赋值
// 从ES6开始，JavaScript引入了解构赋值，可以同时对一组变量进行赋值。

// 什么是解构赋值？我们先看看传统的做法，如何把一个数组的元素分别赋值给几个变量：

var array = ['hello', 'JavaScript', 'ES6'];
var x = array[0];
var y = array[1];
var z = array[2];
// 现在，在ES6中，可以使用解构赋值，直接对多个变量同时赋值：

'use strict';

// 如果浏览器支持解构赋值就不会报错:
var [x, y, z] = ['hello', 'JavaScript', 'ES6'];


'use strict';

var person = {
    name: '小明',
    age: 20,
    gender: 'male',
    passport: 'G-12345678',
    school: 'No.4 middle school'
};
var {name, age, passport} = person;

// name, age, passport分别被赋值为对应属性:
console.log('name = ' + name + ', age = ' + age + ', passport = ' + passport);


// 使用场景
// 解构赋值在很多时候可以大大简化代码。例如，交换两个变量x和y的值，可以这么写，不再需要临时变量：

var x=1, y=2;
[x, y] = [y, x];

