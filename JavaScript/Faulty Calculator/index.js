// take input from user

let a = Number(prompt("Enter your First number"));
console.log(a);
let b = Number(prompt("Enter your Second number"));
console.log(b);
let c = prompt("Enter Operation want to do?(+,-,*,/)");
console.log(c);

function wrongCal(a, b, c) {
  if (c == "+") {
    return a - b;
  } else if (c == "-") {
    return a / b;
  } else if (c == "*") {
    return a + b;
  } else {
    return a ** b;
  }
}
function correctCal(a, b, c) {
    if (c == "+") {
    return a + b;
  } else if (c == "-") {
    return a - b;
  } else if (c == "*") {
    return a * b;
  } else {
    return a / b;
  }
}
if (Math.random() < 0.1) {
  result = wrongCal(a, b, c);
} else {
  result = correctCal(a, b, c);
}

console.log("This Is result for your Operation : " + result);
