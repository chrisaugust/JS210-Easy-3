// PROBLEM
// Modify wordSizes() so that it excludes non-alphabetic characters
// when determining word size.
//
// EXAMPLES
// wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 2}
// wordSizes('Hey diddle diddle, the cat and the fiddle!');
//    // { "3": 5, "6": 3 }
// wordSizes("What's up doc?"); // { "2": 1, "3": 1, "5": 1 }
// wordSizes(''); // {}
//
// DATA STRUCTURE
// Object
//
// ALGORITHM
// replace non-alphabetic characters before calling split.map.reduce...
//
// CODE
'use strict';

function wordSizes(str) {
  str = str.replace(/[^a-z]/gi, '');
  return str.split(' ').map(word => word.length).reduce((wordCount, wordLength) => {
    wordCount[wordLength] = wordCount[wordLength] ?
      wordCount[wordLength] + 1 : 1;
    return wordCount;
  }, {});
}

// TESTS
console.log(String(wordSizes('Four score and seven.')) ===
  String({ 3: 1, 4: 1, 5: 2 }));
console.log(String(wordSizes('Hey diddle diddle, the cat and the fiddle!')) ===
  String({ 3: 5, 6: 3}));
console.log(String(wordSizes("What's up doc?")) ===
  String({ 2: 1, 3: 1, 5: 1 }));
console.log(String(wordSizes('')) === String({}));
