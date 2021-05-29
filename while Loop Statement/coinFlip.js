var headCount = 0;
var tailCount = 0;
var count = 0;
while (count != 10) {
    const coin = Math.floor(Math.random() * 2);
    if (coin == 1) {
        result = "head";
        headCount++;
    } else {
        result = "tails";
        tailCount++;
    }
    count++;
}
console.log('Head wins : ', headCount);
console.log('Tail wins : ', tailCount);