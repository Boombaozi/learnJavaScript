
//声明一个对象


var xiaoming={
    name:'小明',
    weight:65,
    height:1.70,
};

console.log(xiaoming.name+"   "+xiaoming.height+"   "+xiaoming.weight);


//属性名不是有效变量,如果有特殊字符，必须用''括起来

var xiao={
    name:'小子',
    'a-b':'sdsd',
    // a-b: 'sds'
};

console.log(xiao.name);
console.log(xiao['a-b']);
//访问不存在的属性，返回udefined;
console.log(xiao.age);

// 新增和删除属性
delete xiao.name;
xiao.age=18;
console.log(xiao.age);

//查看是否含有某个属性

console.log('name' in xiao);
console.log('age' in xiao);

//也可能是该对象继承的

console.log('toString' in xiao);

