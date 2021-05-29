const prompt = require('prompt-sync')();

const number = Number(prompt('Enter the number N : '));

for (let i = 0; i <= number; i++) {
    tableof2 = Math.pow(2, i);
    console.log(tableof2);
}