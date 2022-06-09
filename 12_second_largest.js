//WAP to find the second largest number in an array
const arr = [4,5,55,9,4,11,33,12];
fistLargest = arr[0];
secondLargest = arr[1];
let temp;
for(i = 0;i<=arr.length-1;i++){
    for(j = i+1;j<=arr.length;j++){
        if(arr[i]<arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
    }
}
console.log(arr[1]);