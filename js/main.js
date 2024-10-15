const minCharacters = document.getElementById('min-characters');
const capitalLetter = document.getElementById('capital-letter');
const number = document.getElementById('number');
const specialCharacter = document.getElementById('special-character');
const passwordStrengthValue = document.getElementById('password-strength-value');
const userInput = document.getElementById('user-pswd');
const buttonContainer = document.getElementById('btn-container');
const card = document.getElementById('card');

userInput.addEventListener('input', () => {
    const password = userInput.value;
    let passwordStrength = 0;

    if(password === ''){
        passwordStrength = 0;
    }

    if(password.length >= 9) {
        passwordStrength++;
        minCharacters.style.color = 'yellowgreen';
        minCharacters.innerHTML = '<i class="fa-solid fa-check"></i> Almeno 9 Caratteri'
    }else{
        minCharacters.style.color = 'grey';
        minCharacters.innerHTML = '<i class="fa-solid fa-xmark"></i> Almeno 9 Caratteri'
    }

    if(/[A-Z]/.test(password)) {
        passwordStrength++;
        capitalLetter.style.color = 'yellowgreen';
        capitalLetter.innerHTML = '<i class="fa-solid fa-check"></i> Almeno una maiuscola'
    }else{
        capitalLetter.style.color = 'grey';
        capitalLetter.innerHTML = '<i class="fa-solid fa-xmark"></i> Almeno una maiuscola'
    }

    if(/[0-9]/.test(password)) {
        passwordStrength++;
        number.style.color = 'yellowgreen';
        number.innerHTML = '<i class="fa-solid fa-check"></i> Almeno un numero'
    }else{
        number.style.color = 'grey';
        number.innerHTML = '<i class="fa-solid fa-xmark"></i> Almeno un numero'
    }

    if(/[!@#$%^&*(),.?":{}|<>]/.test(password)){
        passwordStrength++;
        specialCharacter.style.color = 'yellowgreen';
        specialCharacter.innerHTML = '<i class="fa-solid fa-check"></i> Almeno un carattere speciale'
    }else{
        specialCharacter.style.color = 'grey';
        specialCharacter.innerHTML = '<i class="fa-solid fa-xmark"></i> Almeno un carattere speciale'
    }

    if(passwordStrength === 1){
        passwordStrengthValue.style.backgroundColor = 'red';
        passwordStrengthValue.style.width = '25%';
        buttonContainer.style.opacity = 0;
        buttonContainer.innerHTML = '';
    }else if(passwordStrength === 2){
        passwordStrengthValue.style.backgroundColor = 'orange';
        passwordStrengthValue.style.width = '50%';
        buttonContainer.style.opacity = 0;
        buttonContainer.innerHTML = '';
    }else if(passwordStrength === 3){
        passwordStrengthValue.style.backgroundColor = 'yellow';
        passwordStrengthValue.style.width = '75%';
        buttonContainer.style.opacity = 0;
        buttonContainer.innerHTML = '';
    }else if(passwordStrength === 4){
        passwordStrengthValue.style.backgroundColor = 'yellowgreen';
        passwordStrengthValue.style.width = '100%';
        buttonContainer.innerHTML = '<button id="btn-confirm">Confirm</button>';
        buttonContainer.style.opacity = 1;

        const buttonConfirm = document.getElementById('btn-confirm');
        buttonConfirm.addEventListener('click', () => {
            card.innerHTML = '<h1>Password salvata!</h1>';
        })
    }else{
        passwordStrengthValue.style.backgroundColor = '';
        passwordStrengthValue.style.width = '0%';
    }
})


