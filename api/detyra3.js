// Detyra 3

function sum(num1, num2) {
    if (typeof num1 == "string" || typeof num2 == "string") {
        return 'Njera nga vlerat eshte tekst.';
    }else {
        return num1 + num2;
    }
}

let arr1 = [2,4,9,7,2];
let arr2 = [2,5,6,6,7];

let arr3 = [];

for(let i in arr1){
    arr3.push(sum(arr1[i], arr2[i]));
}

console.log(arr3);
