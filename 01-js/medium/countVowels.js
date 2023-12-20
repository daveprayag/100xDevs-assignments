/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowel = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  str = str.toLowerCase().split("");

  str.forEach((ch) => {
    if (vowel.has(ch)) count++;
  });

  return count;
}

console.log(countVowels("HELLO"));

module.exports = countVowels;
