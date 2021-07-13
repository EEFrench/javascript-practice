//DAY 4 DAILY CHALLENGE
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number

document.title = "Day 4";

const h1 = document.querySelector("h1");
h1.innerText = "Compare Numbers";

const firstNumber = document.createElement("input");
firstNumber.type = "number";
firstNumber.placeholder = "First Number";

const secondNumber = document.createElement("input");
secondNumber.type = "number";
secondNumber.placeholder = "Second Number";

const compareButton = document.createElement("button");
compareButton.innerHTML = "Compare";

document.body.appendChild(firstNumber);
document.body.appendChild(secondNumber);
document.body.appendChild(compareButton);

const numberOne = Number(firstNumber.value);
const numberTwo = Number(secondNumber.value);

compareButton.addEventListener("click", function () {
  console.log(numberOne)
  console.log(firstNumber.value)
  console.log(numberTwo)
  console.log(secondNumber.value)
  //compare();
  if (numberOne > numberTwo) {
    alert((numberOne = " is larger then " + numberTwo));
  } else if (numberTwo > numberOne) {
    alert(numberTwo + " is larger then " + numberOne);
  } else if (numberOne == numberTwo) {
    alert(numberOne + " is equal to " + numberTwo);
  }
});

// function compare() {
//   if (numberOne > numberTwo) {
//     alert((numberOne = " is larger then " + numberTwo));
//   } else if (numberTwo > numberOne) {
//     alert(numberTwo + " is larger then " + numberOne);
//   } else if (numberOne == numberTwo) {
//     alert(numberOne + " is equal to " + numberTwo);
//   }
// }


// function compare() {
//   if (firstNumber.value > secondNumber.value) {
//     alert((firstNumber.value = " is larger then " + secondNumber.value));
//   } else if (secondNumber.value > firstNumber) {
//     alert(secondNumber.value + " is larger then " + firstNumber.value);
//   } else if (firstNumber.value == secondNumber.value) {
//     alert(firstNumber.value + " is equal to " + secondNumber.value);
//   }
// }





// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number