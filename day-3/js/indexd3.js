document.title = 'Day 3 Daily';

const h1 = document.querySelector('h1');
h1.innerText = 'Name Game';


const nameInput = document.createElement('input');
nameInput.type = 'string';
nameInput.placeholder = 'Enter First Name';


const nameButton = document.createElement('button');
nameButton.innerHTML = 'Try it';






document.body.appendChild(nameInput);
document.body.appendChild(nameButton);

/*tipButton.addEventListener('click', function() {
    console.log('click');

    const total = Number(totalInput.value);
    const percent = Number(percentageInput.value);
    
   
    console.log(percent / 100 * total);
    h1.innerText = percent / 100 * total;
})*/

