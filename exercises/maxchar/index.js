// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* Questions:
What is th most common character in the string?
Does string A have the sam characters as string B (is it an anagram)
Does the given string have any repeated characters in it?
*/

function maxChar(str) {
  let charMap = {};
  let max = 0;
  // maxChar sets the key
  let maxChar = '';

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
