
const bodyRef = document.querySelector('body');
const btrRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');



btrRef.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;

})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
