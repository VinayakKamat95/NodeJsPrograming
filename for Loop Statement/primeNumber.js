const prompt = require('prompt-sync')();

const number = Number(prompt('Enter the Number : '));

var flag = 0

for (let i = 2; i <= number / 2; i++) {

    if (number % i == 0) {
        flag = 1;
        break;
    }
}
if (flag == 0) {
    console.log("Prime number");
}
else {
    console.log("Not Prime number");
}
