// PROBLEM
// Write another function that returns true if the string passed in
// as argument is a palindrome or false otherwise. This time the function
// should be case insensitive and ignore all non-alphanumeric characters.
//
// EXAMPLES
// isRealPalindrome('madam');               // true
// isRealPalindrome('Madam');               // true
// isRealPalindrome("madam i'm adam");      // true
// isRealPalindrome('356653');              // true
// isRealPalindrome('3561653');             // true
// isRealPalindrome('1231b321');            // false
//
//
// DATA STRUCTURES
// Array (well, we'll be using Array functions)
//
// ALGORITHM
// - make a copy of the argument string
// - substitute all non-alphanumeric characters with ''
// - make lowercase
// - pass to isPalindrome and return its return value
//
// CODE
'use strict';

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

function isRealPalindrome(str) {
  const regex = /[^a-z\d]/gi;
  return isPalindrome(str.replace(regex, '').toLowerCase());
}

// TESTS
console.log(isRealPalindrome('madam') === true);
console.log(isRealPalindrome('Madam') === true);
console.log(isRealPalindrome("madam I'm adam") ===  true);
console.log(isRealPalindrome('356653') ===  true);
console.log(isRealPalindrome('356a653') ===  true);
console.log(isRealPalindrome('123ab321') ===  false);
