
//  使用 if() {..} else {...} 进行条件判断

var age= 20;

if(age>10){
    console.log("age>10");

}else {
    console.log("age<=10");
}

// 循环

var x=0;
for(var i=0;i<=1000;i++){
    x=x+i;
}
console.log("x ="+x);


//遍历数组

var arr=[1,2,3,4,5,6];
console.log("遍历数组");
for(var i=0;i<arr.length;i++){

    console.log(arr[i]);
}
