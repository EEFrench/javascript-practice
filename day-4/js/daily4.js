//DAY 4 DAILY CHALLENGE
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

document.title = 'Day 4';

const h1 = document.querySelector('h1');
h1.innerText = 'Compare Numbers';


const firstNumber = document.createElement('input');
firstNumber.type = 'number';
firstNumber.placeholder = 'First Number';

const secondNumber = document.createElement('input');
secondNumber.type = 'number';
secondNumber.placeholder = 'Second Number';


const compareButton = document.createElement('button');
compareButton.innerHTML = 'Compare';



document.body.appendChild(firstNumber);
document.body.appendChild(secondNumber);
document.body.appendChild(compareButton);



compareButton.addEventListener('click', function() {
     //console.log('click');
     compare();
    
})

const number1 = Number(firstNumber.value);
const number2 = Number(secondNumber.value);

function compare(){
    if (number1 > number2){
        alert(number1 = " is larger then " + number2);
    }
    else if (number2 > number1) {
        alert(number2 + " is larger then " + number1);
    }
    else if (number1 == number2){
        alert(number1 + " is equal to " + number2)
    }
}




