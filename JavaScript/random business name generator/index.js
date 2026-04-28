let obj = {
  Adjective: "Crazy Amazing Fire",
  Name: "Engine Foods Garments",
  AnotherW: "Bros Limited Hub",
};

function name_genrator(obj) {
  var b_name = "";
  for (const key in obj) {
    let element = obj[key];
    let parts = element.split(" ");
    let random = Math.floor(Math.random() * 3);
    b_name +=parts[random];
  }
  return b_name;
}

let business_name = name_genrator(obj);

console.log(`Your new business name is ${business_name}`);
