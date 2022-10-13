const colorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');
const body = document.querySelector('body');

body.addEventListener('click', changeColor);

function changeColor() {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = getRandomHexColor();
}
