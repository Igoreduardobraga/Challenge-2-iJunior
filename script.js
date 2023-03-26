const form = document.getElementById('form')
const username = document.getElementById('input-name')
const cardNumber = document.getElementById('input-card-number')
const expDateMM = document.getElementById('input-exp-date-MM')
const expDateYY = document.getElementById('input-exp-date-YY')
const cvc = document.getElementById('input-cvc')

// Form Validation

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

})

function checkInputs(){

    const nameValue = username.value.trim();
    const cardNumberValue = cardNumber.value.trim();
    const expDateMMValue = expDateMM.value.trim();
    const expDateYYValue = expDateYY.value.trim();
    const cvcValue = cvc.value.trim();

    var sucess = 0;

    if(nameValue === ''){
        errorValidation(username, "Can't be blank");
    }
    else{
        if(/^[A-Za-z ]+$/.test(nameValue)){
            sucessValidation(username)
            sucess++;
        }
        else{
            errorValidation(username, "Wrong format, only letters and spaces!");
        }
    }

    if(cardNumberValue === ''){
        errorValidation(cardNumber, "Can't be blank");
    }
    else{
        if(isNaN(cardNumberValue.replace(/\s/g, ''))){
            errorValidation(cardNumber, 'Wrong format, only numbers!');
        }
        else{
            sucessValidation(cardNumber);
            sucess++;
        }
    }

    if(cvcValue === ''){
        errorValidation(cvc, "Can't be blank");
    }
    else{
        if(isNaN(cvcValue)){
            errorValidation(cvc, 'Wrong format, only numbers!');
        }
        else{
            sucessValidation(cvc);
            sucess++;
        }
    }

    if(expDateMMValue === ''){
        errorValidationExpDate(expDateMM, "Can't be blank");
    }
    else{
        if(isNaN(expDateMMValue.replace(/\s/g, ''))){
            errorValidationExpDate(expDateMM, 'Wrong format, only numbers!');
        }
        else{
            sucessValidationExpDate(expDateMM);
            sucess++;
        }
    }

    if (expDateYYValue === '') {
        errorValidationExpDate(expDateYY, "Can't be blank");
    } else {
        if(isNaN(expDateYYValue.replace(/\s/g, ''))){
            errorValidationExpDate(expDateYY, 'Wrong format, only numbers!');
        }
        else{
            sucessValidationExpDate(expDateYY);
            sucess++;
        }
    }

    if(sucess === 5)
        completed();
}

function completed(){
    document.querySelector('#form').style.visibility = 'hidden'
}

function errorValidation(input,message){
    const small = input.parentElement.querySelector('small');
    small.innerText = message;

    small.style.visibility = "visible"
    input.style.borderColor = "red";
}

function errorValidationExpDate(input,message){

    if(input === expDateMM){
        expDateMM.style.borderColor = 'red'
    }
    else{
        expDateYY.style.borderColor = 'red'
    }

    const small = input.parentElement.parentElement.querySelector('small')
    small.innerText = message
    small.style.visibility = "visible"
}

function sucessValidation(input){
    const small = input.parentElement.querySelector('small');
    small.style.visibility = "hidden"

    input.style.borderColor = "hsl(270, 3%, 87%)"
}

function sucessValidationExpDate(input){

    if(input === expDateMM){
        expDateMM.style.borderColor = "hsl(270, 3%, 87%)";
    }
    else{
        expDateYY.style.borderColor = "hsl(270, 3%, 87%)";
    }

    const small = input.parentElement.parentElement.querySelector('small');
    small.style.visibility = 'hidden'
}

// Update data card 

function updateCardNumber(e){
    document.querySelector('.front-card .card-number').innerText = e.target.value;
}

function updateName(e){
    document.querySelector('.front-card .card-name').innerText = e.target.value;
}

function updateExpDateMM(e){
    if(expDateYY === ''){
        document.querySelector('.front-card .card-exp-date').innerText = e.target.value + '/' + '00';
    }
    else{
        document.querySelector('.front-card .card-exp-date').innerText = e.target.value + '/' + expDateYY.value;
    }
}

function updateExpDateYY(e){
    if(expDateMM === ''){
        document.querySelector('.front-card .card-exp-date').innerText = '00' + '/' + e.target.value ;
    }
    else{
        document.querySelector('.front-card .card-exp-date').innerText = expDateMM.value + '/' + e.target.value;
    }
}

function updateCVC(e){
    document.querySelector('.card-back .card-cvc').innerText = e.target.value;
}

cardNumber.addEventListener("keyup", updateCardNumber);
cvc.addEventListener('keyup', updateCVC);
username.addEventListener('keyup', updateName);
expDateMM.addEventListener('keyup', updateExpDateMM)
expDateYY.addEventListener('keyup', updateExpDateYY)