const prompt = require('prompt-sync')();

const number = Number(prompt('Enter N for Factorial : '));
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log(factorial);