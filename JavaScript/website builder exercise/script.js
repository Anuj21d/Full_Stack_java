function creatCard(title, cName, views, monthOld, duration, thumbnail) {
  let newView = "";

  if (views < 1000) {
    newView = views;
  } else if (views < 1000000) {
    let val = (views / 1000).toFixed(1);
    newView = val.endsWith(".0") ? parseInt(val) + "K" : val + "K";
  } else {
    let val = (views / 1000000).toFixed(1);
    newView = val.endsWith(".0") ? parseInt(val) + "M" : val + "M";
  }

  let div = document.querySelector(".container");

  div.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <div class="thumbnail">
        <img src="${thumbnail}" width="350px" alt="Thumbnail"/>
        <span>${duration}</span>
      </div>
      <div class="content">
        <p id="title">${title}</p>
        <div class="channel-info">
          <p id="channel-name">${cName}</p>
          <p id="views">${newView} views</p>
          <p id="duration">${monthOld} ago</p>
        </div>
      </div>
    </div>`,
  );
}
function getInput() {
  let title = prompt("Enter title of video");
  let cName = prompt("Enter Your channel name");
  let views = Number(prompt("Enter views You get"));
  let monthOld = prompt("How old video actually");
  let duration = prompt("Enter video duration");
  let thumbnail = prompt("Enter thumbnail Link");

  creatCard(title, cName, views, monthOld, duration, thumbnail);
}
