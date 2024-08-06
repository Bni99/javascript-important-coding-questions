// Problem Statement: Given a non-empty array of integers arr, every element appears twice except for one. Find that single one.
// Example 1:
// Input Format:
//  arr[] = {2,2,1}
// Result:
//  1
// Explanation:
//  In this array, only the element 1 appear once and so it is the answer.

// Example 2:
// Input Format:
//  arr[] = {4,1,2,1,2}
// Result:
//  4
// Explanation:
//  In this array, only element 4 appear once and the other elements appear twice. So, 4 is the answer.


//O(nlogn+n)
//O(n)

const bruteNumberThatAppearsOnce = function(arr){
    arr.sort((a,b)=>a-b)
    for(let i=0;i<arr.length;i++){
        if(i==0){
            if(arr[i]!==arr[i+1]){
                return arr[i]
           
            }
        }
        if(i===arr.length-1){
            if(arr[i]!==arr[i-1]){
                return arr[i]
            }
        }
        else{
        if(arr[i]!==arr[i+1]&& arr[i]!==arr[i-1]){
            return arr[i];
        }}
    }

}

console.log(bruteNumberThatAppearsOnce([4,1,2,1,2]))

//O(N)+O(N/2+1)
//O(N/2+1)

const betterNumberThatAppearsOnce = function(arr){
    const obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]])obj[arr[i]]=1
        else
        obj[arr[i]]++
    }
    for(let key in obj){
        if(obj[key]===1)return key
    }

}

console.log(betterNumberThatAppearsOnce([4,1,2,1,2]))


//O(N)
//O(1)

const optimalNumberThatAppearsOnce = function(arr){
    let result=0;
    for(let i=0;i<arr.length;i++){
    result=result^arr[i]
    }
    return result

}

console.log(optimalNumberThatAppearsOnce([4,1,2,1,2]))