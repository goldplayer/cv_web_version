'use_strict';

const resultCalculation = document.getElementById('answer');
const FirstNumber = document.getElementById('first_number');
const SecondNumber = document.getElementById('second_number');
const submitBtn = document.getElementById('submit');
const plusbtn = document.getElementById('plus');
const minusbtn = document.getElementById('minus');
// const multibtn = document.getElementById('multi');
// const delimeterbtn = document.getElementById('delimeter');

let action = '+';


plusbtn.addEventListener('click', function(event){
    event.preventDefault();
    action = '+';
});

minusbtn.addEventListener('click', function(event){
    event.preventDefault();
    action='-'
});

// multibtn.onclick = function(){
//     action = '*'
// }

// delimeterbtn.onclick = function(){
//     action = '/'
// }


submitBtn.addEventListener('click', function(event){
    event.preventDefault();

    if(action == '+'){
        const sum = Number(FirstNumber.value) + Number(SecondNumber.value)
        resultCalculation.textContent = sum;
    }

    if(action == '-'){
        const sum  = Number(FirstNumber.value) - Number(SecondNumber.value)
        resultCalculation.textContent = sum;
    }
});

