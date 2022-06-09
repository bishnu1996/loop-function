//WAP to find the duplicate value in given array
const arry = [4,5,6,7,4,5,6,8,9,10,11];
repeatNunber = [];
function repeat(arry){
    for(let i of arry){
        for(let j = 0;j<=arry.length-1;j++){
            if(arry[i] !== arry[j]){
                return repeatNunber.push(arry[j])
         
            }
        }
    }
}
let result = repeat([4,5,6,7,4,5,6,8,9,10,11]);
console.log(result);

// const arry = [1, 2, 1, 3, 4, 3, 5];

// const toFindDuplicates = arry => arry.filter((item,index)=>arry.indexOf(item) !== index)
// const duplicateElementa = toFindDuplicates(arry);
// console.log(duplicateElementa);


// Output: [1, 3]