function randomnumber() {
  return Math.ceil(((Math.random() * 7)+1)*1000);
}

async function hacker() {
  let div = document.querySelector(".container");

  new Promise((resolve, reject) => {
    div.insertAdjacentHTML(
      "beforeend",
      `<p>Initializing Hacking<span></span></p>`,
    );
    resolve();
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      div.insertAdjacentHTML(
        "beforeend",
        `<p>Reading Your Files<span></span></p>`,
      );
      resolve();
    }, randomnumber());
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      div.insertAdjacentHTML(
        "beforeend",
        `<p>Password file Detected<span></span></p>`,
      );
      resolve();
    }, randomnumber());
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      div.insertAdjacentHTML(
        "beforeend",
        `<p>Sending all Password and Personal files to server<span></span>`,
      );
      resolve();
    }, randomnumber());
  });
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      div.insertAdjacentHTML("beforeend", `<p>Cleaning up<span></span></p>`);
    }, randomnumber());
    resolve();
  });
}

hacker();
