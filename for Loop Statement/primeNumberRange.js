
let NUMBERS = [2, 3, 4, 5, 6, 7, 8, 9];

var flag = 0;

for (let number of NUMBERS) {
    for (let i = 2; i <= Math.round(number / 2); i++) {
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
    flag = 0;
}

