// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome1(str) {
  let reversed = [...str].reverse().join('');
  // compare reversed with str
  return reversed === str;
}

/*
propose this to have something to talk about then provide a better solution (above)
Once every gets to the middle it would do checks until it goes back out. which is extra steps
*/
function palindrome(str) {
  return [...str].every((char, i) => {
    // we use - 1 because arrays are 0 indexed
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
