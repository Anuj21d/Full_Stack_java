let arr = [5];

let newarr = [];

newarr = arr.map((e) => {
  return e - 1;
});
console.log(newarr);

newarr = arr.forEach((e) => {
  return e - 1;
});
console.log(arr);

let n = 5;

// form function

let b = Array.from({ length: n }, (v, i) => n - i);
console.log(b);

//map function

let c = b.map((v, index, array) => {
  return v - index;
});
console.log(c);

//filter function
const greaterthanthree = (a) => {
  return a > 3 ? a : 0;
};
let d = b.filter(greaterthanthree);
console.log(d);
