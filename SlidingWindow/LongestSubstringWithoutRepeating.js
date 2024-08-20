// Length of Longest Substring without any Repeating Character

// Problem Statement: Given a String, find the length of longest substring without any repeating character.

// Examples:

// Example 1:

// Input: s = ”abcabcbb”

// Output: 3

// Explanation: The answer is abc with length of 3.

// Example 2:

// Input: s = ”bbbbb”

// Output: 1

// Explanation: The answer is b with length of 1 units.

//O(N*N)

const bruteLongestSubstringWithoutRepeating = function(str){
    let maxLength=0;
    for(let i=0;i<str.length;i++){
        const hashMap = new Map()
        for(let j=i;j<str.length;j++){
            if(!hashMap.has(str[j])){
                hashMap.set(str[j],1)
            }else{
               maxLength= Math.max(maxLength,j-i)
               break;
            }
        }
    }
    return maxLength

}
console.log(bruteLongestSubstringWithoutRepeating('abcabcbb'))

//O(N)
const optimalLongestSubstringWithoutRepeating = function(str){
    let left =0;
    let right =0;
    let hashMap =new Map()
    let maxLength=0
    while(right<str.length){
        if(hashMap.has(str[right])){
            if(hashMap.get(str[right])>=left){
                left = hashMap.get(str[right])+1
            }   
        }

        maxLength= Math.max(maxLength,right-left+1)
        hashMap.set(str[right],right)
        right++
    }
    return maxLength
}
console.log(optimalLongestSubstringWithoutRepeating('cadbzabcd'))