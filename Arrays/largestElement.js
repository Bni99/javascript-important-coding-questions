//find the largest element in the array
//since the sorting algorithms have time complexity as O(N LOG N) so it will be same here

const findLargestElementInTheArray = function (arr) {
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};

console.log(findLargestElementInTheArray([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));

//Time complexity is O(N)

const optimalFindLargestElementInArray = function (arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

console.log(optimalFindLargestElementInArray([11, 1, 13, 2, 3, 4, 6, 75]));
