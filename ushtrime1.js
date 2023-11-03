// const  sum  = require('./ushtrime.js');
// sum(1,4);


// let arr=[]

// for(let i=1; i<=10; i++){
//     arr.push(i)
// }
// console.log(arr);


// for(let i=1; i<=10; i++){
//     arr.unshift(i)
// }
// console.log(arr);


// for(let i=1; i<=10; i++){
//     if(i<6){
//         arr.push(i)
//     }else{
//         arr.unshift(i)
//     }
// }

// console.log(arr);





// for(let i in arr){
//     if(arr[i] ==3){
//         console.log(i);
//     }
// }




// function detyra1(a, b){
//     let shuma = a+b;
//     return shuma;
// }

// console.log(detyra1(10, 9));

function sum(num1, num2) {
    if (num1 === undefined || num2 === undefined) {
        return 'Please check the values.';
    } else {
        return num1 + num2;
    }
}
console.log(sum(6, 2));

module.exports =  sum ;