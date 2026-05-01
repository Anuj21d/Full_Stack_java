console.log("Exercise");

// let color = {
//   0: "red",
//   1: "blue",
//   2: "yellow",
//   3: "black",
//   4: "gray",
// };

// document.querySelectorAll(".box").forEach(e => {
//   let random = Math.floor(Math.random() * 5);
//   let bgcolor = color[random];
//   e.style.backgroundColor = bgcolor;
// });

let boxes = document.querySelector(".container").children;

function randomBgColor() {
  // formula for random value betwn a to b
  // random_value = a + math.random() * (b - a)
  let val1 = 0 + Math.random() * (255 - 0);
  let val2 = 0 + Math.random() * (255 - 0);
  let val3 = 0 + Math.random() * (255 - 0);
  console.log(`${val1},${val2},${val3}`)
  return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach((e) => {
  e.style.backgroundColor = randomBgColor();
  e.style.color = randomBgColor();
});
