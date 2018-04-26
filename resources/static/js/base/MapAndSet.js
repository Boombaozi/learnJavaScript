
// map
'use strict';
var m = new Map();
var s = new Set();

//新建一个map
var mapppp= new Map([['2',22],['3',24]]);
m=new Map([['a',22] ,['b',45],['c',88]]);


console.log(mapppp.get('2'));
console.log(m.get('a'));


// 对map的基本操作

var mm=new Map();
m.set('A',23);
console.log(m.has('A'));
console.log(m.get('A'));
console.log(m.delete('A'));
console.log(m.get('A'));

// set的基本操作

var settt=new Set();
settt.add(1);
settt.add(2);
settt.add(1);
console.log(settt);
settt.delete(1);
settt.delete(2);
console.log(settt);
