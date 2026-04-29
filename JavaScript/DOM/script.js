console.log("Start Learning DOM");

// document.body.firstElementChild
// <div class=​"container">​…​</div>​
// document.body.firstElementChild.nextElementSibling
// <table>​…​</table>​
// document.body.firstElementChild.childNodes
// NodeList(9) [text, div.box, text, div.box, text, div.box, text, div.box, text]
// document.body.firstElementChild.children
// HTMLCollection(4) [div.box, div.box, div.box, div.box]

console.log(document.getElementsByClassName("box"));

// document.getElementById("redbox").style.color="red"
// 'red'
// let cont = document.getElementById("redbox");
// undefined
// cont.style.color="red"
// 'red'
// cont.style.backgroundColorcolor="yellow"
// 'yellow'
// cont.style.height=34px
// VM4380:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
// cont.style.height="34px"
// '34px'
// cont.style.backgroundColor="yellow"
// 'yellow'

console.log(document.querySelectorAll(".box"))

console.log(document.getElementsByTagName("div"))