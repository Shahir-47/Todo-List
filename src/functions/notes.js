import { storage } from './storage';
import { v4 as uuidv4 } from 'uuid';
import { allNotes } from '../pages/notesUI';

const notes = (() => {
    let notesList = storage.getNotes();
    
    const updateNotesList = () => {
        notesList = storage.getNotes();
    }

    const addNote = (title, description) => {
        let imp = false;
        
        if (document.querySelector('.notes-list')) {
            imp = document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true;
        }

        let noteList = notesList[0].list;
        let id = 'note' + '~' + uuidv4();
        let note = {title, description, starred: imp, id};
        noteList.push(note);
        storage.saveNotes(notesList);
        updateNotesList();

        if (document.querySelector('.notes-list')) {
            allNotes(imp);
        }
    }

    const editNote = (id, title, description) => {

        let noteList = notesList[0].list;
        let note = noteList.filter(note => note.id === id)[0];
        note.title = title;
        note.description = description;
        storage.saveNotes(notesList);
        updateNotesList();

        //displayNote here
    }

    const getNotesList = () => {
        return notesList[0].list;;
    }

    const deleteNote = (id) => {
        let imp = document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true;
        let noteList = notesList[0].list;
        noteList = noteList.filter(note => note.id !== id);
        notesList[0].list = noteList;
        storage.saveNotes(notesList);
        updateNotesList();
        allNotes(imp);
    }

    const starNote = (id) => {
        let imp = document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true;
        let noteList = notesList[0].list;
        let note = noteList.filter(note => note.id === id)[0];
        note.starred = !note.starred;
        storage.saveNotes(notesList);
        updateNotesList();
        allNotes(imp);
    }

    return { addNote, editNote, getNotesList, deleteNote, starNote }

})();

export { notes }