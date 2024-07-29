//Problem Statement: Given an integer array sorted in non-decreasing order, remove the duplicates in place such that each unique element appears only once. The relative order of the elements should be kept the same.
// If there are k elements after removing the duplicates, then the first k elements of the array should hold the final result. It does not matter what you leave beyond the first k elements.
// Example 1:
// Input:
//  arr[1,1,2,2,2,3,3]
// Output:
//  arr[1,2,3,_,_,_,_]
// Explanation:
//  Total number of unique elements are 3, i.e[1,2,3] and Therefore return 3 after assigning [1,2,3] in the beginning of the array.
// Example 2:
// Input:
//  arr[1,1,1,2,2,3,3,3,3,4,4]
// Output:
//  arr[1,2,3,4,_,_,_,_,_,_,_]
// Explanation:
//  Total number of unique elements are 4, i.e[1,2,3,4] and Therefore return 4 after assigning [1,2,3,4] in the beginning of the array.

//O(2N)
//Space O(N)

const bruteRemoveDuplicatesInPlace = function (arr) {
  const newSet = new Set(arr); //O(N)
  let index = 0;
  for (const val of newSet) {
    //O(N)
    arr[index] = val;
    index++;
  }
  return index;
};

console.log(bruteRemoveDuplicatesInPlace([1, 1, 2, 2, 2, 3, 3]));

//So basically the optimal approach is like we have 2 pointers first pointer i will be set on the first element
//and another loop will start with j=1 till n
//now in loop i will check if arr[i]!==arr[j]
//arr[i+1]=arr[j]
//and increment i because then it will compare it with other element

//Time complexity O(N)
//Space complexity O(1)

const optimalRemoveDuplicatesInPlace = function (arr) {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  return i + 1;
};
console.log(optimalRemoveDuplicatesInPlace([1, 1, 2, 2, 2, 3, 3]));
