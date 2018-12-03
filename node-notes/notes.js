console.log('Starting notes');

const fs = require('fs');
// function
var fetchNotes = () => {
    // reason we do this is try to read if not then continue
    // to create new file 'notes-data.json' and add the info
    try{
        // read the file and append new information
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } 
    catch(e){
        // nothing in here because i don't want any errors to spit out
        return[];
    }
};
// function
var saveNotes = (notes) => {
    // create file and pass string of notes
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    //console.log(`Title: ${title}, Body: ${body}`)
    //var notes = []; // create an array
    var notes = fetchNotes(); // call the function and return JSON.parse
    // represent new note
    var note = { 
        title,
        body
    };
    // check if title exists already; function with 1 condition
    var duplicateNotes = notes.filter((note) => note.title === title);
    // if 0 then title does not exist then push new info and save file
    if (duplicateNotes.length === 0 ){
        // grab new title, body and add to the end of notes array
        notes.push(note);
        // call the function with notes information
        saveNotes(notes);
        return note;
    }
    else{
        console.log(duplicateNotes.length);
        console.log(`${title} -- already exists.`)
    }

}

var getAll = (title) => {
    //console.log(`Getting Title: ${title}.`);
    return fetchNotes();
}

var getNote = (title) => {
    console.log(`Getting Title: ${title}.`)
    // fetch notes
    var notes = fetchNotes();
    // notes .filter to only return titles that match what is passed in arg
    var matchedNote = notes.filter((note) => note.title === title);
    // return the note...should be the array [0]..bcuz it will be the only result
    return matchedNote[0];
}

var getRemove = (title) => {
    //console.log(`Removing Title: ${title}.`)
    // fetch notes
    var notes = fetchNotes();
    // filter notes, removing the one with title of argument
    var filteredNotes = notes.filter((note) => note.title !== title);
    // save new notes array
    saveNotes(filteredNotes);
    // check if != means true...means element was removed
    // if equal means...false (meaning no item removed)
    return notes.length !== filteredNotes.length;
}

// DRY - DON'T REPEAT YOURSELF...for the output message on app.js
function logNote (note) {
    // break on this line and use repl to output note
    // use read command with --title
    // creating a debugger and running in debugger mode
    // debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    remove: getRemove,
    logNote
};