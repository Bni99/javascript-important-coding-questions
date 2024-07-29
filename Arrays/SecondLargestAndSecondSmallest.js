// Given an array, find the second smallest and second largest element in the array. Print ‘-1’ in the event that either of them doesn’t exist.
// Example 1:
// Input:
//  [1,2,4,7,7,5]
// Output:
//  Second Smallest : 2
// 	Second Largest : 5
// Explanation:
//  The elements are as follows 1,2,3,5,7,7 and hence second largest of these is 5 and second smallest is 2

// Example 2:
// Input:
//  [1]
// Output:
//  Second Smallest : -1
// 	Second Largest : -1
// Explanation:
//  Since there is only one element in the array, it is the largest and smallest element present in the array. There is no second largest or second smallest element present.

//O(N LOG N)

const bruteSecondLargest = function (arr) {
  arr.sort((a, b) => a - b);
  let largest = arr[arr.length - 1];
  let secondLargest = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] !== largest) {
      secondLargest = arr[i];
      break;
    }
  }
  return secondLargest;
};

console.log(bruteSecondLargest([11, 1, 13, 2, 3, 4, 6, 75]));

const secondLargest = function (arr) {
  let maximum = -1;
  let secondMaximum = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maximum) {
      secondMaximum = maximum;
      maximum = arr[i];
    }
    if (arr[i] > secondMaximum && arr[i] < maximum) {
      secondMaximum = arr[i];
    }
  }
  return secondMaximum;
};
console.log(secondLargest([11, 1, 13, 15, 2, 3, 4, 6, 75]));
