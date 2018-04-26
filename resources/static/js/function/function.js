//定义一个函数

function my(x) {
    if(x>0){
        return x;

    }else {
        return -x;
    }
}

var my2= function (x) {
    if(x>0){
        return x;
    }else {
        return -x;
    }
};
console.log(my(10));
console.log(my2(-9));
//无参返回 NaN
console.log(my2());


//对输入进行检查 并抛出异常；

function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

console.log(abs(2));


// arguments 关键字

// 利用arguments，你可以获得调用者传入的所有参数。
// 也就是说，即使函数不定义任何参数，还是可以拿到参数的值：

function abs2() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}
console.log(abs2());
console.log(abs2(10));
console.log(abs2(-9));


// 实际上arguments最常用于判断传入参数的个数。你可能会看到这样的写法：

// foo(a[, b], c)
// 接收2~3个参数，b是可选参数，如果只传2个参数，b默认为null：
function foo(a, b, c) {
    if (arguments.length === 2) {
        // 实际拿到的参数是a和b，c为undefined
        c = b; // 把b赋给c
        b = null; // b变为默认值
    }
    // ...
}