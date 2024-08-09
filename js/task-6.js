function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;}

const createBoxes = amount => {
  const boxesContainer = document.querySelector('#boxes')
  const boxesArray = []
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArray.push(box);
    
  }
  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxesArray);
}

const destroyBoxes = () => {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = "";}
const btnCreate = document.querySelector('[data-create]');
btnCreate.addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  input.value = "";
});

const btnDestroy = document.querySelector('[data-destroy]');
btnDestroy.addEventListener('click', destroyBoxes);