
const prompt = require('prompt-sync')();

const number = Number(prompt("Think of a number between 1 to 100 : "));

let a = 0;
let b = 100
var flag = 0;
while (flag != 1) {
    let possibleGuess = a + b;
    let guess = Math.round(possibleGuess / 2);

    console.log(` is the the number ${guess}`);
    console.log(`1. if number is right correct   2. Greater then ${guess}   3. less then ${guess}`);
    let choice = Number(prompt(`\t`));


    switch (choice) {
        case 1:
            console.log(`Correct Number is ${guess}`);
            flag = 1;
            break;

        case 2:
            a = guess;
            break;

        case 3:
            b = guess;
            break;
    }
}
