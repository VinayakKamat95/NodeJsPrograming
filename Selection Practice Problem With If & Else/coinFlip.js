const coin = Math.floor(Math.random() * 2);

if (coin == 1) {
    result = "head";
} else {
    result = "tails";
}

console.log('Coin : ', result);