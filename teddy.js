// PROBLEM
// Write a program that randomly generates Teddy's age, logging
// it to the console. The age should be a random number between
// 20 and 200 inclusive.
//
// EXAMPLE OUTPUT
// Teddy is 71 years old!
//
// ALGORITHM
// - initialize age to 0
// - loop until age >= 20 and <= 200
//   - generate a random number with Math.random()
//   (this will be a decimal between 0 and 1)
//   - multiply by 200 and add 1
//   - use Math.floor() to round down
// - log message to console with age interpolated
//
// CODE
// first solution
// const ageOfTeddy = () => {
//   let age = 0;
//
//   while (!(age >= 20 && age <= 200)) {
//     age = Math.floor((Math.random() * 200) + 1);
//   }
//
//   console.log(`Teddy is ${age} years old!`);
// };
//
// second solution
const randomNumberBetween = (min, max) => {
  if (max < min) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ageOfTeddy = randomNumberBetween(20, 200);
console.log(`Teddy is ${ageOfTeddy} years old!`);
