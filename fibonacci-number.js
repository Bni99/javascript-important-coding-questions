//Fibonacci series -> 0 ,1 ,1,2,3,5,8....
//if we give a number then it should return its value for fibonacci number

// const getFibonacciNumber = function (num) {
//   if (num <= 1) return num;
//   else return getFibonacciNumber(num - 1) + getFibonacciNumber(num - 2);
// };

// console.log(getFibonacciNumber(6));

const getFibonacciNumber = function (num) {
  let arr = [0, 1];
  for (let i = 2; i <= num; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[num];
};
console.log(getFibonacciNumber(6));
