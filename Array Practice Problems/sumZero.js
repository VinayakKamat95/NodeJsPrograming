var numbers = [1, -1, 0, 1, 2, 0, -2];
length = numbers.length;

for (let i = 0; i <= length - 3; i++) {
    for (let j = i + 1; j <= length - 2; j++) {
        for (let k = j + 1; k <= length - 1; k++) {
            if (numbers[i] + numbers[j] + numbers[k] == 0) {
                console.log(`${numbers[i]},${numbers[j]},${numbers[k]}`)
            }
        }
    }
}