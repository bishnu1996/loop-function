//WAP to print fibonacci sequence
console.log("fabonacci series");
let n = 10;
let a = 0;
let b = 1;
console.log(a);
console.log(b);
for(let i = 0;i<n;i++){
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
    console.log(nextNumber);
}