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
    carrot: function(){
        alert ("*Watson nodds & paws at the air*");
    }
};

//CREATE BUTTON TO MAKE WATSON BARK
const WatsonSpeak = document.createElement("button");
WatsonSpeak.innerHTML = "Speak, Watson... Speak!";

//CREATE BUTTON TO MAKE WATSON BARK
const wantCarrot = document.createElement("button");
wantCarrot.innerHTML = "Does Watson want a carrot?";

//ADD BUTTON TO DOC
document.body.appendChild(WatsonSpeak);
document.body.appendChild(wantCarrot);
//CALL ON SPEAK FUNCTION
WatsonSpeak.addEventListener('click', dog.speak, dog.speak, dog.speak)
wantCarrot.addEventListener('click', dog.carrot)






console.log(dog)
