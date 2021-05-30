const prompt = require('prompt-sync')();

function Palindrome(number) {
    var rem, temp, final = 0;
    temp = number;
    while (number > 0) {
        rem = number % 10;
        number = parseInt(number / 10);
        final = final * 10 + rem;
    }

    return final;
}


function Prime(number) {
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
}


var number = Number(prompt("Number : "));
Prime(number);
Prime(Palindrome(number));
