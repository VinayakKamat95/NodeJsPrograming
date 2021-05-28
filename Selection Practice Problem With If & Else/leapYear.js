const prompt = require('prompt-sync')();

const year = Number(prompt('Year: '));
console.log('Input Year', year);

if ((year % 4 == 0) && (year % 100 != 0)) {
    result = "leap year";
}

if (year % 400 == 0) {
    result = "leap year";
} else {
    result = "not leap year";
}

console.log(result);
