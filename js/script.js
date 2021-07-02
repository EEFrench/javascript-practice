//This is a single line comment
/*this would considered a multi-line comment
If you are a Dreamer
Come in
If you are a Dreamer, a Wisher, a Liar
A Hoper, a Prayer, a Magic Bean Buyer
If you are a Pretender come sit by my fire
For we have some flax golden tales to spin
Come in!
Come in!
-Shel Silverstein*/
let score = 50;
const strings = "orange";
const boolean = false;
score = 100;

const objects = {
    strings: strings,
    score:score,
    boolean: boolean,
    body:  {
        style: {
            backgroundColor: "red",
            color: "black"
        }
    }
}

const array =[strings, score, boolean]


document.body.style.backgroundColor = "purple";
document.body.style.color = strings;
document.body.style.fontFamily = "arial";
document.body.style.fontSize = score +"px"; 



function myFunction() {
    //var str = document.getElementById("word");
    //var str = "Supercalifragilisticexpialidocious";
    let str = document.getElementById("word").innerText;
    console.log(str)
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}


console.log("Call me Mr Ed");
console.log("I don't really have a favorite food...");
console.log("But if I was forced to make a choice it would be:")
console.log("No-Bake Cookies");