function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector("#controls");
divControls.setAttribute("style", `display:flex; gap:16px;`);
const input = document.querySelector("#controls input");
input.setAttribute(
  "style",
  `margin-bottom:20px;
    border:1px solid #808080;
    border-radius:8px;
    width:150px;
    height:40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
    padding-left: 12px;`
);

const boxesList = document.querySelector("#boxes");
boxesList.setAttribute(
  "style",
  ` display: flex; flex-direction: row-reverse; justify-content: flex-end; gap:44px;`
);

const createBtn = document.querySelector("[data-create]");
createBtn.setAttribute(
  "style",
  `
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: 120px;
    height: 40px;
    color: #ffffff;
    background-color:#4E75FF;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #fff;
    `
);

createBtn.addEventListener("mouseover", () => {
  createBtn.style.backgroundColor = "#6C8CFF";
  createBtn.style.cursor = "pointer";
  createBtn.style.transition =
    " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
});

createBtn.addEventListener("mouseleave", () => {
  createBtn.style.backgroundColor = "#4E75FF";
});

const destroyBtn = document.querySelector("[data-destroy]");
destroyBtn.setAttribute(
  "style",
  `
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: 120px;
    height: 40px;
    color: #ffffff;
    background-color:#FF4E4E;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #fff;
    `
);

destroyBtn.addEventListener("mouseover", () => {
  destroyBtn.style.backgroundColor = "#FF7070";
  destroyBtn.style.cursor = "pointer";
  destroyBtn.style.transition =
    " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
});

destroyBtn.addEventListener("mouseleave", () => {
  destroyBtn.style.backgroundColor = "#FF4E4E";
});

let increase = 30;
createBtn.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 99) {
    for (let index = 0; index < input.value; index++) {
      let box = document.createElement("div");
      box.style.width = `${increase}px`;
      box.style.height = `${increase}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesList.prepend(box);
      increase += 10;
    }
  } else {
    alert("Input number more than 1 or less than 100");
  }
});

destroyBtn.addEventListener("click", () => {
  for (let index = 0; index < input.value; index++) {
    let box = document.querySelector("#boxes div");
    box.remove();
    increase -= 10;
  }
});