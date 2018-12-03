// creating a json object

// var obj = {
//     name: 'Anthony'
// };
// conver JSON obj to a string
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// // convert string to a JSON obj
// var personString = '{"name": "Kevin", "age": "22"}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'some title',
    body: 'some body'
}

// convert to string "originalNoteString"
var originalNoteString = JSON.stringify(originalNote);
// write file to new JSON file
fs.writeFileSync('notes.json', originalNoteString)
// read JSON file
var noteString = fs.readFileSync('notes.json');
// convert back to obj "note"
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);