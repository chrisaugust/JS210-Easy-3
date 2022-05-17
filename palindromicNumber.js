// PROBLEM
// Write a function that returns true if its integer argument
// is palindromic, false otherwise.
//
// EXAMPLES
// isPalindromicNumber(34543);        // true
// isPalindromicNumber(123210);       // false
// isPalindromicNumber(22);           // true
// isPalindromicNumber(5);            // true
//
// ALGORITHM
// convert number argument to a string
// compare string to reversed string (split('').reverse().join(''))
//
// CODE
'use strict';

function isPalindromicNumber(num) {
  let numStr = String(num);
  return numStr === numStr.split('').reverse().join('');
}

// TESTS
console.log(isPalindromicNumber(34543) === true);
console.log(isPalindromicNumber(123210) === false);
console.log(isPalindromicNumber(22) === true);
console.log(isPalindromicNumber(5) === true);
