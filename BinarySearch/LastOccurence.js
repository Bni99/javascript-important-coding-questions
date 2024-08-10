// Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.

// Note: Consider 0 based indexing

// Examples:

// Example 1:
// Input: N = 7, target=13, array[] = {3,4,13,13,13,20,40}
// Output: 4
// Explanation: As the target value is 13 , it appears for the first time at index number 2.

// Example 2:
// Input: N = 7, target=60, array[] = {3,4,13,13,13,20,40}
// Output: -1
// Explanation: Target value 60 is not present in the array 

//O(log2N)

const lastOccurence = function(arr,target){
    let high=arr.length;
    let low=0
    let ans = -1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]===target){
          ans=mid
          low=mid+1
        }
        else if(arr[mid]<target){
            low=mid+1
        }
        else if(arr[mid]>target){
            high=mid-1
        }
    }
    return ans
}
console.log(lastOccurence([3,4,13,13,13,20,40],13))