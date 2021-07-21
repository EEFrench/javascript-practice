const express = require('express');
const app =express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.get('/facts', function(req, res) {
    res.json([{text: 'Mr Ed\'s favorite color is orange'}, {text: 'He hates wearing shoes'}
    ]);
})

app.get('/', function(req, res) {
    res.send('Howdy');
})

