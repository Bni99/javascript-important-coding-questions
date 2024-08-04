// Problem Statement: Given an array that contains only 1 and 0 return the count of maximum consecutive ones in the array.

// Example 1:

// Input: prices = {1, 1, 0, 1, 1, 1}

// Output: 3

// Explanation: There are two consecutive 1’s and three consecutive 1’s in the array out of which maximum is 3.

// Input: prices = {1, 0, 1, 1, 0, 1} 

// Output: 2

// Explanation: There are two consecutive 1's in the array. 

//O(N)
//Its the optimal solution only

const bruteMaximumConsecutiveOnes = function(arr){
    let maximum =0;
    let counter=0
    for(let i=0;i<arr.length;i++){
    if(arr[i]===1){
    counter++
    }
     if(arr[i]===0 || i===arr.length-1){
    if(counter>maximum){
        maximum=counter;
    }
    counter=0
    }
    }
    return maximum
}
console.log(bruteMaximumConsecutiveOnes([1, 1, 0, 1, 1, 1]))