console.log("This Is Functions :-");

// Basic function functionname(parameters) {
// }

function good(name) {
  console.log("Hey " + name + " Your Are Good??");
  console.log("Hey " + name + " Your Artist?");
}

good("Anuj");

function sum(a, b) {
  return a + b;
}

let result = sum(3, 5);

console.log("the result of sum is :" + result);

// Arrow function

const fun1 = (a, b) => {
  let c = a + b;
  return c;
};
let result2 = fun1(2, 5);
console.log("the result of sum is (With Arrow function):" + result2);
