let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

//WITHOUT DRY Principles:
// button.addEventListener("click", function () {
//   if (input.value) {
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// input.addEventListener("keypress", function (event) {
//   if (input.value && event.keyCode === 13) {
//     //event.which can also be used in lieu of event.keyCode
//     let li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

//WITH DRY Principles:
function inputLength() {
  return input.value;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength()) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
