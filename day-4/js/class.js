
/*IF
if (true) {
    console.log("this code runs if true")
}

//IF /ELSE
if (true) {
    console.log("this code runs if true")
}else (true) {
    console.log("This code runs if fals")
}

//IF /ELSE /ELSE IF
if (true) {
    console.log("this code runs if true")
}else if (true) {
    console.log("this is the second condition")
}else if (true) {
    console.log("this is the sthird condition")
}*/

document.addEventListener('click', function(){
    let favFood = prompt('what\'s your favorite food?');

    switch(favFood.toLowerCase()){
        case 'pizza':
            console.log('pizza is pretty good');
            break;
    
        case 'burgers':
            console.log('burgers are pretty good');
            break;
    
        case 'potato':
            console.log('potato is life');
            break;
        
        default:
            console.log('your opinion is wrong');
    }
})
