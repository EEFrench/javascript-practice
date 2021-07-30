const form =document.createElement('form');
document.body.appendChild(form);
// const emailInput =document.createElement('input');
// form.appendChild(emailInput);
// emailInput.placeholder = "Enter Username";

const usernameInput = addInput('input', 'enter Name');
const emailInput = addInput('input', 'Enter Email')


function addInput (type, placeholder){
    const input = document.createElement(type);
    form.appendChild(input);
    emailInput.placeholder = "Enter Username";
}

function addButton (text){
    const input = document.createElement(button);
    form.appendChild(input);
    emailInput.innerHtml = text;
}








// const firstNumber = document.createElement("input");
// firstNumber.type = "number";
// firstNumber.placeholder = "First Number";

// const secondNumber = document.createElement("input");
// secondNumber.type = "number";
// secondNumber.placeholder = "Second Number";

// document.body.appendChild(firstNumber);
// document.body.appendChild(secondNumber);
// document.body.appendChild(compareButton);
