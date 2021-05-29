const prompt = require('prompt-sync')();

const number = Number(prompt('Enter N for Nth harmonic number : '));

for (let i = 0; i <= number; i++) {
    harmonic = 1 / i;
    console.log(harmonic);
}