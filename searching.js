// PROBLEM
// Write a program that asks the user for 6 numbers
// and logs a message that tells whether or not the
// sixth number appears among the first five numbers.
//
// EXAMPLES
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17
//
// The number 17 appears in [25, 15, 20, 17, 23].
//
// -----
//
// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18
//
// The number 18 does not appear in [25, 15, 20, 17, 23].
//
// DATA STRUCTURE
// Array
//
// ALGORITHM
// - initialize empty array to let declared variable numbers
// - loop 5 times
//    - prompt user for a number
//    - push number to numbers
// - prompt user for a number
// - assign number to let declarad variable target
// - iterate over numbers, checking if target matches current element
//    - return `The number ${target} appears in [${numbers.join(', '}]` if match
//      is found
// - return `The number ${target} does not appear in [${numbers.join(', '}]`
//
// CODE
const rlsync = require('readline-sync');

function getUserProvidedNumbers() {
  const numbers = [];

  while (numbers.length < 5) {
    let num = Number(rlsync.question('Please enter a number: '));

    if (typeof (num) === 'number' && !!num === true) numbers.push(num);
  }

  return numbers;
}

// solution 1
// function searchUserProvidedNumbers() {
//   const numbers = getUserProvidedNumbers();
//   const target = Number(rlsync.question('Please enter a number: '));
// 
// 
//   if (numbers.includes(target)) {
//     return `The number ${target} appears in [${numbers.join(', ')}]`;
//   } else {
//     return `The number ${target} does not appear in [${numbers.join(', ')}]`;
//   }
// }

// solution 2
function searchUserProvidedNumbers() {
  const numbers = getUserProvidedNumbers();
  const target = Number(rlsync.question('Please enter a number: '));

  const targetInNumbers = numbers.some((num) => num === target);

  if (targetInNumbers) {
    return `The number ${target} appears in [${numbers.join(', ')}]`;          
  } else {
    return `The number ${target} does not appear in [${numbers.join(', ')}]`;
  }
}
console.log(searchUserProvidedNumbers());
