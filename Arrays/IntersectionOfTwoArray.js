//You have to find what is common between 2 arrays
//given 2 sorted arrays [1,2,2,3,3,4,5,6] [2,3,3,5,6,6,7]
//find what is common in between

//Time complexity
//O(m * n);
//Space complexity
//O(m)+O(m)

const bruteIntersectionOfTwoArray = function (arr1, arr2) {
  let intersectionArray = [];
  let visitedArray = new Array(arr2.length).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j] && visitedArray[j] === 0) {
        intersectionArray.push(arr1[i]);
        visitedArray[j] = 1;
        break;
      }
    }
  }
  return intersectionArray;
};
console.log(
  bruteIntersectionOfTwoArray([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])
);

//Tc O(N1+N2)
//Sc O(1)

const optimalIntersectionOfTwoArray = function (arr1, arr2) {
  let pointer1 = 0,
    pointer2 = 0;
  let tempArray = [];

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    }
    if (arr1[pointer1] === arr2[pointer2]) {
      tempArray.push(arr1[pointer1]);
      pointer1++;
      pointer2++;
    }
    if (arr1[pointer1] > arr2[pointer2]) {
      pointer2++;
    }
  }
  return tempArray;
};

console.log(
  optimalIntersectionOfTwoArray([1, 2, 2, 3, 3, 4, 5, 6], [2, 3, 3, 5, 6, 6, 7])
);
