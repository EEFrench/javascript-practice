// for (let i = 1; i <= 100; i++) {
// }
// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// }

// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (i % 3 === 0) {
//     console.log("Fizz");
// }

// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (i % 3 === 0) {
//     console.log("Fizz");
// } else if (i % 5 === 0) {
//     console.log("Buzz");
// }

// if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
// } else if (i % 3 === 0) {
//     console.log("Fizz");
// } else if (i % 5 === 0) {
//     console.log("Buzz");
// } else {
//     console.log(i);
// }

function fizzbuzz(){
    //DEFINING STARTING & ENDING NUMBER AND 
    for(let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
      }else if (i % 3 === 0){
        console.log("Fizz");
      }else if (i % 5 === 0){
        console.log("Buzz");
      }else{
        console.log(i);
      }
    }
  }

  fizzbuzz()