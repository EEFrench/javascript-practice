document.title = 'Daily 4';

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
    console.log('click');

    const total = Number(firstNumber.value);
    const percent = Number(secondNumber.value);
    
   
    console.log(percent / 100 * total);
    h1.innerText = percent / 100 * total;
})

