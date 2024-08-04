//left rotate array by d places
//Problem Statement: Given an array of integers, rotating array of elements by k elements either left or right.
// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position .

// Example 2:
// Input: N = 6, array[] = {3,7,8,9,10,11} , k=3 , left
// Output: 9 10 11 3 7 8
// Explanation: Array is rotated to right by 3 position.

const bruteLeftRotateArrayByDPlaces = function (arr, k) {
  let elementsToBeDisplaced = arr.slice(0, k);
  for (let i = 0; i < arr.length - k; i++) {
    arr[i] = arr[i + k];
  }
  let index = 0;
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = elementsToBeDisplaced[index];
    index++;
  }
  return arr;
};

console.log(bruteLeftRotateArrayByDPlaces([1, 2, 3, 4, 5, 6, 7], 2));

const reverse = function (arr, start, end) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const optimalLeftRotateArrayByDPlaces = function (arr, k) {
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  console.log(arr);
};

console.log(optimalLeftRotateArrayByDPlaces([1, 2, 3, 4, 5, 6, 7], 2));
