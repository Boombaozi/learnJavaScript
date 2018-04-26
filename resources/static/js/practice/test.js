'use strict';
var a=0;
var b= 'a';
while (true){
    a+=1;
    b=b+a;
    if(a==100){
        break;
    }

}
console.log("长度为"+b.length);
console.log(b);