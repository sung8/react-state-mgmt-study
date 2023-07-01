const numbers = [10, 20, 30];

let total = 0;
for (const n of numbers) {
  total += n;
}

total;

const total2 = numbers.reduce((currValue, n) => {
  currValue + n;
}, 0);
total2;

const total3 = numbers.reduce((currValue, n) => {
  return currValue + n;
}, 0);
total3;

const sum = numbers.reduce((a, b) => a + b, 0);
sum;
