console.log("This is Loops");

// for Loop

for (let i = 0; i < 10; i++) {
  console.log(1 + i);
}

// for in : used for obj to get key or value
let obj = {
  name: "Anuj",
  company: "Google",
  Salary: 2000000,
};
for (const key in obj) {
  const element = obj[key];

  console.log(key + ":" +element);
}

// for of : used for iterating in array or string
let name = "Anuj";
for (const element of name) {
    console.log(element);
}
