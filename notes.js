const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body) =>{
    const notes = getAllNotes();
    //const duplicateNotes = notes.filter((note) => note.title == title)
    const dupliocateNote = notes.find((note) => note.title == title)
    debugger
    if(!dupliocateNote){
        notes.push({
            title:title,
            body:body
        })
        console.log('Note Added')
    }else{
        console.log('Note already taken')
    }
    
    saveNote(notes)
}

const removeNote = (title) =>{
    const notes = getAllNotes();
    const tempNotes = notes.filter((note) => note.title != title)

    if(notes > tempNotes){
        console.log(chalk.bgGreen('Note removed'))
    }else{
        console.log(chalk.bgRed('Note not found'))      
    }
    
    saveNote(tempNotes)
}

const listNotes = () =>{
    const objAllNotes = getAllNotes()
    console.log(chalk.bgGreen('List of Notes'))
    objAllNotes.forEach((note) => {
        console.log(chalk.blue(note.title))
    });
}

const readNote = (title) =>{
    const objAllNodes = getAllNotes()
    const note = objAllNodes.find((note) => note.title == title)
    if(note){
        console.log(note.title)
        console.log(note.body)
    }else{
        console.log('Title : '+title+' not found')
    }
}

const getAllNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');    
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }catch(e){
        return []
    }
}

const saveNote = function(notes){
    const dataJON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJON);    
}



module.exports = {
    addNote:addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote:readNote
}