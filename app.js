const noteObj = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')


yargs.command({
    command: 'add',
    description: 'Adding a new note!',
    builder:{
        title:{
            describe:'New Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'New Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteObj.addNote(argv.title,argv.body)
    }
    
})


yargs.command({
    command: 'remove',
    description: 'Removing a note!',
    builder:{
        title:{
            describe:'New Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteObj.removeNote(argv.title)
    } 
})

yargs.command({
    command: 'list',
    description: 'List all the notes!',
    handler(argv){
        noteObj.listNotes()
    }
})

yargs.command({
    command: 'read',
    description: 'Reading a note!',
    builder:{
        title:{
            describe:'New Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteObj.readNote(argv.title)
    }
})

yargs.parse()

