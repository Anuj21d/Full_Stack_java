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

let b = Array.from({length:n} ,(v,i) => n-i)
console.log(b)
