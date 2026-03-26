const form = document.getElementById('feedbackForm');

const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const checkbox = document.getElementById('checkbox');

const fullnameError = document.getElementById('fullnameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const checkboxError = document.getElementById('checkboxError');

function validateFullname(){
    const value = fullname.value.trim();
    const words = value.split(/\s+/);

    if (words.length < 2){
        fullname.classList.add('is-danger');
        fullnameError.textContent = 'Введите минимум 2 слова';
        return false;
    }
    fullname.classList.remove('is-danger');
    fullnameError.textContent = '';
    return true;  
}

function validateEmail(){
    const value = email.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(value)){
        email.classList.add('is-danger');
        emailError.textContent = 'Некорректный email'
        return false;
    }
    email.classList.remove('is-danger');
    emailError.textContent = ''
    return true;
}

function validateMessage(){
    const value = message.value.trim();
    if (value.length < 20){
        message.classList.add('is-danger');
        messageError.textContent = 'Введите минимум 20 символов';
        return false;
    }
    message.classList.remove('is-danger');
    messageError.textContent = '';
    return true;
}

function validateCheckbox(){
    if (!checkbox.checked){
        checkboxError.textContent = 'Обязательное поле';
        return false; 
    }
    checkboxError.textContent = '';
    return true;
}


fullname.addEventListener('input', validateFullname);
email.addEventListener('input', validateEmail);
message.addEventListener('input', validateMessage);
checkbox.addEventListener('change', validateCheckbox);

form.addEventListener('submit', function(event){
    event.preventDefault();
    const isFullnameValid = validateFullname();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    const isCheckboxValid = validateCheckbox();

    if (isCheckboxValid && isEmailValid && isFullnameValid && isMessageValid){
        const formData = {
            fullname: fullname.value.trim(),
            email: email.value.trim(),
            message: message.value.trim(),
            checkbox: checkbox.checked
        };

        console.log('Форма отправлена');
        console.log(formData);

        form.reset();
    }
});