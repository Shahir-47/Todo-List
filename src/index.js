import './css/pageLoad.css';
import './css/all.css';
import {handleSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import { changeTheme, showForm, closeForm, showProjectForm, showNoteForm } from './functions/pageLoad';
import allUI, { displayAllItems } from './pages/all';
import showPage from './pages/homePages';
import formValidation from './functions/form';
import { itemsEventHandler, sortItems } from './pages/all';
import showAllProject from './pages/projectUI';
import { handleProject } from './pages/projectUI';
import { projectFormValidation, noteFormValidation } from './functions/form';
import { showAllNotes, handleNotes } from './pages/notesUI';
import { notes } from './functions/notes';
import searchTask from './functions/search';
import { searchNote } from './functions/search';

let highlight;
let previousScrollPosition = 0;

// Load header, sidebar, footer and all tasks page
pageLoad();
allUI();

// If clicked on logo, go to all tasks page
const links = document.querySelectorAll('.logo-box a');
links.forEach((link) => {
    link.addEventListener('click', (e) => {
        document.querySelector('#page-content').innerHTML = '';
        allUI();
    });
});

// Event listener to change toggle dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', changeTheme);

// event listeners for dynamically changing content
document.querySelector('#content').addEventListener('click', (e) => {
    // show add task form
    if (e.target.closest('.scroll-box .new-todo-box:nth-of-type(1)')) {
        showForm();
    }
    // show add project form
    if (e.target.closest('.scroll-box .new-todo-box:nth-of-type(2)')) {
        showProjectForm();
    }
    // show add note form
    if (e.target.closest('.scroll-box .new-todo-box:nth-of-type(3)')) {
        showNoteForm();
    }
    // submit add task form for validating and processing
    if (e.target.closest('#todo-form .ok-btn')) {
        formValidation(e.target.closest('#todo-form'));
    }
    // submit add project form for validating and processing
    if (e.target.closest('#project-form .proj-add-btn')) {
        projectFormValidation(e.target.closest('#project-form'));
    }
    // submit add note form for validating and processing
    if (e.target.closest('#note-form .note-add-btn')) {
        noteFormValidation(e.target.closest('#note-form'));
    }
    // if clicked on a todo item, handle the event by deleting, editing, viewing or marking as done or important,
    if (e.target.closest('.todo-item')) {
        itemsEventHandler(e);
    }
    // if clicked on a note item, handle the event by deleting or marking as important,
    if (e.target.closest('.note')) {
        handleNotes(e);
    }
    // open the add form if clicked on the add button
    if (e.target.closest('.add-btn')){
        // if on todo page, show add todo form
        if (document.querySelector('.box:nth-of-type(1) .item.active') || document.querySelector('.project-title')){
            showForm();
        // if on project page, show add project form
        } else if (document.querySelector('.todo-list-project') && document.querySelector('.project-title') === null) {
            showProjectForm();
        // if on notes page, show add note form
        } else if (document.querySelector('.notes-list')) {
            showNoteForm();
        }
    }
    // if clicked on the menu button, open/close the sidebar
    if (e.target.closest('.menu-button')) {
        // record where the user left the sidebar scrolled to, so when the user opens the sidebar again, 
        // it will be at the same position
        if (document.querySelector('.sidebar-content').classList.contains('full')) {
            previousScrollPosition = document.querySelector('.sidebar-content').scrollTop;
        }
        // record which item is highlighted, so when the user opens the sidebar again,
        // the same item will be highlighted
        if (document.querySelector('.box:nth-of-type(1) .item.active p')) {
            highlight = document.querySelector('.box:nth-of-type(1) .item.active p').textContent;
            handleSidebar(previousScrollPosition);
            let homeItems = document.querySelectorAll('.box:nth-of-type(1) .item p');
            homeItems.forEach((item) => {
                if (item.textContent === highlight) {
                    item.parentElement.classList.add('active');
                }
            });
        } else if (document.querySelector('.box:nth-of-type(2) .item.active p')) {
            highlight = document.querySelector('.box:nth-of-type(2) .item.active p').textContent;
            handleSidebar(previousScrollPosition);
            let projectItems = document.querySelectorAll('.box:nth-of-type(2) .item p');
            projectItems.forEach((item) => {
                if (item.textContent === highlight) {
                    item.parentElement.classList.add('active');
                }
            });
        } else if (document.querySelector('.box:nth-of-type(3) .item.active p')) {
            highlight = document.querySelector('.box:nth-of-type(3) .item.active p').textContent;
            handleSidebar(previousScrollPosition);
            let notesItems = document.querySelectorAll('.box:nth-of-type(3) .item p');
            notesItems.forEach((item) => {
                if (item.textContent === highlight) {
                    item.parentElement.classList.add('active');
                }
            });
        } else {
            handleSidebar(previousScrollPosition);
            let homeItems = document.querySelectorAll('.item p');
            homeItems.forEach((item) => {
                if (item.textContent === highlight) {
                    item.parentElement.classList.add('active');
                }
            });
        }
    }
    // close the add form if clicked on the close button
    if (e.target.closest('.close-btn')) {
        closeForm();
    }
    // Filter all the tasks based on the filter selected
    if (document.querySelector('.box:nth-of-type(1) .item:nth-of-type(1).active')) {
        if (e.target.closest('#All')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'All');
        } else if (e.target.closest('#Today')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Today');
        } else if (e.target.closest('#Week')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Week');
        } else if (e.target.closest('#Important')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Important');
        } else if (e.target.closest('#Completed')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Completed');
        } else if (e.target.closest('#High')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'High');
        }
    }
    // Filter all the tasks in a particular project based on the filter selected
    if (document.querySelector('.project-title')) {
        if (e.target.closest('#All')) {
            console.log(document.querySelector('.project-title').textContent)
            displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, 'All');
        } else if (e.target.closest('#Today')) {
            displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, 'Today');
        } else if (e.target.closest('#Week')) {
            displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, 'Week');
        } else if (e.target.closest('#Important')) {
            displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, 'Important');
        } else if (e.target.closest('#Completed')) {
            displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, 'Completed');
        } else if (e.target.closest('#High')) {
            displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, 'High');
        }
    }
    // Show all pages
    if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        allUI('All');
    // Show today page
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Today');
    // Show week page
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(3)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Week');
    // Show important page
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(4)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Important');
    // Show completed page
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(5)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Completed');
    // Show all projects page
    } else if (e.target.closest('.box:nth-of-type(2) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject();
    // Show important projects page
    } else if (e.target.closest('.box:nth-of-type(2) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject(true);
    // Show all notes page
    } else if (e.target.closest('.box:nth-of-type(3) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllNotes();
    // Show important notes page
    } else if (e.target.closest('.box:nth-of-type(3) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllNotes(true);
    }
    // if clicked on a project item, handle the event by deleting, viewing or marking the project as important
    if (e.target.closest('.todo-project')) {
        handleProject(e);
    }
    // if you're on the project page, and clicked on the back button, go back to all projects page
    if (e.target.closest('.back-btn')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject();
    }
});

// Sort all the tasks based on the sort selected
document.querySelector('#content').addEventListener('change', (e) => {
    if (e.target.closest('.sort #sort-selection')) {
        
        sortItems(e.target.value);
    }
});

document.querySelector('#content').addEventListener('input', (e) => {
    // if editing note title or description, update the note
    if (e.target.closest('.note-title') || e.target.closest('.note-description')) {
        
        notes.editNote(e.target.closest('.note').getAttribute('note-id'), e.target.closest('.note').querySelector('.note-title').textContent, e.target.closest('.note').querySelector('.note-description').textContent);
    }
    // if searching for a task, filter the tasks based on the search query and highlight the search query
    if (e.target.closest('.search-input')) {
        const searchBar = document.getElementById('search');
        if (document.querySelector('.todo-list')){
            searchTask(searchBar.value, 'list');
        } else if (document.querySelector('.todo-list-project')) {
            searchTask(searchBar.value, 'project');
        } else if (document.querySelector('.notes-list')) {
            searchNote(searchBar.value);
        }
    }
});

