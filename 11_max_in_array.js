//WAP to find the largest number in an array 
const arr = [4,5,55,9,4,11,33,12];
let largestNumber = arr[0];
for(i = 1;i<=arr.length;i++){
    if(arr[i]>largestNumber){
        largestNumber = arr[i];
    }
    
}
console.log(largestNumber);

