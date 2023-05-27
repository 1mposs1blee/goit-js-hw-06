const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if (formElements.email.value === '' || formElements.password.value === '') {
        alert('Всі поля форми повинні бути заповнені!');

        return;
    }
    
    const valuesFormElements = {
        [formElements.email.name]: formElements.email.value,
        [formElements.password.name]: formElements.password.value
    }

    console.log(valuesFormElements);
    event.currentTarget.reset();
})

