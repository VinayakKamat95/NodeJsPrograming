var numberArray = new Array();
var subArray = new Array();
var addArray = new Array();

for (let i = 0; i < 10; i++) {

    let num = Math.floor(Math.random() * 899) + 100;
    numberArray[i] = num;
}
console.log('numberArray :', numberArray);
var max = numberArray[0];

for (let i = 1; i < numberArray.length; i++) {

    if (numberArray[i] > max) {
        max = numberArray[i];
    }

}
console.log(max);
for (let i = 0; i < numberArray.length; i++) {

    let sub = max - numberArray[i];
    subArray[i] = sub;

}
console.log(subArray);
var min = subArray[0];
let i = 1;
if (min == 0) {

    min = subArray[1];
}
while (i < subArray.length) {

    if (subArray[i] < min && min > 0 && subArray[i] > 0) {
        min = subArray[i];
    }
    i++;

}

var secondLargeNum = max - min;
console.log('secondLargeNum  :', secondLargeNum);

var min = numberArray[0];

for (let i = 1; i < numberArray.length; i++) {

    if (numberArray[i] < min) {
        min = numberArray[i];
    }

}
console.log(min);
