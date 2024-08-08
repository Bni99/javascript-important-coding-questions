// Two Sum : Check if a pair with given sum exists in Array

// Problem Statement: Given an array of integers arr[] and an integer target.

// 1st variant: Return YES if there exist two numbers such that their sum is equal to the target. Otherwise, return NO.

// 2nd variant: Return indices of the two numbers such that their sum is equal to the target. Otherwise, we will return {-1, -1}.

// Note: You are not allowed to use the same element twice. Example: If the target is equal to 6 and num[1] = 3, then nums[1] + nums[1] = target is not a solution.

// Examples:

// Example 1:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 14
// Result: YES (for 1st variant)
//        [1, 3] (for 2nd variant)
// Explanation: arr[1] + arr[3] = 14. So, the answer is “YES” for the first variant and [1, 3] for 2nd variant.

// Example 2:
// Input Format: N = 5, arr[] = {2,6,5,8,11}, target = 15
// Result: NO (for 1st variant)
// 	[-1, -1] (for 2nd variant)
// Explanation: There exist no such two numbers whose sum is equal to the target.

//O(N2)
//O(1)
const bruteTwoSum = function(arr,target){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                return [i,j]
            }
        }
    }
    return[-1,-1]
}
console.log(bruteTwoSum([2,6,5,8,11],13))

//0(N)
//O(N)

const betterTwoSum = function(arr,target){

    const myMap = new Map()
    for(let i=0;i<arr.length;i++){
        let remaining = target-arr[i]
        if(myMap.has(remaining)){
            return [myMap.get(remaining),i]
        }
        myMap.set(arr[i],i)
    }
    return [-1,-1]
}
console.log(betterTwoSum([2,6,5,8,11],13))
