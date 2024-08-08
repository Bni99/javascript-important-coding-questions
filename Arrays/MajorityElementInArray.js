// Find the Majority Element that occurs more than N/2 times

// Problem Statement: Given an array of N integers, write a program to return an element that occurs more than N/2 times in the given array. You may consider that such an element always exists in the array.

// Example 1:
// Input Format
// : N = 3, nums[] = {3,2,3}
// Result
// : 3
// Explanation
// : When we just count the occurrences of each number and compare with half of the size of the array, you will get 3 for the above solution. 

// Example 2:
// Input Format:
//   N = 7, nums[] = {2,2,1,1,1,2,2}

// Result
// : 2

// Explanation
// : After counting the number of times each element appears and comparing it with half of array size, we get 2 as result.

// Example 3:
// Input Format:
//   N = 10, nums[] = {4,4,2,4,3,4,4,3,2,4}

// Result
// : 4

//O(N2)
//O(1)

const bruteMajorityElementInArray = function(arr){
    let n=Math.floor(arr.length/2)
    for(let i=0;i<arr.length;i++){
        let counter=0
        for(let j=0;j<arr.length;j++){
            if(arr[i]===arr[j])counter++;
        }
        if(counter>n)return arr[i]
    }
    return -1

}

console.log(bruteMajorityElementInArray([2,2,1,1,1,2,2]))

//O(N)
//O(N/2)

// Insertion (average): O(1)
// Lookup (average): O(1)
// Deletion (average): O(1)
// Worst Case:

// Insertion (worst): O(n), where n is the size of the hash map. This occurs when there are many hash collisions, leading to linear probing or other collision resolution strategies that may involve traversing the entire hash map.
// Lookup and Deletion (worst): O(n), for the same reason as insertion.

const betterMajorityElementInArray=function(arr){
    let myMap = new Map();
    for(let i=0;i<arr.length;i++){
        if(!myMap.has(arr[i])){
            myMap.set(arr[i],1)
        }
        else{
        let currentValue = myMap.get(arr[i])
        myMap.set(arr[i],currentValue+1)}
    }
    for(let [key,value] of myMap){
        if(value>Math.floor(arr.length/2)){
            return key
        }
    }
    return -1

}
console.log(betterMajorityElementInArray([2,2,1,1,1,2,2]))


const optimalMajorityElementInArray = function(arr){
    let n = arr.length;
    let cnt = 0; // Count
    let el; // Element

    // Applying the algorithm
    for (let i = 0; i < n; i++) {
        if (cnt === 0) {
            cnt = 1;
            el = arr[i];
        } else if (el === arr[i]) {
            cnt++;
        } else {
            cnt--;
        }
    }

   return el

}
console.log(optimalMajorityElementInArray([2,2,1,1,1,2,2]))
