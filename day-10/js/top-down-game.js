const second = 1000;

const mytime = setInterval(function() {
        console.log('It. Is. TIME...')
    }, 3 * second);

setTimeout ( ()=> {
    clearInterval(mytime);
}, 18 * second);



