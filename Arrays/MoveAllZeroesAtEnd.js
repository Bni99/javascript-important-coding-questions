// Problem Statement: You are given an array of integers, your task is to move all the zeros in the array to the end of the array and move non-negative integers to the front by maintaining their order.
// Example 1:
// Input:
//  1 ,0 ,2 ,3 ,0 ,4 ,0 ,1
// Output:
//  1 ,2 ,3 ,4 ,1 ,0 ,0 ,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

// Example 2:
// Input:
//  1,2,0,1,0,4,0
// Output:
//  1,2,1,4,0,0,0
// Explanation:
//  All the zeros are moved to the end and non-negative integers are moved to front by maintaining order

//O(2N)
//Space complexity O(X)--> x being the non zero numbers which in worst case is O(N)

const bruteMoveAllZeroesAtEnd = function (arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      newArray.push(arr[i]);
    }
  }
  for (let j = 0; j < newArray.length; j++) {
    arr[j] = newArray[j];
  }
  for (let j = newArray.length; j < arr.length; j++) {
    arr[j] = 0;
  }

  return arr;
};

console.log(bruteMoveAllZeroesAtEnd([1, 0, 2, 3, 0, 4, 0, 1]));

const optimalMoveAllZeroesAtEnd = function (arr) {
  let pointer = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      pointer = i;
      break;
    }
  }
  for (let i = pointer + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[pointer]] = [arr[pointer], arr[i]];
      pointer++;
    }
  }
  return arr;
};
console.log(optimalMoveAllZeroesAtEnd([1, 0, 2, 3, 0, 4, 0, 1]));
