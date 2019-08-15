// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse1(str) {
  str = [...str].reverse().join('');
  return str;
}

// For loop
function reverse2(str) {
  let reversed = '';
  for (let i = 0; i < str.length; i++) {
    reversed = str[i] + reversed;
  }
  return reversed;
}

// es6
reverse3 = (str) => {
  // also could [...str] instead of str.split(')
  return str.split('').reduce((rev, char) => {
    return char + rev;
  }, '')
}

// recursion
function reverse(str) {
  if (str === '') {
    return str;
  } else {
    return reverse(str.substr(1)) + str[0];
  }
}

module.exports = reverse;
