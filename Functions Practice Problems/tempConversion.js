const prompt = require('prompt-sync')();

console.log("Conversion between the different temperature scales");
console.log("1. Convert Celsius temperature into Fahrenheit (0C - 100C)");
console.log("2. Convert Fahrenheit temperatures into Celsius (32F - 212F)");

const choice = Number(prompt("Select your choice (1-2) : "));

function fer_to_cel(f) {
    // formula Tc=(5/9)*(Tf-32)
    tc = (5 / 9) * (f - 32);
    console.log(`${f} F = ${tc} C`);
}

function cel_to_fer(c) {
    // formula Tf=(9/5)*Tc+32
    tf = ((9 / 5) * c) + 32;
    console.log(`${c} C = ${tf} F`);
}

switch (choice) {
    case 1:
        tc = Number(prompt("Enter temperature (C) : "));
        if (tc >= 0 && tc <= 100) {
            cel_to_fer(tc);
        } else {
            console.log("Enter Temperature Range for degCelcius (0-100 C)");
        }
        break;

    case 2:
        tf = Number(prompt("Enter temperature (F) : "));
        if (tf >= 32 && tf <= 212) {
            fer_to_cel(tf);
        } else {
            console.log("Enter Temperature Range for degCelcius (32-212 F)");
        }
        break;

    case 3:
        console.log("Select option from 1 Or 2");
        break;
}