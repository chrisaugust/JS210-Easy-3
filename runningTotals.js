// PROBLEM
// Write a function that takes an array of numbers and
// returns an array with the same number of elements but
// with each element's value being the running total from
// the original array.
//
// EXAMPLES
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - initialize local variable returnArr to empty array
// - call forEach on argument array witn el, idx, and arr arguments
//    - make a slice from index value 0 to current element
//    - reduce values of slice through summation
//    - push to returnArr
// - return returnArr
//
// CODE
'use strict';
// version 1
// function runningTotal(numArr) {
//   let returnArr = [];
//
//   numArr.forEach((el, idx, arr) => {
//     returnArr.push(
//       arr.slice(0, idx + 1)
//       .reduce((runningTotal, num) => runningTotal + num));
//
//   });
//
//   return returnArr;
// }

// version 2 with map
function runningTotal(numArr) {
  return numArr.map((element) => {
    return numArr.slice(0, numArr.indexOf(element) + 1)
      .reduce((runningTotal, num) => runningTotal + num);
  });
}

// TESTS
console.log(String(runningTotal([2, 5, 13])) === String([2, 7, 20]));
console.log(String(runningTotal([14, 11, 7, 15, 20])) ===
  String([14, 25, 32, 47, 67]));
console.log(String(runningTotal([3])) === String([3]));
console.log(String(runningTotal([])) === String([]));
