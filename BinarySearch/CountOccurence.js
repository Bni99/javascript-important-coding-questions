// Count Occurrences in Sorted Array

// Example 1:
// Input:
//  N = 7,  X = 3 , array[] = {2, 2 , 3 , 3 , 3 , 3 , 4}
// Output
// : 4
// Explanation:
//  3 is occurring 4 times in 
// the given array so it is our answer.

// Example 2:
// Input:
//  N = 8,  X = 2 , array[] = {1, 1, 2, 2, 2, 2, 2, 3}
// Output
// : 5
// Explanation:
//  2 is occurring 5 times in the given array so it is our answer.


//O(2LOG2N)

const getFirstOccurence = function(arr,target){
let low=0;
let high= arr.length-1;
let ans=-1
while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid]===target){
     ans = mid;
     high=mid-1
    }
    else if(arr[mid]>target){
        high=mid-1
    }
    else if(arr[mid]<target){
        low=mid+1
    }
}
return ans
}


const getLastOccurence = function(arr,target){
    let low=0;
    let high= arr.length-1;
    let ans=-1
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(arr[mid]===target){
         ans = mid;
         low=mid+1
        }
        else if(arr[mid]>target){
            high=mid-1
        }
        else if(arr[mid]<target){
            low=mid+1
        }
    }
    return ans
 }

const countOccurence = function(arr,target){
const firstOccurence = getFirstOccurence(arr,target)
const lastOccurence= getLastOccurence(arr,target)
console.log(firstOccurence,lastOccurence)
return lastOccurence-firstOccurence+1
}

console.log(countOccurence([2, 2 , 3 , 3 , 3 , 3 , 4],3))