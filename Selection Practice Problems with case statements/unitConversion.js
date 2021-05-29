const prompt = require('prompt-sync')();

console.log("1. Feet to inch 2.Feet to meter 3.Inch to feet 4.Meter to feet");

const choice = Number(prompt("Enter Choice for Length conversion"));

var feet = null;
var inch = null;
var meter = null;

switch (choice) {
    case 1:
        feet = Number(prompt("Enter Length in Feet"));
        inch = feet * 12;
        console.log(`${feet} Feet is equals ${inch} Inch`);
        break;
    case 2:
        feet = Number(prompt("Enter Length in Feet"));
        meter = feet * 0.3048;
        console.log(`${feet} Feet is equals ${meter} Meter`);
        break;
    case 3:
        inch = Number(prompt("Enter Length in Inch"));
        feet = inch / 12;
        console.log(`${inch} Inch is equals ${feet} Feet`);
        break;
    case 4:
        meter = Number(prompt("Enter Length in Meter"));
        feet = meter * 3.28084;
        console.log(`${meter} Meter is equals ${feet} Feet`);
        break;
    default:
        console.log('Enter Proper Choice');
}
