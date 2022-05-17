// PROBLEM
// Write a program that logs when a user will retire and how many
// more years the user has to work until retirement
//
// EXAMPLES
// What is your age? 30
// At what age would you like to retire? 70
//
// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
//
// DATA STRUCTURES
// Date object
//
// ALGORITHM
// - require readline-sync
// - prompt user for age; assign to currentAge
// - prompt user for desired age for retirement; assign to retirementAge
// - use Date to determine current year
// - subtract currentAge from retirementAge; assign to yearsOfWork
// - use yearsOfWork to determine retirementYear
// - log message with template literals which interpolate the values
//   assigned to retirementYear and yearsOfWork
//
// CODE
'use strict';

let rlSync = require('readline-sync');

const currentAge = Number(rlSync.question('What is your age? '));
const retirementAge = Number(
  rlSync.question('At what age would you like to retire? '));
const yearsOfWork = retirementAge - currentAge;
const currentYear = new Date().getFullYear();
const retirementYear = currentYear + yearsOfWork;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsOfWork} years of work to go!`);

