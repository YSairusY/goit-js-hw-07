const inputForm = document.querySelector(".login-form");
const input = document.querySelectorAll("input");
const submitBtn = document.querySelector("button");
const formLabel = document.querySelectorAll("label");

const onFormSubmit = (event) => {
  let inputEmail = inputForm.elements.email.value;
  let inputPassword = inputForm.elements.password.value;

  event.preventDefault();
  if (inputPassword === "" || inputEmail === "") {
    alert("All form fields must be filled in");
  } else {
    const form = {
      email: inputEmail.trim(),
      password: inputPassword.trim(),
    };
    console.log(form);
    inputForm.reset();
  }
};

inputForm.addEventListener("submit", onFormSubmit);

inputForm.setAttribute(
  "style",
  `
    display: flex;
    flex-direction: column;
    gap:16px;
  `
);

input.forEach((inputEl) => {
  inputEl.setAttribute(
    "style",
    `
    border:1px solid #808080;
    border-radius:8px;
    width:360px;
    height:40px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
    padding-left: 12px;
    `
  );
});

formLabel.forEach((label) => {
  label.setAttribute(
    "style",
    `
    display:flex;
    flex-direction: column;
    gap:8px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
    `
  );
});

submitBtn.setAttribute(
  "style",
  `
    border: none;
    border-radius: 8px;
    padding: 8px 16px;
    width: 86px;
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

submitBtn.addEventListener("mouseover", () => {
  submitBtn.style.backgroundColor = "#6C8CFF";
  submitBtn.style.cursor = "pointer";
  submitBtn.style.transition =
    " background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)";
});

submitBtn.addEventListener("mouseleave", () => {
  submitBtn.style.backgroundColor = "#4E75FF";
});