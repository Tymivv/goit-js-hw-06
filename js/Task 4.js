let counterValue = 0;


const num = document.querySelector('#value');
const buttonRefs = document.querySelectorAll('button');

[...buttonRefs].forEach(item => {
    item.addEventListener('click', abdateValue)
});
function abdateValue(e) {
    if (e.target.dataset.action === 'decrement') {
      counterValue -= 1;
      num.textContent = counterValue;
      console.log(e.target.dataset.action);
    };
  if (e.target.dataset.action === 'increment') {
    counterValue += 1;
      num.textContent = counterValue;
      console.log(e.target.dataset.action);
    };
}



