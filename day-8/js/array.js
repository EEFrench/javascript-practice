const array =[];
let answer = null;


//ADDS TO BACK OF ARRAY
array.push(1);

array.push(true);


array.pop();

answer = {
    0: 1, 
    1: true, 
    length:2, 
    push: function(item) {
        answer[answer.length] = item;
        answer.link++;
        co
    },
    pop: function(item){
        answer.link--;
        delete answer[answer.length];
        
    }

};

function addToFront(arr, item){
    //ADD TO BEGINNING OF ARRAY
    array.unshift(item);
}

//REMOVE FIRST ITEM
array.shift();



addToFront(array, 'pure')

array.push('one', 2, true, false, 0);

//CAN ADD OR REMOVE ITEMS IN AN ARRAY
array.splice(2, 0, 'two', 'three')

// array.forEach( function(item, index , self){
//     console.log(item, index,self);
// });


// for(let index =0; index < 1; index++) {

//     console.log()
// }

console.log(array, answer);