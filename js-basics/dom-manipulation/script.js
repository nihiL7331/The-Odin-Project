const container = document.querySelector("#container");

const redText = document.createElement("p");
redText.innerText = "Hey I'm red!";
redText.style.color = "red";
container.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.innerText = "I'm a blue h3!";
blueH3.style.color = "blue";
container.appendChild(blueH3);

const pinkDiv = document.createElement("div");
pinkDiv.style.border = "4px solid black";
pinkDiv.style.backgroundColor = "pink";
const inH1 = document.createElement("h1");
inH1.innerText = "I'm in a div";
pinkDiv.appendChild(inH1);
const inP = document.createElement("p");
inP.innerText = "ME TOO!";
pinkDiv.appendChild(inP);
container.appendChild(pinkDiv);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello, World!");

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
  e.target.style.background = "blue";
});
