// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name



function  myFunction (){
    Name ();
    SirName ();
    BDay ();
}

function  Name (){
    var firstName = prompt("What's Your First Name?");
    console.log (firstName); 
    if (firstName == "") {
        Name ();
    }
  }
 
function  SirName (){
    var lastName = prompt("What's Your Last Name?");
    if (lastName =="") {
        SirName ();
    }    
    alert("Your last name is " + lastName + ".")
}

/*function Really (){
    if (confirm( SirName ())) {
    } else {
      alert ("Really? What's your first name?");
    }
  }*/

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday

function  BDay (){
    var birthday = prompt("What's Your Last Name?");
    if (birthday =="") {
        BDay ();
    }
    confirm ("Is your birthday " + birthday + "?")
    alert ("Your birthday is " + birthday + "! When's the party?")
}


