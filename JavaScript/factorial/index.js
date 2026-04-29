n = 5;

// let arr = Array.from({ length: 5 }, (v, i) => n - i);

// console.log(arr);

// let factorial = arr.reduce((a, b) => {
//   return a * b;
// });
// console.log(factorial);
let factorial = 1;
for (let i = n; i > 0; i--) {
  factorial *= i;
}
console.log(factorial);
