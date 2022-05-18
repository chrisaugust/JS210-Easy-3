// PROBLEM
// Write a function that takes a string of space separated words
// and returns a string with the first and last letter of each
// word swapped.
//
// Assum that each word contains at least one letter, that the string
// will always contain at least one word, that the string contains
// nothing but words and spaces, and that there are no leading, trailing,
// or repeated spaces.
//
// EXAMPLES
// swap('Oh what a wonderful day it is');  
//                // "hO thaw a londerfuw yad ti si"
// swap('Abcde'); //"ebcdA"
// swap('a');     // "a"
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - split argument string on ' '; assign to wordArray
// - call map on wordArray
//    - split word on ''
//    - firstChar = word[0]
//    - word[0] = word[word.length - 1]
//    - word[word.length - 1] = firstChar
// - return wordArray
//
// CODE
'use strict';

function swapFirstAndLastChars(word) {
  if (word.length === 1) return word;

  word = word.split('')
  let lastCharIndex = word.length - 1;
  [word[0], word[lastCharIndex]] = [word[lastCharIndex], word[0]];
  return word.join('');
}

function swap(str) {
  return str.split(' ').map(word => swapFirstAndLastChars(word)).join(' ');
}

// TESTS
console.log(swap('Oh what a wonderful day it is') === "hO thaw a londerfuw yad ti si");
console.log(swap('Abcde') === "ebcdA");
console.log(swap('a') === "a");
