// PROBLEM
// Write a function that takes a string consisting of one
// or more space separated words and returns an object that
// shows the number of words of different sizes.
//
// Words consist of any sequence of non-space characters.
//
// If the argument is empty, the function should return an empty object.
//
// EXAMPLES
// wordSizes('Four score and seven.'); // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');
//    // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?"); // { "2": 1, "4": 1, "6": 1 }
// wordSizes(''); // {}
//
// DATA STRUCTURE
// Object
//
// ALGORITHM
// - initialize empty returnObject
// - split argument str on ' '
// - call map on wordsArray with callback function that returns word.length
// - call forEach on return value from map
//     - check if retutrnObject has an existing key that matches current element
//        - if it doesn't: element becomes new key, with value of 1
//        - if it does: increment value for key
//
// CODE
'use strict';

function wordSizes(str) {
  let returnObject = {};

  let words = str.split(' ');
  words.map(word => word.length).forEach(wordLength => {
    if (!returnObject.keys) {
      returnObject[wordLength] = 1;
    } else if (returnObject.keys.includes(wordLength)) {
      returnObject[wordLength] += 1;
    }
  });

  console.log(returnObject);
  return returnObject;
}

// TESTS
console.log(String(wordSizes('Four score and seven.')) ===
  String({ 3: 1, 4: 1, 5: 1, 6: 1 }));
console.log(String(wordSizes('Hey diddle diddle, the cat and the fiddle!')) ===
  String({ 3: 5, 6: 1, 7: 2 }));
console.log(String(wordSizes("What's up doc?")) ===
  String({ 2: 1, 4: 1, 6: 1 }));
console.log(String(wordSizes('')) === String({}));
