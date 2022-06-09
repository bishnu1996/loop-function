let n = 45345;
let rev = 0;
let count = 0
while(n > 0){
        n = Math.floor(n/10);
        count = count+1;
}
console.log(count);