
const express = require('express');
var app = express();
// get handle-bars started
const exphbs = require('express-handlebars');
const path = require('path');

// setting up engine to handlebars and specifying my main layout file
// other option, you will need a folder views/layouts:
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs({
    defaultLayout: 'main', 
    //layoutsDir: 'views/mainLayout'
    layoutsDir: path.join(__dirname, 'views/mainLayout')
    //partialsDir: path.join(__dirname, 'view/dirName') //for partial folder ex: header/footer pages
    //extname: '.html' //change my .handlebars files to instead use '.html' as file extensions
}));

app.set('view engine', 'handlebars');


const fs = require('fs');

// rounting for index page
app.get('/', (req, res) => {
    res.render('index', {title: 'homePage'})
})

// rounting for players page
app.get('/players', (req, res) => {
    //res.send('hello world');
    let players = fs.readFileSync('players.json');
    playersInfo = JSON.parse(players);
    // send the json objects to players.handlebars
    res.render('players', playersInfo)//{title: 'PlayersPage', firstName: 'anthony', lastName: 'Gonzalez'});
})

// app.get('/players', (req, res) => {
//     //res.send('Hello World');
//     var players = fs.readFileSync('players.json');
//     players = JSON.parse(players);
//     res.send(players);
// })

// listen on port 3000
app.listen(3000, () => {
    console.log('Express server started at port 3000')
});