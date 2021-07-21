const base_url='http://c0b23c3ae165.ngrok.io';
const factEndpoint ='/facts';
const userEndpoint = '/users';

fetch(base_url + factEndpoint).then (res => {
    return res.json();
}).then( function (facts){
    //console.log(facts[0]?.text);
    const factsLength = facts.length;
    const randomNumber = Math.random() * factsLength;
    const flooredNumber = Math.floor(randomNumber);
    alert(facts[flooredNumber].text);


})