
const express = require('express');
var app = express();

const fs = require('fs');

app.get('/players', (req, res) => {
    //res.send('Hello World');
    var players = fs.readFileSync('players.json');
    players = JSON.parse(players);
    res.send(players);
});

// listen on port 3000
app.listen(3000);