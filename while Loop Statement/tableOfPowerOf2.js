const prompt = require('prompt-sync')();

const number = Number(prompt('Enter the number N : '));
let i = 0;
while (i <= number) {
    tableof2 = Math.pow(2, i);
    console.log(tableof2);
    if (tableof2 == 256) {
        break;
    }
    i++;
}