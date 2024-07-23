function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.setAttribute(
  "style",
  `
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #fff;
  background: #4e75ff;  
  border: none;
  border-radius: 8px;
  padding: 8px 16px;  
  width: 148px;
  height: 40px;
  cursor: pointer;
  `
);
const pWidgetElement = document.querySelector(".widget p");
pWidgetElement.setAttribute(
  "style",
  `
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;`
);
const spanColorName = document.querySelector(".color");
const bodyElement = document.querySelector("body");

const divWidget = document.querySelector(".widget");
divWidget.setAttribute(
  "style",
  `display:flex; flex-direction:column; align-items: center;`
);

const changeColor = (event) => {
  let specColor = getRandomHexColor();
  event.preventDefault();
  bodyElement.style.backgroundColor = specColor;
  spanColorName.textContent = specColor;
};

changeColorBtn.addEventListener("click", changeColor);

changeColorBtn.addEventListener("mouseover", () => {
  changeColorBtn.style.backgroundColor = "#6C8CFF";
  changeColorBtn.style.cursor = "pointer";
  changeColorBtn.style.transition =
    " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
});

changeColorBtn.addEventListener("mouseleave", () => {
  changeColorBtn.style.backgroundColor = "#4E75FF";
});