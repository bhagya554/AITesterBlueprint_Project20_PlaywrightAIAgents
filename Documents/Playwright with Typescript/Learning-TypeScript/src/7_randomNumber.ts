/*
Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive). 
max number is 0.9999999,min number is 0
Math.random()*4 = generates a random decimal number between 0 (inclusive) and 4 (exclusive).
Ex: 
Math.random() = 0.123456789
Math.random()*4 = 0.493827156
Math.floor() rounds a decimal number down to the nearest whole number.
Ex:
Math.floor(0.493827156) = 0
Math.floor(3.9999999) = 3

*/

const randomNum = Math.random()*5;
console.log(randomNum);
//generates a random decimal number between 0 (inclusive) and 5 (exclusive).
// Min number is 0 ,Max number is 4.9999999

const randomInt = Math.floor(randomNum);
console.log(randomInt);
//generates a random integer between 0 (inclusive) and 4 (inclusive).
// Min number is 0 ,Max number is 4