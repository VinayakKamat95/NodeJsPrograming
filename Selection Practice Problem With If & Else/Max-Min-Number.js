
const num1 = Math.floor(Math.random() * 899) + 100;
console.log('Your number num1 ', num1);

const num2 = Math.floor(Math.random() * 899) + 100;
console.log('Your number num2 ', num2);

const num3 = Math.floor(Math.random() * 899) + 100;
console.log('Your number num3 ', num3);

const num4 = Math.floor(Math.random() * 899) + 100;
console.log('Your number num4 ', num4);

const num5 = Math.floor(Math.random() * 899) + 100;
console.log('Your number num5 ', num5);

var max = num1
var min = num1

if (num2 > max) {
    max = num2;
} else {
    if (num2 < min) {
        min = num2;
    }
}

if (num3 > max) {
    max = num3;
} else {
    if (num3 < min) {
        min = num3;
    }
}

if (num4 > max) {
    max = num4;
} else {
    if (num4 < min) {
        min = num4;
    }
}

if (num5 > max) {
    max = num5;
} else {
    if (num5 < min) {
        min = num5;
    }
}

console.log('Maximum Number ', max);
console.log('Minimum Number ', min);