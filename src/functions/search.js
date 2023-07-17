import noTask from '../assets/img/taskSearch.svg';
import projectSearch from '../assets/img/folderSearch.svg';
import noNote from '../assets/img/noNote.svg';
import { displayTheRightPage } from './project';
import { allProject } from '../pages/projectUI';
import { allNotes } from '../pages/notesUI';

let noItem = document.querySelector('.no-item'); // Get the existing noItem element

// filter project or todo items based on the search query and highlight the matching text
const searchTask = (query, type) => {
    let tasks; // List of tasks
    let matchFound = false; // Flag to track if a match is found
    let todoList; // Todo list container
    let picSrc; // Source of the no-result icon
    let picText; // Text of the no-result icon
    if (type == 'list') {
        picSrc = noTask;
        picText = 'No tasks found!';
        todoList = document.querySelector('.todo-list'); // Todo list container
    } else if (type == 'project') {
        picSrc = projectSearch;
        picText = 'No projects found!';
        todoList = document.querySelector('.todo-list-project'); // Project list container
    }
    // see if it is a project list or a todo list
    if (type == 'list') {
        tasks = document.querySelectorAll('.todo-item');
    } else if (type == 'project') {
        tasks = document.querySelectorAll('.todo-project');
    } else {
        tasks = [];
    }
    // loop through all the tasks
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        // lower case for case insensitive search
        const taskName = task.querySelector('h2').textContent.toLowerCase();
        // regex to highlight the matching text
        const regex = new RegExp(`(${query.toLowerCase()})`, 'gi');

        // add the highlight span class to the matching text
        task.querySelector('h2').innerHTML = taskName.replace(regex, '<span class="highlight">$1</span>');

        if (taskName.includes(query.toLowerCase())) {
            task.classList.remove('hide');  // Show task if it matches the search query
            matchFound = true; // Set flag to true if a match is found
        } else {
            task.classList.add('hide');  // Hide task if it does not match the search query
        }
    }

    // Check if no match is found and show/hide no-result icon
    if (!matchFound) {
        console.log();
        if (query !== '') {
            if (!document.querySelector('.no-item')) {
                noItem = document.createElement('div');
                noItem.classList.add('no-item');
                todoList.classList.add('no-item');
                const noItemIcon = document.createElement('img');
                noItemIcon.alt = 'No results icon';
                noItemIcon.draggable = false;
                const noItemText = document.createElement('p');
                noItemIcon.src = picSrc;
                noItemText.textContent = picText;
                noItem.appendChild(noItemIcon);
                noItem.appendChild(noItemText);
                todoList.appendChild(noItem);
            } else {
                let noItem = document.querySelector('.no-item');
                noItem.classList.remove('hide');
                noItem.classList.add('no-item');
                todoList.classList.add('no-item');
                noItem.querySelector('img').src = picSrc;
                noItem.querySelector('p').textContent = picText;
            }
        } else {
            if (type == 'list') {
                displayTheRightPage();
            } else if (type == 'project') {
                let imp = document.querySelector('.todo-list-project').getAttribute('starred') == 'false' ? false : true;
                allProject(imp);
            }

        }
    } else if (noItem) {
        todoList.classList.remove('no-item');
        noItem.classList.add('hide'); // Hide existing no-result icon if a match is found
    }
};

// filter notes based on the search query and highlight the matching text
const searchNote = (query) => {
    let matchFound = false; // Flag to track if a match is found
    let todoList = document.querySelector('.notes-list'); // Todo list container
    const notes = document.querySelectorAll('.note');
    // loop through all the notes
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        // lower case for case insensitive search
        const noteTitle = note.querySelector('.note-title').textContent.toLowerCase();
        const noteDescription = note.querySelector('.note-description').textContent.toLowerCase();
        // regex to highlight the matching text
        const regex = new RegExp(`(${query.toLowerCase()})`, 'gi');

        // add the highlight span class to the matching text
        note.querySelector('.note-title').innerHTML = noteTitle.replace(regex, '<span class="highlight">$1</span>');
        note.querySelector('.note-description').innerHTML = noteDescription.replace(regex, '<span class="highlight">$1</span>');

        // show or hide the note based on the search query
        if (noteTitle.includes(query.toLowerCase()) || noteDescription.includes(query.toLowerCase())) {
            note.classList.remove('hide');  // Show task if it matches the search query
            matchFound = true; // Set flag to true if a match is found
        } else {
            note.classList.add('hide');  // Hide task if it does not match the search query
        }
      }

          // Check if no match is found and show/hide no-result icon
    if (!matchFound) {
        if (query !== '') {
            if (!document.querySelector('.no-item')) {
                noItem = document.createElement('div');
                noItem.classList.add('no-item');
                noItem.classList.add('no-item-icon');
                todoList.classList.add('no-item');
                const noItemIcon = document.createElement('img');
                noItemIcon.alt = 'No results icon';
                noItemIcon.draggable = false;
                const noItemText = document.createElement('p');
                noItemIcon.src = noNote;
                noItemText.textContent = 'No notes found!';
                noItem.appendChild(noItemIcon);
                noItem.appendChild(noItemText);
                todoList.appendChild(noItem);
            } else {
                let noItem = document.querySelector('.no-item');
                noItem.classList.remove('hide');
                noItem.classList.add('no-item');
                todoList.classList.add('no-item');
                noItem.querySelector('img').src = noNote;
                noItem.querySelector('p').textContent = 'No notes found!';
            }
        } else {
            allNotes(document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true);
        }
    } else if (noItem) {
        todoList.classList.remove('no-item');
        noItem.classList.add('hide'); // Hide existing no-result icon if a match is found
        allNotes(document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true);
    }

};

export default searchTask;
export { searchNote };