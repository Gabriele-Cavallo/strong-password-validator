const minCharacters = document.getElementById('min-characters');
const capitalLetter = document.getElementById('capital-letter');
const number = document.getElementById('number');
const specialCharacter = document.getElementById('special-character');
const minCharactersIcon = document.getElementById('min-characters-icon');
const capitalLetterIcon = document.getElementById('capital-letter-icon');
const numberIcon = document.getElementById('number-icon');
const specialCharacterIcon = document.getElementById('special-character-icon');
const passwordStrengthValue = document.getElementById('password-strength-value');
const userInput = document.getElementById('user-pswd');
const buttonContainer = document.getElementById('btn-container');
const card = document.getElementById('card');

userInput.addEventListener('input', () => {
    const password = userInput.value.trim();
    let passwordStrength = 0;

    if(password === ''){
        passwordStrength = 0;
    }

    if(password.length >= 9) {
        passwordStrength++;
        minCharacters.style.color = 'yellowgreen';
        minCharactersIcon.classList.remove('fa-xmark');
        minCharactersIcon.classList.add('fa-check');
    }else{
        minCharacters.style.color = 'grey';
        minCharactersIcon.classList.remove('fa-check');
        minCharactersIcon.classList.add('fa-xmark');
    }

    if(/[A-Z]/.test(password)) {
        passwordStrength++;
        capitalLetter.style.color = 'yellowgreen';
        capitalLetterIcon.classList.remove('fa-xmark');
        capitalLetterIcon.classList.add('fa-check');
    }else{
        capitalLetter.style.color = 'grey';
        capitalLetterIcon.classList.remove('fa-check');
        capitalLetterIcon.classList.add('fa-xmark');
    }

    if(/[0-9]/.test(password)) {
        passwordStrength++;
        number.style.color = 'yellowgreen';
        numberIcon.classList.remove('fa-xmark');
        numberIcon.classList.add('fa-check');
    }else{
        number.style.color = 'grey';
        numberIcon.classList.remove('fa-check');
        numberIcon.classList.add('fa-xmark');
    }

    if(/\W/.test(password)){
        passwordStrength++;
        specialCharacter.style.color = 'yellowgreen';
        specialCharacterIcon.classList.remove('fa-xmark');
        specialCharacterIcon.classList.add('fa-check');
    }else{
        specialCharacter.style.color = 'grey';
        specialCharacterIcon.classList.remove('fa-check');
        specialCharacterIcon.classList.add('fa-xmark');
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


