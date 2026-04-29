console.log("Exercise");

let color = {
  0: "red",
  1: "blue",
  2: "yellow",
  3: "black",
  4: "gray",
};

document.querySelectorAll(".box").forEach(e => {
  let random = Math.floor(Math.random() * 5);
  let bgcolor = color[random];
  e.style.backgroundColor = bgcolor;
});
