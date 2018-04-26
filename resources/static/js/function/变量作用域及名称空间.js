// 全局作用域
// 不在任何函数内定义的变量就具有全局作用域。实际上，JavaScript默认有一个全局对象window，全局作用域的变量实际上被绑定到window的一个属性：

'use strict';

var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'
// 因此，直接访问全局变量course和访问window.course是完全一样的。

// 你可能猜到了，由于函数定义有两种方式，以变量方式var foo = function () {}定义的函数实际上也是一个全局变量，因此，顶层函数的定义也被视为一个全局变量，并绑定到window对象：

'use strict';

function foo() {
    alert('foo');
}

foo(); // 直接调用foo()
window.foo(); // 通过window.foo()调用
// 进一步大胆地猜测，我们每次直接调用的alert()函数其实也是window的一个变量：

'use strict';

//window.alert('调用window.alert()');
// 把alert保存到另一个变量:
var old_alert = window.alert;
// 给alert赋一个新函数:
window.alert = function () {}

console.log("无法使用alert了")









// 名字空间
// 全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。

// 减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如：

// 唯一的全局变量MYAPP:
var MYAPP = {};
var My={};
// 其他变量:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// 其他函数:
MYAPP.foo = function () {
    return 'foo';
};

my.add=function () {
    console.log("hhhh");
    return "sss";
}


add;
// 把自己的代码全部放入唯一的名字空间MYAPP中，会大大减少全局变量冲突的可能。

// 许多著名的JavaScript库都是这么干的：jQuery，YUI，underscore等等。