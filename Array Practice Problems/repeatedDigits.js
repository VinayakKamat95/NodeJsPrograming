var repeatedNum = new Array();

for (let i = 1; i <= 100; i++) {

    let firstDigit = Math.floor(i / 10);
    let secondDigit = i % 10;

    if (firstDigit == secondDigit) {
        repeatedNum.push(i);
    }
}

console.log(repeatedNum);