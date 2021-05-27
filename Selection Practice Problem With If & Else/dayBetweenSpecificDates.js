const prompt = require('prompt-sync')();

const day = Number(prompt('Day: '));
console.log('Your Day', day);

const month = Number(prompt('Month: '));
console.log('Your Month', month);

var date1 = new Date("2015-04-20");
var date2 = new Date("2015-07-20");

const min = date1.getMonth();
const max = date2.getMonth();
const dayLimit = 20;

var flag = false;

if ((month <= max) && (month >= min)) {
    flag = true;

    if (month == max) {
        if (day <= dayLimit) {
            flag = true;
        } else {
            flag = false;
        }
    }

    if (month == min) {
        if (day >= dayLimit) {
            flag = true;
        } else {
            flag = false;
        }
    }
} else {
    flag = false;
}

console.log(flag);


