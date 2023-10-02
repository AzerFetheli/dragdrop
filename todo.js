let input = document.getElementById("inpName");
let btn = document.getElementById("addBtn");
let listItem = document.querySelector(".list-item");

btn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Please enter a value.");
  } else {
    let newCard = document.createElement("div");
    newCard.setAttribute("id", "card");
    newCard.setAttribute("draggable", "true");
    newCard.innerHTML = `
      <span class="top">${input.value}</span>
    `;
    listItem.appendChild(newCard);
    input.value = "";
    
    newCard.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", newCard.id);
    });
  }
});

let columns = document.querySelectorAll(".column");
columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    let cardId = e.dataTransfer.getData("text/plain");
    let card = document.getElementById(cardId);
    if (card) {
      column.appendChild(card);
    }
  });
});
