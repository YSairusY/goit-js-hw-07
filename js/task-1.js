let itemList = document.querySelectorAll(".item");
let categoriesCount = itemList.length;
let h2Element;
let liCategoriesElement;
let ulElements;
let liElements;
let elementOfcategoriesCount;
console.log(`Number of categories: ${categoriesCount}`);

itemList.forEach((item) => {
  h2Element = item.querySelectorAll("h2");
  h2Element.forEach((h2Elem) => {
    h2Elem.setAttribute(
      "style",
      `
      font-family: "Montserrat", sans-serif;
      font-weight: 600;
      font-size: 24px;
      line-height: 1.4;
      letter-spacing: 0.04em;
      color: #2e2f42;
      margin: 0px auto;
      padding-bottom:16px;
      `
    );
    console.log(h2Elem.textContent);
  });

  liCategoriesElement = document.querySelectorAll(".item");
  liCategoriesElement.forEach((liCatElem) => {
    liCatElem.setAttribute(
      "style",
      `
      display:flex;
      flex-direction:column;
      list-style:none;
      margin-bottom:24px;
      border-radius: 8px;
      padding: 16px;
      width: 392px;
      background: #F6F6FE;
      `
    );
  });

  ulElements = item.querySelectorAll(".item ul");
  ulElements.forEach((ulElem) => {
    ulElem.setAttribute(
      "style",
      `
      display: flex;
      flex-direction: column;
      gap:8px;
      padding-left: 0px;
      `
    );
  });

  liElements = item.querySelectorAll(".item li");
  liElements.forEach((liElem) => {
    liElem.setAttribute(
      "style",
      `
      border: 1px solid #808080;
      border-radius: 8px;
      padding: 8px 315px 8px 16px;
      list-style: none;
      font-family: "Montserrat", sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5;
      letter-spacing: 0.04em;
      color: #2e2f42; 
      `
    );
  });
  elementOfcategoriesCount = item.querySelectorAll("ul li").length;
  console.log(`Elements: ${elementOfcategoriesCount}`);
});