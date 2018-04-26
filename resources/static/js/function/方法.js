
//对象内部声明一个方法
var xiao={
    name:'小明',
    brith:1997,
    age:function f() {
        var y=2018;
        return y-this.brith;
    }

}
console.log(xiao.age());

//把方法写在外面
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
console.log(xiaoming.age());
console.log(getAge());
