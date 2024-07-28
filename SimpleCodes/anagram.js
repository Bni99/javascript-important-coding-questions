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
  for (const i of string1) {
    obj1[i] = (obj1[i] || 0) + 1;
  }
  for (const j of string2) {
    if (!obj1[j]) {
      return false;
    }
    if (obj1[j]) {
      obj1[j]--;
    }
  }
  return true;
};

console.log(checkAnagrams2("hello", "ohell"));
