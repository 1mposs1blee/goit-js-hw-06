const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const inputEl = document.querySelector('[type="number"]');
const boxEl = document.querySelector('#boxes');
let boxSizes = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroyBoxes = () => {
  boxEl.innerHTML = '';
  inputEl.value = '';
  boxSizes = 30;
}

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement('div');

    newDiv.style.width = `${boxSizes}px`;
    newDiv.style.height = `${boxSizes}px`;
    newDiv.style.backgroundColor = getRandomHexColor();

    boxEl.append(newDiv);

    boxSizes += 10;
  }
}

createBtnEl.addEventListener('click', () => {
  createBoxes(inputEl.value);
})

destroyBtnEl.addEventListener('click', () => {
  destroyBoxes();
})