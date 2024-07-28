//So basically you are given an array you need to sort it in ascending
//So how selection sort works => in the entire array first loop and find the minimum, then swap it with the first element
//then move ahead one step and find the minimum in that array and swap
//do this till the entire array is swapped

//Time complexity O(n2)

const selectionSort = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minVal = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minVal]) minVal = j;
    }
    if (minVal === i) continue;
    [arr[i], arr[minVal]] = [arr[minVal], arr[i]];
  }
  return arr;
};

console.log(selectionSort([4, 1, 3, 9, 7]));
