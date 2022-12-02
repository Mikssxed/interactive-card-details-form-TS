const inputNumber = document.querySelectorAll('input[type="number"]');
const inputName = document.querySelector('input[type="text"]');
const inputCardNumber = document.getElementById('cardNumber');
let i = 0;
const allInputs = document.querySelectorAll('input');
const allP = document.querySelectorAll('p');
const button = document.querySelector('#submit');
const number = document.getElementById('number');
const chName = document.getElementById('name');
const date = document.getElementById('date');
const cvc = document.getElementById('cvc');
const month = document.getElementById('cardMonth');
const year = document.getElementById('cardYear');
const form = document.querySelector('form');
const completed = document.getElementById('completed')

const freeSpace = () => {
    if (inputCardNumber.value.length < 17 && inputCardNumber.value.length > 0 && inputCardNumber.value.length % 4 == i) {
        inputCardNumber.value += " ";
        i++;
    } else if (inputCardNumber.value.length > 17){
        i = 0;
    }
}

const validate = () => {
    for (let i = 0; i <= 4; i++){
        if (allInputs[i].value == '') {
            allP[i].innerHTML = "Can't be blank";
            allInputs[i].style.border = '1px solid var(--primary-color2)';
        } else if (/\d/.test(allInputs[1].value) == false) {
            allP[1].innerHTML = "Wrong format, numbers only";
        } else {
            allP[i].innerHTML = "";
            allInputs[i].style.border = '1px solid var(--neutral-color2)';
        }
    }
}
const transfer1 = () => chName.innerHTML = allInputs[0].value;
const transfer2 = () => number.innerHTML = inputCardNumber.value;
const transfer3 = () => month.innerHTML = allInputs[2].value;
const transfer4 = () => year.innerHTML = allInputs[3].value;
const transfer5 = () => cvc.innerHTML = allInputs[4].value;

const submit = () => {
    if (allInputs[0].style.border !== '1px solid var(--primary-color2)'&&
    allInputs[1].style.border !== '1px solid var(--primary-color2)'&&
    allInputs[2].style.border !== '1px solid var(--primary-color2)'&&
    allInputs[3].style.border !== '1px solid var(--primary-color2)'&&
    allInputs[4].style.border !== '1px solid var(--primary-color2)') {
        form.style.display = 'none';
        completed.style.display = 'flex';
    }
    
}
inputCardNumber.addEventListener('keydown', freeSpace);
button.addEventListener('click', validate);
inputCardNumber.addEventListener('keyup', transfer2);
allInputs[0].addEventListener('keyup', transfer1);
allInputs[2].addEventListener('keyup', transfer3);
allInputs[3].addEventListener('keyup', transfer4);
allInputs[4].addEventListener('keyup', transfer5);
button.addEventListener('click', submit);
