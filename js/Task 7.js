const inp = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
inp.addEventListener('input', event => {
  text.style.fontSize = inp.value + 'px';
});
