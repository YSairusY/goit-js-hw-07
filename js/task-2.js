
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const gallery = document.querySelectorAll(".gallery");
const markup = images
  .map(
    (currentImgOfArr) =>
      `<li class = "li-element">
      <img class ="gallery-image" src=${currentImgOfArr.url} arl="${currentImgOfArr.alt}">
      </li>
      `
  )
  .join("");

gallery.forEach((imgList) => {
  imgList.insertAdjacentHTML("afterbegin", markup);
  imgList.setAttribute(
    "style",
    `
      display: flex;
      flex-direction:row;
      flex-wrap: wrap;
      column-gap:24px;
      row-gap:48px;
    `
  );
});

const galleryImage = document.querySelectorAll(".gallery-image");
galleryImage.forEach((imgElem) => {
  imgElem.setAttribute(
    "style",
    `
      width: 360px;
      height: 300px;
    `
  );
});

const liElement = document.querySelectorAll(".li-element");
liElement.forEach((li) => {
  li.setAttribute(
    "style",
    `
      flex-basis: calc((100% - 24px)/ 4);
      list-style: none;
    `
  );
});
