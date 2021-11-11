const inp = document.querySelector('#validation-input');

inp.addEventListener('blur', valided);

function valided() {
  if (inp.value.length === +inp.dataset.length) {
    resetClass('valid', 'invalid');
  } else {
   resetClass('invalid', 'valid');
}
}

function resetClass(addcl, delcl) {
  inp.classList.add(addcl);
  inp.classList.remove(delcl);
}


