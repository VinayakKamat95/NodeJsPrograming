const prompt = require('prompt-sync')();

const number1 = Number(prompt('number 1: '));
const number2 = Number(prompt('number 2: '));
const number3 = Number(prompt('number 3: '));

const add_mul = number1 + number2 * number3;
const mod_add = number1 % number2 + number3;
const add_div = number1 + number2 / number3;
const mul_add = number1 * number2 + number3;

console.log('add_mul ', add_mul);
console.log('mod_add ', mod_add);
console.log('add_div ', add_div);
console.log('mul_add ', mul_add);

var max = add_mul
var min = add_mul

if (mod_add > max) {
    max = mod_add;
} else {
    if (mod_add < min) {
        min = mod_add;
    }
}

if (add_div > max) {
    max = add_div;
} else {
    if (add_div < min) {
        min = add_div;
    }
}

if (mul_add > max) {
    max = mul_add;
} else {
    if (mul_add < min) {
        min = mul_add;
    }
}

console.log('Maximum ', max);
console.log('Minimum ', min);
