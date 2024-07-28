//Pallindrome number is a number which is equal to the original number when reversed
//Like 121 is a pallindrome number but 10 is not

//using inbuilt functions
const isNumberPalindrome1 = function (num) {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
};

console.log(isNumberPalindrome1(10));

const reverseANumber = function (num) {
  if (num >= 0 && num <= 9) return num;
  let reversedNumber = 0;
  while (num != 0) {
    reversedNumber = reversedNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNumber;
};
console.log(reverseANumber(123456));
