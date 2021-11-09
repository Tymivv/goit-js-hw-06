const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      //   console.log('onFormSubmit -> email', email);
      //   console.log('onFormSubmit -> password', email);

    if (value === '') {
        alert('все поля должны быть заполнены');
        return;
    }
    console.log('назва поля, яке передається', name);
    console.log('значення поля, яке передається', value);
    form.reset();
    });

}



