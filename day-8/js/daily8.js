//OBJECT DOG
const dog = {
    //PROPERTIES NAMING AND DESCRIBING THE DOG
    name: "Watson",
    breed: "Bassethound",
    color: "black, brown & white",
    disposition: "lazy",
    age: 9,
    //PROPERTY "SPEAK" AND ASSIGNED FUNCTION TO MAKE DOG BARK
    speak: function (){
        alert ("VOOOFFF!")
    },
    //PROPERTY "CARROT" ASSIGNED FUNCTION TO MAKE DOG NOD
    carrot: function(){
        alert ("*Nods & paws at the air*");
    }
};
//ADD INFO TO DOCUMENT


//CREATE BUTTON TO MAKE WATSON BARK
const WatsonSpeak = document.createElement("button");
WatsonSpeak.innerHTML = "Speak, Watson... Speak!";

//CREATE BUTTON TO MAKE WATSON NOD FOR CARROT
const wantCarrot = document.createElement("button");
wantCarrot.innerHTML = "Does Watson want a carrot?";

//ADD BUTTONS TO DOC
document.body.appendChild(WatsonSpeak);
document.body.appendChild(wantCarrot);
//CALL ON SPEAK FUNCTION
WatsonSpeak.addEventListener('click', dog.speak)
//CALL ON CARROT FUNCTION
wantCarrot.addEventListener('click', dog.carrot)

//ADD DETAILS
const dogName = document.getElementById('name');
const dogBreed = document.getElementById('breed');
const dogFur = document.getElementById('color');
const dogDisposition = document.getElementById('disposition')


//INSERT DETAILS INTO DOC
dogName.innerText = "My dog's name is " + dog.name;
dogBreed.innerText = "He's a " + dog.age + " year old " + dog.disposition + " " + dog.breed + " with " + dog.color + " fur."






console.log(dog)
