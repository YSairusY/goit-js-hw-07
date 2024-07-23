const input = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const h1Element = document.querySelector("h1");

input.addEventListener("input", (event) => {
  let trimmedValue = (outputName.textContent =
    event.currentTarget.value.trim());

  if (trimmedValue === "") {
    outputName.textContent = "Anonymous";
  }
});

input.setAttribute(
  "style",
  `
    border-radius: 8px;
    border: 1px solid #808080;
    padding-left: 16px;
    width: 360px;
    height: 40px;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.04em;
    line-height: 1.5;
    color: #2e2f42;
  `
);

h1Element.setAttribute(
  "style",
  `
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 600;
    letter-spacing: 0.04em;
    line-height: 1.4;
    color: #2e2f42;
    `
);