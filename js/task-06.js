const inputEl = document.querySelector('#validation-input');


inputEl.addEventListener('blur', (event) => {
    const inputRef = event.currentTarget;
    if (inputRef.value.length === 6) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
        
        return;
    }
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
})
