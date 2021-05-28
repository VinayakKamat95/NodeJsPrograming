const prompt = require('prompt-sync')();

const unit = 1
const ten = 10
const hundred = 100
const thousand = 1000
const tenThousand = 10000
const lakh = 100000

const units = Number(prompt('Enter number for display units: '));

if (units == unit) {
    console.log('unit');
}
else if (units == ten) {
    console.log('ten');
}
else if (units == hundred) {
    console.log('hundred');
}
else if (units == thousand) {
    console.log('thousand');
}
else if (units == tenThousand) {
    console.log('tenThousand');
}
else if (units == lakh) {
    console.log('lakh');
}
else {
    console.log('Enter Proper number to display units');
}