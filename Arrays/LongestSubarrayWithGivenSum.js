// Longest Subarray with given Sum K(Positives)

// Problem Statement: Given an array and a sum k, we need to print the length of the longest subarray that sums to k.

// Example 1:
// Input Format: N = 3, k = 5, array[] = {2,3,5}
// Result: 2
// Explanation: The longest subarray with sum 5 is {2, 3}. And its length is 2.

// Example 2:
// Input Format: N = 5, k = 10, array[] = {2,3,5,1,9}
// Result: 3
// Explanation: The longest subarray with sum 10 is {2, 3, 5}. And its length is 3.

//O(N3)
//O(1)

const bruteLongestSubArrayWithGivenSum = function(arr,num){
    let maxLength=0
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum=0;
            for(let k=i;k<=j;k++){
             sum=sum+arr[j]
             if(sum===num && maxLength<(j-i+1)){
              maxLength=j-i+1
             }
            
            }
        }
    }
    
    return maxLength
}
console.log(bruteLongestSubArrayWithGivenSum([2,3,5,1,9],10))

//O(N2)
const betterLongestSubArrayWithGivenSum = function(arr,num){
    let max=0;
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum = sum+arr[j]
            if(sum===num && max<(j-i)+1){
               max=j-i+1
            }
        }
    }
    return max

}
console.log(betterLongestSubArrayWithGivenSum([2,3,5,1,9],10))

//This one is the optimal approach when the array have zeroes negative and positives
//SC - O(N)
const betterTwoLongestSubArrayWithGivenSum= function(arr,k){
let sum=0;
let maxLength=0;
const myMap = new Map();
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
    if(sum===k){
        maxLength = Math.max(i+1,maxLength)
    }
    let remaining = sum-k;
    if(myMap.has(remaining)){
        let len = i-myMap.get(remaining)
        maxLength=Math.max(maxLength,len)
    }
    if(!myMap.has(sum))
    {myMap[sum]=i}
}
return maxLength

}
console.log(betterTwoLongestSubArrayWithGivenSum([2,3,5,1,9],10))





function getLongestSubarray(a, k) {
    let n = a.length; // size of the array

    let left = 0, right = 0; // 2 pointers
    let sum = a[0];
    let maxLen = 0;
    while (right < n) {
        // if sum > k, reduce the subarray from left
        // until sum becomes less or equal to k
        while (left <= right && sum > k) {
            sum -= a[left];
            left++;
        }

        // if sum = k, update the maxLen i.e. answer
        if (sum === k) {
            maxLen = Math.max(maxLen, right - left + 1);
        }

        // Move forward the right pointer
        right++;
        if (right < n) sum += a[right];
    }

    return maxLen;
}

let a = [2, 3, 5, 1, 9];
let k = 10;
let len = getLongestSubarray(a, k);
console.log("The length of the longest subarray is:", len);