console.log('Starting app.');

// create package.json -> on terminal: npm init

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes');
const yargs = require('yargs');

// setup variables to call within command line tool below
const getTitle = {
    describe: 'Title of note',
    demand: true,
    alias: 't',
};
const getBody = {
    describe: 'Body of title',
    demand: true,
    alias: 'b',
};
// yargs command line tool
// in cmd run: node app.js add
// cmd run: node app.js --help 
// https://github.com/yargs/yargs/blob/HEAD/docs/api.md
const argv = yargs
.command('add', 'Add a new note',{
    // options object
    title: getTitle,
    body: getBody
})
.command('list', 'List all notes')
.command('read', 'read a note', {
    // options object
    title: getTitle
})
.command('remove', 'Remove note',{
    // options object
    title: getTitle
})
.help()
.argv;
//var command = process.argv[2];
var command = argv._[0];
console.log('Yargs', argv);
console.log('Command:', command)

switch (command)
{
    case 'add':
        console.log('adding');
        var note = notes.addNote(argv.title, argv.body);
        console.log(note)
        if (note == null){
            console.log(`Message from app.js. Title: ${argv.title} - duplicate title`)
        }
        else{
            console.log(`The title: ${argv.title} - was created`)
        }
        break;

    case 'list':
        console.log('listing');
        var allNotes = notes.getAll();
        console.log(allNotes);
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach((note) => notes.logNote(note));
        //notes.getAll(argv.title);
        break;

    case 'read':
        console.log("Read")
        // getNote 
        var readNote = notes.getNote(argv.title);
        console.log(readNote);
        // print messages if note found and if not doesn't exist
        if (readNote)
        {
            console.log("NOTE FOUND: ")
            notes.logNote(readNote);
        }
        // should return empty if none found
        else 
        {
            console.log("----")
            console.log("NOTE not FOUND: ")
            console.log("----")
        }
        break;

    case 'remove':
        console.log('removing');
        //notes.remove(argv.title);
        var noteRemoved = notes.remove(argv.title);
        // noteRemoved will return either true || False
        // conditional operator
        //noteremoved (condition) ? (if statement true) : (if statement false)
        var removeMessage = noteRemoved ? 'Note was removed' : 'Note not found';
        console.log(removeMessage);
        break;

    default:
        console.log('command not recognized');

}

// // get username
// var user = os.userInfo();
// // console.log(user.username)

// // create/write to file with hello world or hello username
// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err){
//     if (err){
//         console.log('Unable to write to file');
//     }
// });

// // test lodash
// console.log(_.isString('false'));
// console.log(_.isString('true'));