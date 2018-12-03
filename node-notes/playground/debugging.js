// debuggin
// cmd: node inspect playground/debugging.js
// cmd: list(10)    // this gives you a list of the 10 lines before/after from your code
// cmd: n           // next line
// cmd: c           // continue/execute till end of the code
// cmd: repl        // revaluate print loop
// cmd: nodemon inspect app.js read --title="secret" // use nodemon to refresh terminal

// debug via chrome dev tools, not terminal chrome://inspect
// node --inspect-brk playground/debugging.js  

var person = {
    name: "Anthony"
};

person.age = 30;

// create a custom debugger break...press c then it stops here
//debugger;

person.name = "mike";

console.log(person);