import { storage } from './storage';
import { v4 as uuidv4 } from 'uuid';

const notes = (() => {
    let notesList = storage.getNotes();
    
    const updateNotesList = () => {
        notesList = storage.getNotes();
    }

    const addNote = (title, description) => {
        let noteList = notesList[0].list;
        let starred = false;
        let id = 'note' + '~' + uuidv4();
        let note = {title, description, starred, id};
        noteList.push(note);
        storage.saveNotes(notesList);
        updateNotesList();

        //displayNote here
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
        let noteList = notesList[0].list;
        noteList = noteList.filter(note => note.id !== id);
        notesList[0].list = noteList;
        storage.saveNotes(notesList);
        updateNotesList();
    }

    const starNote = (id) => {
        let noteList = notesList[0].list;
        let note = noteList.filter(note => note.id === id)[0];
        note.starred = !note.starred;
        storage.saveNotes(notesList);
        updateNotesList();
    }

    return { addNote, editNote, getNotesList, deleteNote, starNote }

})();