//import express from 'express';
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// import the json file
let data = require('./views/actors.json');

// let express know we are going to use pug
app.set('view engine', 'pug');

// setup public folder to be accessed as root 
app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    // send a static message
    //res.send('index')

    // redirect page to jackie 
    res.redirect('/jackie')
});
// create page for jackie chan
app.get('/jackie', (req,res) => {
    res.render('index', data.actors[0])
});
// create page for jean-claude van damme
app.get('/jean', (req,res) => {
    res.render('index', data.actors[1])
});
// create page for sylvester stallone
app.get('/sylvester', (req,res) => {
    res.render('index', data.actors[2])
});
// create page for will smith
app.get('/will', (req,res) => {
    res.render('index', data.actors[3])
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});