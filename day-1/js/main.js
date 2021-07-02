const myButton = document.querySelector('.this-button');

myButton.style.color = 'orange';
myButton.style.fontSize = '75px';

myButton.innerText = 'Changed';
myButton.innerHTML = 'Different';

myButton.addEventListener('mouseout', function(){
    alert('Ahoy')
});