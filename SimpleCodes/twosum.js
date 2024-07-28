//Two sum
//So basically given an array we have been given a target we have to return two indices where its equal to that target
// nums= [2,7,11,15] target is 9
//so output will be 0,1

//brute force

// const twoSum = function (arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) return [i, j];
//     }
//   }
// };

// console.log(twoSum([2, 7, 11, 15, 1], 26));

const twoSum1 = function (arr, target) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) {
      return [obj[target - arr[i]], i];
    } else obj[arr[i]] = i;
  }
  console.log(obj);
};
console.log(twoSum1([2, 7, 11, 15, 1], 26));
