//WAP to reverse the natural number
let n = 1234,rev = 0;
for(;n>0;){
    let rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n/10);
}
console.log(rev)