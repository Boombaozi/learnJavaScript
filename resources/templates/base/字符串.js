// 模板字符串
// 要把多个字符串连接起来，可以用+号连接：

var name = '小明';
var age = 20;
var message = '你好, ' + name + ', 你今年' + age + '岁了!';

console.log(message+"   "+age+"   "+name);


var s = 'Hello, world!';
s.length; // 13
// 要获取字符串某个指定位置的字符，使用类似Array的下标操作，索引号从0开始：

var s = 'Hello, world!';

s[0]; // 'H'
s[6]; // ' '
s[7]; // 'w'
s[12]; // '!'
s[13]; // undefined 超出范围的索引不会报错，但一律返回undefined


// 需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：

var s = 'Test';
s[0] = 'X';
console.log(s); // s仍然为'Test'


// toUpperCase
// toUpperCase()把一个字符串全部变为大写：

var s = 'Hello';
s.toUpperCase(); // 返回'HELLO'
// toLowerCase
// toLowerCase()把一个字符串全部变为小写：

var s = 'Hello';
var lower = s.toLowerCase(); // 返回'hello'并赋值给变量lower
lower; // 'hello'
// indexOf
// indexOf()会搜索指定字符串出现的位置：

var s = 'hello, world';
s.indexOf('world'); // 返回7
s.indexOf('World'); // 没有找到指定的子串，返回-1
// substring
// substring()返回指定索引区间的子串：

var s = 'hello, world'
s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
s.substring(7); // 从索引7开始到结束，返回'world'