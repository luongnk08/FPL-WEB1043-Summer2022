let hoaElement = document.getElementById("dHoa");

console.log(hoaElement.childNodes);

console.log(hoaElement.children);

console.log(hoaElement.childNodes[1].innerText);

console.log(hoaElement.children[0].innerText);

console.log("innerText: " + hoaElement.innerText);

console.log("innerHTML: " + hoaElement.innerHTML);

for (let i = 0; i < hoaElement.children.length; i++) {
  console.log(hoaElement.children[i].innerText);
}

// child
console.log("firstChild: ", hoaElement.firstChild);
console.log("firstElementChild: ", hoaElement.firstElementChild);

let firstChild = hoaElement.firstElementChild;

console.log(firstChild.nextElementSibling);

//
let monHocElements = document.getElementsByClassName("monHoc");

for (let i = 0; i < monHocElements.length; i++) {
  console.log("monHoc: ", monHocElements[i].innerHTML);
}

let tags = document.getElementsByTagName("p");
console.log("tags: ", tags);

let names = document.getElementsByName("monC");
console.log("names: ", names);

// Them node
let btnElement = document.createElement("button");

btnElement.innerText = "CLICK ME";
hoaElement.appendChild(btnElement);

btnElement.setAttribute("class", "btnClickMe");
btnElement.onclick = function () {
  alert("Click me");
};

hoaElement.setAttribute("class", "setLaiHoaClass");

setTimeout(function () {
  btnElement.remove();
}, 3000);
