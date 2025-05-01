// index.js

// State variables
let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// Utility functions
function addNumberToBank(number) {
  numberBank.push(number);
  render();
}

function sortFirstNumber() {
  if (numberBank.length > 0) {
    const number = numberBank.shift();
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
    oddNumbers.sort((a, b) => a - b);
    evenNumbers.sort((a, b) => a - b);
    render();
  }
}

function sortAllNumbers() {
  while (numberBank.length > 0) {
    const number = numberBank.shift();
    if (number % 2 === 0) {
      evenNumbers.push(number);
    } else {
      oddNumbers.push(number);
    }
  }
  oddNumbers.sort((a, b) => a - b);
  evenNumbers.sort((a, b) => a - b);
  render();
}

// Component functions
function createForm() {
  const form = document.createElement("form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById("numberInput");
    const number = parseInt(input.value, 10);
    if (!isNaN(number)) {
      addNumberToBank(number);
    }
    input.value = "";
  };

  const input = document.createElement("input");
  input.type = "number";
  input.id = "numberInput";
  input.placeholder = "Enter a number";

  const addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Add Number";

  form.appendChild(input);
  form.appendChild(addButton);

  return form;
}

function createNumberBank() {
  const div = document.createElement("div");
  div.id = "numberBank";
  div.innerHTML = `<strong>Bank:</strong> ${numberBank.join(", ")}`;
  div.style.padding = "10px";
  div.style.border = "1px solid #ccc";
  div.style.marginBottom = "20px";
  div.style.marginTop = "20px";
  return div;
}

function createOddCategory() {
  const div = document.createElement("div");
  div.id = "oddNumbers";
  div.innerHTML = `<strong>Odds:</strong> ${oddNumbers.join(", ")}`;
  div.style.padding = "10px";
  div.style.border = "1px solid #ccc";
  div.style.marginBottom = "20px";
  return div;
}

function createEvenCategory() {
  const div = document.createElement("div");
  div.id = "evenNumbers";
  div.innerHTML = `<strong>Evens:</strong> ${evenNumbers.join(", ")}`;
  div.style.padding = "10px";
  div.style.border = "1px solid #ccc";
  div.style.marginBottom = "20px";

  return div;
}

function createSortButtons() {
  const div = document.createElement("div");

  const sortFirstButton = document.createElement("button");
  sortFirstButton.textContent = "Sort 1";
  sortFirstButton.onclick = sortFirstNumber;

  const sortAllButton = document.createElement("button");
  sortAllButton.textContent = "Sort All";
  sortAllButton.onclick = sortAllNumbers;

  div.appendChild(sortFirstButton);
  div.appendChild(sortAllButton);

  return div;
}

// Render function
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";
  app.appendChild(createForm());
  app.appendChild(createNumberBank());
  app.appendChild(createOddCategory());
  app.appendChild(createEvenCategory());
  app.appendChild(createSortButtons());
}

// Initial render
document.body.innerHTML = '<div id="app"></div>';
render();
