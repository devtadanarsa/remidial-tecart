function addWarning(){
    const warningText = document.getElementById('warning-text');
    const emailInput = document.getElementById('email');
    emailInput.value = ''
    
    warningText.classList.remove('hidden');
    warningText.classList.add('block');
    emailInput.classList.add('bg-[#ffb4b4]')
}

function inputSuccess(){
    const form = document.getElementById('form');
    const successText = document.getElementById('success-text');

    form.classList.add('hidden');
    successText.classList.remove('hidden')
    successText.classList.add('block')
}

function validateForm(event){
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '' || !emailRegex.test(email)) {
        addWarning();
    }else{
        inputSuccess();
    }
}