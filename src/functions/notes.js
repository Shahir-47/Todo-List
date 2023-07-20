import { v4 as uuidv4 } from 'uuid';
import { allNotes } from '../pages/notesUI.js';
import { storage } from './storage.js';

const notes = (() => {
    // get notes from localStorage
    let notesList = storage.getNotes();
    
    // update notesList periodically
    const updateNotesList = () => {
        notesList = storage.getNotes();
    }

    // add a note to notesList
    const addNote = (title, description) => {
        let imp = false;
        // check if the notes list is important or not by seeing if its in the starred notes page or not
        if (document.querySelector('.notes-list')) {
            imp = document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true;
        }

        let noteList = notesList[0].list;
        let id = 'note' + '~' + uuidv4(); // create a unique id for the note
        let note = {title, description, starred: imp, id}; // create the note object
        noteList.push(note); // add the note to the notes list
        storage.saveNotes(notesList); // save the notes list to localStorage
        updateNotesList(); // update the notes list
        // if the user is in the starred notes page, display the starred notes
        if (document.querySelector('.notes-list')) {
            allNotes(imp);
        }
    }

    // edit a note in notesList
    const editNote = (id, title, description) => {
        let noteList = notesList[0].list;
        let note = noteList.filter(note => note.id === id)[0];
        note.title = title;
        note.description = description;
        storage.saveNotes(notesList); // save the notes list to localStorage
        updateNotesList(); // update the notes list
    }

    // delete a note from notesList
    const deleteNote = (id) => {
        // check which notes page the user is in
        let imp = document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true;
        let noteList = notesList[0].list;
        noteList = noteList.filter(note => note.id !== id);
        notesList[0].list = noteList;
        storage.saveNotes(notesList); // save the notes list to localStorage
        updateNotesList(); // update the notes list
        // if the user is in the starred notes page, display the starred notes after deleting the note
        allNotes(imp);
    }

    // star a note in notesList
    const starNote = (id) => {
        // check which notes page the user is in
        let imp = document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true;
        let noteList = notesList[0].list;
        let note = noteList.filter(note => note.id === id)[0];
        note.starred = !note.starred;
        storage.saveNotes(notesList); // save the notes list to localStorage
        updateNotesList(); // update the notes list
        allNotes(imp); // display the starred notes
    }

    return { addNote, editNote, deleteNote, starNote }

})();

export { notes }