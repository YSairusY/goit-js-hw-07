const numbersOfCategories = document.querySelector('#categories');
const itemsOfCategories = document.querySelectorAll('.item');

console.log(`Numbers of categories : ${itemsOfCategories.length}`);
itemsOfCategories.forEach(item => {
  const nameOfItem = item.querySelector('h2').textContent;
    const numberOfItem = item.querySelectorAll('li');
    console.log(`Category : ${nameOfItem}`);
    console.log(`Elements : ${numberOfItem.length}`);
});