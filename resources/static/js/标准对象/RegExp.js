//获取当前时间

var now=new Date();
console.log(now.getDay());
console.log(now.getDate());
console.log(now);

//创建一个日期

var d = new Date(2015, 5, 19, 21, 15, 30, 123);
console.log(d); // Fri Jun 19 2015 20:15:30 GMT+0800 (CST)

// 第二种创建一个指定日期和时间的方法是解析一个符合ISO 8601格式的字符串：

var d = Date.parse('2015-06-24T19:49:22.875+08:00');
d; // 1435146562875
// 但它返回的不是Date对象，而是一个时间戳。不过有时间戳就可以很容易地把它转换为一个Date：

var d = new Date(1435146562875);
d; // Wed Jun 24 2015 19:49:22 GMT+0800 (CST)
d.getMonth(); // 5



// 时区
// Date对象表示的时间总是按浏览器所在时区显示的，不过我们既可以显示本地时间，也可以显示调整后的UTC时间：

var ddd = new Date();
console.log(ddd.toLocaleString()); // '2015/6/24 下午7:49:22'，本地时间（北京时区+8:00），显示的字符串与操作系统设定的格式有关
console.log(ddd.toUTCString()); // 'Wed, 24 Jun 2015 11:49:
// 22 GMT'，UTC时间，与本地时间相差8小时

//获取时间戳

if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}
