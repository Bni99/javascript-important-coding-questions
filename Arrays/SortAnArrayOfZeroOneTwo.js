// Problem Statement: Given an array consisting of only 0s, 1s, and 2s. Write a program to in-place sort the array without using inbuilt sort functions. ( Expected: Single pass-O(N) and constant space)
// Input:
//  nums = [2,0,2,1,1,0]
// Output
// : [0,0,1,1,2,2]

// Input:
//  nums = [2,0,1]
// Output:
//  [0,1,2]

// Input:
//  nums = [0]
// Output:
//  [0]

//nlogn
//1
const bruteSortAnArray= function(arr){
    return arr.sort((a,b)=>a-b)
}
console.log(bruteSortAnArray([2,0,2,1,1,0]))

//n
//O(1)

const betterSortAnArray = function(arr){
    let c1=0;
    let c2=0;
    let c3=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]===0)c1++
        if(arr[i]===1)c2++
        if(arr[i]===2)c3++
    }
    for(let i=0;i<c1;i++){arr[i]=0}
    for(let i=c1;i<c1+c2;i++){arr[i]=1}
    for(let i=c1+c2;i<arr.length;i++){arr[i]=2}
    return arr
}
console.log(bruteSortAnArray([2,0,2,1,1,0]))