//JavaScript 的数组可以包含任意数据类型，并通过索引访问每个元素；

var arr=[1,2,3,4,5,'',null,true];

console.log(arr.length);
console.log(arr);

//直接可以给length赋值

arr.length=100;
console.log(arr.length);
console.log(arr);

arr.length=1;
console.log(arr.length);
console.log(arr);

//修改某个元素的值

arr[0]=110;
console.log(arr);

//索引超过了范围

arr[5]=110;
console.log(arr);

//indexof  lastindexof
console.log(""+arr.indexOf(110)+arr.lastIndexOf(110));

// slice 截取
arr=arr.slice(0,1);
console.log(arr);

// push  和 pop

arr.push('a','b');
console.log("push  "+arr);

arr.pop();
console.log("pop  "+arr);

// unshift 往头部添加元素    shift 删除第一个元素

arr.unshift("a","s");
console.log("unshift   "+arr);

arr.shift();
arr.shift();
console.log("shift    "+arr);

// sort 排序 直接修改当前arr

arr.push('ccc','aaa','bbb');
arr.shift();
arr.shift();
arr.sort();
console.log('sort    '+arr);
//  reverse  反转元素

arr.reverse();
console.log('reverse    '+arr);

// splice  它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：

arr.splice(1,1,'ggg');
console.log('splice    '+  arr);

arr.splice(1,2);
console.log('splice    '+  arr);

arr.splice(0,1);
console.log('splice' + arr.length);
console.log('splice    '+  arr);


//??? join 每个字符串之间加入连接的

var arr2=['1','2','3','4','5','6'];
arr2.join('sd');
console.log(arr2+'');






