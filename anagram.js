// so anagram is like given 2 strings can we rearrange them so that we can get the same word
//like "anagram" and "nagaram" are anagrams
//but "rat" and "bat" are not

const checkAnagrams1 = function (string1, string2) {
  if (string1.length !== string2.length) return false;
  return (
    string1.split("").sort().join("") === string2.split("").sort().join("")
  );
};
console.log(checkAnagrams1("anagram", "nagarams"));

const checkAnagrams2 = function (string1, string2) {
  let obj1 = {};
  for (let i = 0; i < string1.length; i++) {
    obj1[string1[i]] = (obj1[string1[i]] || 0) + 1;
  }
  console.log(obj1);
  for (let ch of string2) {
  }
};

console.log(checkAnagrams2("hello", "ohell"));
