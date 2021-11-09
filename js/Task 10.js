function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.querySelector('body');
const buttonRefs = document.querySelectorAll('button');
const inputRef = document.querySelectorAll('input');
const amount = inputRef.value;
const boxesRef = document.querySelectorAll('#boxes');


[...buttonRefs].forEach(item => {
  item.addEventListener('click', addDiv);
});
function addDiv(e) {
  if (e.target.dataset.action === 'Create') {
    function createBoxes(amount) {
      for (let i = 0; i < amount; i += 1) {
        `<div style="background-Color:${getRandomHexColor()}; width:${30 + i * 10}px; height: ${30 + i * 10}x"></div>`;
      }
      document.querySelectorAll('#boxes');
    }

    
  }
  if (e.target.dataset.action === 'Destroy') {
    bodyRef.remove();
  }
}

