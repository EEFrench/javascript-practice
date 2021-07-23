const BASE_URL = 'http://c0b23c3ae165.ngrok.io';
const factEndpoint ='/facts';
const userEndpoint = '/users';

fetch(BASE_URL   + factEndpoint).then (res => {
    return res.json();
}).then( function (facts){
    //console.log(facts[0]?.text);
    const factsLength = facts.length;
    const randomNumber = Math.random() * factsLength;
    const flooredNumber = Math.floor(randomNumber);
    alert(facts[flooredNumber].text);


})

