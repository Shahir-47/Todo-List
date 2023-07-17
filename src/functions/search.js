import { allNotes } from "../pages/notesUI";
const searchTask = (query, type) => {
    let tasks;
    if (type == 'list') {
        tasks = document.querySelectorAll('.todo-item');
    } else if (type == 'project') {
        tasks = document.querySelectorAll('.todo-project');
    } else {
        tasks = [];
    }
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskName = task.querySelector('h2').textContent.toLowerCase();
        const regex = new RegExp(`(${query.toLowerCase()})`, 'gi');

        task.querySelector('h2').innerHTML = taskName.replace(regex, '<span class="highlight">$1</span>');

        if (taskName.includes(query.toLowerCase())) {
            task.classList.remove('hide');  // Show task if it matches the search query
        } else {
            task.classList.add('hide');  // Hide task if it does not match the search query
        }
      }
};

const searchNote = (query) => {
    const notes = document.querySelectorAll('.note');
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const noteTitle = note.querySelector('.note-title').textContent.toLowerCase();
        const noteDescription = note.querySelector('.note-description').textContent.toLowerCase();
        const regex = new RegExp(`(${query.toLowerCase()})`, 'gi');

        note.querySelector('.note-title').innerHTML = noteTitle.replace(regex, '<span class="highlight">$1</span>');
        note.querySelector('.note-description').innerHTML = noteDescription.replace(regex, '<span class="highlight">$1</span>');

        if (noteTitle.includes(query.toLowerCase()) || noteDescription.includes(query.toLowerCase())) {
            note.classList.remove('hide');  // Show task if it matches the search query
        } else {
            note.classList.add('hide');  // Hide task if it does not match the search query
        }
      }
    allNotes(document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true);
};

export default searchTask;
export { searchNote };