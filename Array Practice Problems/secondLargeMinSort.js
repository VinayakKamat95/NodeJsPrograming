var numberArray = new Array();
for (let i = 0; i < 10; i++) {

    let num = Math.floor(Math.random() * 899) + 100;
    numberArray[i] = num;
}
console.log('numberArray :', numberArray);

console.log(numberArray.sort());
console.log('secondMinimumNum  :', numberArray[1]);
console.log(numberArray.reverse());
console.log('secondLargeNum  :', numberArray[1]);