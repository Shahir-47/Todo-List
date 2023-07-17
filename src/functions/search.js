import noTask from '../assets/img/taskSearch.svg';
import { displayTheRightPage } from './project';

let noItem = document.querySelector('.no-item'); // Get the existing noItem element

// filter project or todo items based on the search query and highlight the matching text
const searchTask = (query, type) => {
    let tasks; // List of tasks
    let matchFound = false; // Flag to track if a match is found
    const todoList = document.querySelector('.todo-list'); // Todo list container
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
                noItemIcon.src = noTask;
                noItemIcon.alt = 'No results icon';
                noItemIcon.draggable = false;
                noItem.appendChild(noItemIcon);
                const noItemText = document.createElement('p');
                noItemText.textContent = 'No tasks found!';
                noItem.appendChild(noItemText);
                todoList.appendChild(noItem);
            } else {
                let noItem = document.querySelector('.no-item');
                noItem.classList.remove('hide');
                noItem.classList.add('no-item');
                todoList.classList.add('no-item');
                noItem.querySelector('img').src = noTask;
                noItem.querySelector('p').textContent = 'No tasks found!';
            }
        } else if (query === '') {
            displayTheRightPage();
        }
    } else if (noItem) {
        todoList.classList.remove('no-item');
        noItem.classList.add('hide'); // Hide existing no-result icon if a match is found
    }
};

// filter notes based on the search query and highlight the matching text
const searchNote = (query) => {
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
        } else {
            note.classList.add('hide');  // Hide task if it does not match the search query
        }
      }
};

export default searchTask;
export { searchNote };