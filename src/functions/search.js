import noTask from '../assets/img/taskSearch.svg';
import projectSearch from '../assets/img/folderSearch.svg';
import noNote from '../assets/img/noNote.svg';
import { displayTheRightPage } from './project.js';
import { allProject } from '../pages/projectUI.js';
import { allNotes } from '../pages/notesUI.js';

let noItem = document.querySelector('.no-item-icon'); // Get the existing noItem element

// filter project or todo items based on the search query and highlight the matching text
const searchTask = (query, type) => {
    let tasks; // List of tasks
    let matchFound = false; // Flag to track if a match is found
    let todoList; // Todo list container
    let picSrc; // Source of the no-result icon
    let picText; // Text of the no-result icon
    // if it is a todo list, then set the source and text of the appropriate no-result icon and
    // get the list of tasks
    if (type == 'list') {
        picSrc = noTask;
        picText = 'No tasks found!';
        todoList = document.querySelector('.todo-list'); // Todo list container
        tasks = document.querySelectorAll('.todo-item');
    // if it is a project list, then set the source and text of the appropriate no-result icon and
    // get the list of projects
    } else if (type == 'project') {
        picSrc = projectSearch;
        picText = 'No projects found!';
        todoList = document.querySelector('.todo-list-project'); // Project list container
        tasks = document.querySelectorAll('.todo-project');
    }
    // loop through all the tasks/projects
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskNameElement = task.querySelector('h2');
        const taskName = taskNameElement.textContent;

        // regex to highlight the matching text
        const regex = new RegExp(`(${query})`, 'gi');

        // add the highlight span class to the matching text
        const matchedText = taskName.match(regex);
        if (matchedText) {
          taskNameElement.innerHTML = taskName.replace(regex, '<span class="highlight">$1</span>');
          task.classList.remove('hide');
          matchFound = true;
        } else {
          taskNameElement.innerHTML = taskName; // Reset the HTML to remove any previous highlighting
          task.classList.add('hide');
        }
    }

    // Check if no match is found and show/hide no-result icon
    if (!matchFound) {
        // if there are no matches and the search bar is not empty, then display the no-result icon
        if (query !== '') {
            if (!todoList.querySelector('.no-item-icon')) {
                todoList.classList.add('no-item');
                noItem = document.createElement('div');
                noItem.classList.add('no-item-icon');
                const noItemIcon = document.createElement('img');
                noItemIcon.alt = 'No results icon';
                noItemIcon.draggable = false;
                const noItemText = document.createElement('p');
                noItemIcon.src = picSrc;
                noItemText.textContent = picText;
                noItem.appendChild(noItemIcon);
                noItem.appendChild(noItemText);
                todoList.appendChild(noItem);

            // if there are no matches, the search bar is not empty, and there is an existing noItem element,
            // then edit the existing noItem element
            } else {
                let noItem = todoList.querySelector('.no-item-icon');
                noItem.classList.remove('hide');
                todoList.classList.add('no-item');
                noItem.querySelector('img').src = picSrc;
                noItem.querySelector('p').textContent = picText;
            }
        // if there is no query and there is no list, then display the respective missing icons
        } else {
            if (type == 'list') {
                displayTheRightPage();
            } else if (type == 'project') {
                let imp = document.querySelector('.todo-list-project').getAttribute('starred') == 'false' ? false : true;
                allProject(imp);
            }

        }

    // if a match is found, then remove the no-result icon
    } else if (noItem) {
        todoList.classList.remove('no-item');
        noItem.classList.add('hide'); // Hide existing no-result icon if a match is found
    }
};

// filter notes based on the search query and highlight the matching text
const searchNote = (query) => {
    let matchFound = false; // Flag to track if a match is found
    let todoList = document.querySelector('.notes-list'); // Todo list container
    const notes = document.querySelectorAll('.note'); // List of notes

    // loop through all the notes
    for (let i = 0; i < notes.length; i++) {
        const note = notes[i];
        const noteTitle = note.querySelector('.note-title').textContent;
        const noteDescription = note.querySelector('.note-description').textContent;

        // regex to highlight the matching text
        const regex = new RegExp(`(${query})`, 'gi');

        const matchedText = noteTitle.match(regex);
        const matchedText2 = noteDescription.match(regex);
        
        // add the highlight span class to the matching text
        if (matchedText || matchedText2) {
            note.querySelector('.note-title').innerHTML = noteTitle.replace(regex, '<span class="highlight">$1</span>');
            note.querySelector('.note-description').innerHTML = noteDescription.replace(regex, '<span class="highlight">$1</span>');
            note.classList.remove('hide');  // Show task if it matches the search query
            matchFound = true;
        } else {
            note.querySelector('.note-title').innerHTML = noteTitle; // Reset the HTML to remove any previous highlighting
            note.querySelector('.note-description').innerHTML = noteDescription; // Reset the HTML to remove any previous highlighting
            note.classList.add('hide');
        }
    }

    // Check if no match is found and show/hide no-result icon
    if (!matchFound) {
        // if there are no matches and the search bar is not empty, then display the no-result icon
        if (query !== '') {
            if (!todoList.querySelector('.no-item-icon')) {
                todoList.classList.add('no-item');
                noItem = document.createElement('div');
                noItem.classList.add('no-item-icon');
                const noItemIcon = document.createElement('img');
                noItemIcon.alt = 'No results icon';
                noItemIcon.draggable = false;
                const noItemText = document.createElement('p');
                noItemIcon.src = noNote;
                noItemText.textContent = 'No notes found!';
                noItem.appendChild(noItemIcon);
                noItem.appendChild(noItemText);
                todoList.appendChild(noItem);

            // if there are no matches, the search bar is not empty, and there is an existing noItem element,
            // then edit the existing noItem element
            } else {
                let noItem = todoList.querySelector('.no-item-icon');
                noItem.classList.remove('hide');
                noItem.classList.add('no-item-icon');
                todoList.classList.add('no-item');
                noItem.querySelector('img').src = noNote;
                noItem.querySelector('p').textContent = 'No notes found!';
            }
        // if there is no query and there is no list, then display the respective missing icons
        } else {
            allNotes(document.querySelector('.notes-list').getAttribute('starred') == 'false' ? false : true);
        }
    // if a match is found, then remove the no-result icon
    } else if (noItem) {
        todoList.classList.remove('no-item');
        noItem.classList.add('hide'); // Hide existing no-result icon if a match is found
    }
};

export default searchTask;
export { searchNote };