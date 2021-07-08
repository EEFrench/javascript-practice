// TAKE-HOME-PLUS

// make string lists for adjectives, colors, nouns, adverbs, numbers, and plural nouns
const adjList = ['adorable', 'meaningless', 'quick', 'obnoxious', 'happy', 'old', 'young', 'friendly', 'meaningful', 'slimey', 'prickly', 'squishy', 'beautiful', 'ugly', 'slow', 'steady', 'playful', 'sad', 'angry', 'goofy', 'strange'];
const colorList = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'grey', 'black', 'white'];
const nounList = ['cat', 'sock', 'monkey', 'baby', 'bear', 'book', 'dog', 'paper', 'seal', 'shoe', 'shirt', 'hat', 'cookie', 'toy', 'mushroom', 'game', 'card', 'mask', 'vitamin', 'cereal', 'noodle', 'pillow'];
const adverbList = ['often', 'abnormally', 'absentmindedly', 'accidentally', 'actually', 'adventurously', 'afterwards', 'almost', 'always', 'annually', 'anxiously', 'arrogantly', 'awkwardly', 'bashfully', 'beautifully'];
const numList = ['30', '15', '10', '5', '2', '75', '243', '751', '3', '1', '4', '5', '6', '7', '8', '9', '10'];
const pluralNounList = ['books', 'tools', 'noodles', 'rocks', 'cookies', 'card', 'pretzels', 'towels', 'crackers', 'bottles'];

// create function that gets a random number between zero and a non-inclusive max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// assign words using getRandomInt function using list length as the max input
// Assign an adjective
let adj1 = adjList[getRandomInt(adjList.length)];
// Assign an adjective
let adj2 = adjList[getRandomInt(adjList.length)];
// Assign an adjective
let adj3 = adjList[getRandomInt(adjList.length)];
// Assign an adjective
let adj4 = adjList[getRandomInt(adjList.length)];
// Assign an adjective
let adj5 = adjList[getRandomInt(adjList.length)];
// Assign an adjective
let adj6 = adjList[getRandomInt(adjList.length)];
// Assign an adverb
let adverb = adverbList[getRandomInt(adverbList.length)];
// Assign a color
let color = colorList[getRandomInt(colorList.length)];
// Assign a noun
let noun1 = nounList[getRandomInt(nounList.length)];
// Assign a noun
let noun2 = nounList[getRandomInt(nounList.length)];
// Assign a noun
let noun3 = nounList[getRandomInt(nounList.length)];
// Assign a noun
let noun4 = nounList[getRandomInt(nounList.length)];
// Assign a noun
let noun5 = nounList[getRandomInt(nounList.length)];
// Assign a noun
let noun6 = nounList[getRandomInt(nounList.length)];
// Assign a number
let num = numList[getRandomInt(numList.length)];
// Assign a plural noun
let pnoun1 = pluralNounList[getRandomInt(pluralNounList.length)];

//Using template literals to plug in the values
let story = 'It has often been said that a dog is a man's best ${noun1}. Dogs are very ${adj1} and can be taught many ${adj2}
tricks. A dog can be trained to carry a ${noun2} in his mouth.
If you throw his ${noun3}, he will run and fetch it. Dogs
will also bark ${adverb} if someone tries to break into your
${noun4} during the night. One of the most popular canine pets
today is the ${noun5} Spaniel. Spaniels have curly ${color}
coats and ${adj3} ears. They also have very ${adj4}
dispositions and live to be ${num} years old. Other popular dogs
are ${adj5} Terriers, German ${pnoun1}, and the
${adj6} Poodle. Every ${noun6} should have a loyal dog.';

//Console log the completed story
console.log(story);

// END TAKE-HOME-PLUS