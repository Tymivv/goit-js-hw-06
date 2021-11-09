const inp = document.querySelector('#validation-input');

inp.addEventListener('blur', valided);

function valided() {
    
    if (inp.value.length == inp.dataset.length) {
      inp.classList.add('valid');
    } else {
      inp.classList.add('invalid');
    }
 
}

