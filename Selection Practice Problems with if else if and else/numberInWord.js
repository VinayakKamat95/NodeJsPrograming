const prompt = require('prompt-sync')();

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;

const number = Number(prompt('Enter Single Digit Number: '));
if (number == one) {
    console.log('one');
}
else if (number == two) {
    console.log('two');
}
else if (number == three) {
    console.log('three');
}
else if (number == four) {
    console.log('four');
}
else if (number == five) {
    console.log('five');
}
else if (number == six) {
    console.log('six');
}
else if (number == seven) {
    console.log('seven');
}
else if (number == eight) {
    console.log('eight');
}
else if (number == nine) {
    console.log('nine');
} else {
    console.log('Enter single digit number');
}
