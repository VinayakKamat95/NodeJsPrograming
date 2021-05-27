const randNum1 = Math.floor(Math.random() * 5) + 1;
const randNum2 = Math.floor(Math.random() * 5) + 1;
const randNum3 = Math.floor(Math.random() * 5) + 1;
const randNum4 = Math.floor(Math.random() * 5) + 1;
const randNum5 = Math.floor(Math.random() * 5) + 1;

let sum = randNum1 + randNum2 + randNum3 + randNum4 + randNum5;
console.log(`The Sum of ${randNum1} + ${randNum2} + ${randNum3} + ${randNum4} + ${randNum5} is ${sum}`);
let average = sum / 5;
console.log(`The Average of ${randNum1} + ${randNum2} + ${randNum3} + ${randNum4} + ${randNum5} is ${average}`);