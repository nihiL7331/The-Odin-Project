const addButton = document.querySelector("#add-button");
const inputArea = document.querySelector("input");
const shoppingList = document.querySelector("#shopping-list");

function onItemAdd() {
  const newItem = document.createElement("li");
  newItem.style.display = "flex";
  newItem.style.alignItems = "center";
  const newItemText = document.createElement("p");
  newItemText.textContent = inputArea.value;
  const newItemDeleteButton = document.createElement("button");
  newItemDeleteButton.textContent = "Delete";
  newItemDeleteButton.style.marginLeft = "16px";
  newItemDeleteButton.style.maxHeight = "32px";
  newItemDeleteButton.addEventListener("click", (e) => onItemDelete(e));
  newItem.appendChild(newItemText);
  newItem.appendChild(newItemDeleteButton);
  shoppingList.appendChild(newItem);
  inputArea.value = "";
  inputArea.focus();
}

function onItemDelete(e) {
  e.srcElement.parentNode.remove();
}

addButton.addEventListener("click", onItemAdd);
