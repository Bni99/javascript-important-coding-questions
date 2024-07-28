//Bubble sort is another technique to sort the elements in the array
//so basically its like pushing the maximum element in the end by doing adjacent swaps
//so basically there will be one loop that will work like 0 to n-1 , 0 to n-2 like that and another will be inside that loop u will be comparing consecutive values for swap
//Worst case scenario O(n2)

const bubbleSort = function (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
  }
};

console.log(bubbleSort([4, 1, 3, 9, 7]));

//loop from 0 to n-1 just comparing arr[j]and arr[j+1] and swap
//[4,1,3,9,7]
//[1,4,3,9,7]
//[1,3,4,9,7]
//[1,3,4,9,7]
//[1,3,4,7,9]

//next iteration
//loop from 0 to n-2
//[1,3,4,7,9]

//So there is one optimized version of bubble sort as well like what if the array given is already sorted so we can try optimizing it
//like its based on the thing like in case during an iteration i donot find any swaps , then i will just break out of the loop means its already sorted so in that case the best case O(n)

const optimizedBubbleSort = function (arr) {
  for (let i = arr.length - 1; i > 0; i++) {
    let numberOfSwaps = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        numberOfSwaps++;
      }
    }
    if (numberOfSwaps === 0) {
      return arr;
    }
    return arr;
  }
};

console.log(optimizedBubbleSort([4, 1, 3, 9, 7]));
