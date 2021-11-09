const inp = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

inp.addEventListener('blur', valid);
function valid() {
    if (inp.value === '') {
        inp.value = 'Anonymous';
    } 
    span.textContent = inp.value;
    
}
