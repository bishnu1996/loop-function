//WAP to find factorial of a number
let n = 5;
let f = 1;
// for(i = 1;i<=n; i++){ //checking for for loop
//      f = f * i;
// }
// console.log(f)

let i = 1
while(i<=n){
    f = f * i;
    i = i + 1;
}

console.log(f);


function factorial(num){
    if(num === 0){
        return 0;
    }else 
    if(num === 1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
let result = factorial(3);
console.log(result);