// PROBLEM
// Write a function that returns true if the string passed in
// as argument is a palindrome or false otherwise. Case and all
// characters matter.
//
// EXAMPLES
// isPalindrome('madam');               // true
// isPalindrome('Madam');               // false (case matters)
// isPalindrome("madam i'm adam");      // false (all characters matter)
// isPalindrome('356653');              // true
//
// DATA STRUCTURES
// Array
//
// ALGORITHM
// - create a string that is the reverse of the argument
//    - split
//    - reverse
//    - join
//    - assign to 'reversed'
//    
// - return the result of comparing string with reversed string
//     (using strict equality operator)
//
// CODE
'use strict';

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}

// TESTS
console.log(isPalindrome('madam') === true);
console.log(isPalindrome('Madam') === false);
console.log(isPalindrome("madam i'm adam") ===  false);
console.log(isPalindrome('356653') ===  true);
