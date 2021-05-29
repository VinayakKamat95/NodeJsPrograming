var betCount = 0;
var winCount = 0;
var start = 100;
var end = 200;
while (start < end && start != 0) {
    const bin = Math.floor(Math.random() * 2);
    betCount++;
    if (bin == 1) {
        start++;
        winCount++;
    } else {
        start--;
    }
}
console.log('Wins : ', winCount);
console.log('bet : ', betCount);