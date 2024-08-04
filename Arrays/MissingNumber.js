// Find the missing number in an array

// Problem Statement: Given an integer N and an array of size N-1 containing N-1 numbers between 1 to N. Find the number(between 1 to N), that is not present in the given array.

// Example 1:
// Input Format:
//  N = 5, array[] = {1,2,4,5}
// Result:
//  3
// Explanation:
// In the given array, number 3 is missing. So, 3 is the answer.

// Example 2:
// Input Format:
//  N = 3, array[] = {1,3}
// Result:
//  2
// Explanation:
// In the given array, number 2 is missing. So, 2 is the answer.

//O(N2)
//O(1)

const bruteFindMissingNumber = function (arr, n) {
  for (let i = 1; i < n; i++) {
    let flag = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) {
        flag = 1;
        break;
      }
    }
    if (flag === 0) {
      return i;
    }
  }
};

console.log(bruteFindMissingNumber([1, 2, 4, 5], 5));
