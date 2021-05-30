const prompt = require('prompt-sync')();

var rem, temp, final = 0;
var number = Number(prompt("Number : "));
temp = number;
while (number > 0) {
    rem = number % 10;
    number = parseInt(number / 10);
    final = final * 10 + rem;
}
if (final == temp) {
    console.log("The inputed number is Palindrome");
}
else {
    console.log("The inputted number is not palindrome");
}