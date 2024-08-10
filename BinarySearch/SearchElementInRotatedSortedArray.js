// Search Element in a Rotated Sorted Array

// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.

// Example 1:
// Input Format: arr = [4,5,6,7,0,1,2,3], k = 0
// Result: 4
// Explanation: Here, the target is 0. We can see that 0 is present in the given rotated sorted array, nums. Thus, we get output as 4, which is the index at which 0 is present in the array.

// Example 2:
// Input Format: arr = [4,5,6,7,0,1,2], k = 3
// Result: -1
// Explanation: Here, the target is 3. Since 3 is not present in the given rotated sorted array. Thus, we get the output as -1.

const searchElement= function(arr,k){
let low=0;
let high= arr.length-1;
while(low<=high){
    let mid = Math.floor((low+high)/2)
    if(arr[mid]===k)return mid;
    if(arr[low]<=arr[mid]){
        if(arr[low]<=k && arr[mid]>=k){
            high=mid-1
        }
        else{
            low=mid+1
        }
    }
    else{
        if(arr[mid]<=arr[high]){
            if(arr[mid]<=k && k>=arr[high]){
                low=mid+1
            }
            else{
                high=mid-1
            }
        }
    }

}
return -1
}

console.log(searchElement([4,5,6,7,0,1,2,3],12))