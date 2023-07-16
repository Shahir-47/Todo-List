//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import fullStar from './assets/img/fullStar.svg';
import star from './assets/img/star.svg';
import {handleSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import { changeTheme, showForm, closeForm, showProjectForm, showNoteForm } from './functions/pageLoad';
import allUI, { displayAllItems } from './pages/all';
import showPage from './pages/homePages';
import formValidation from './functions/form';
import { itemsEventHandler, sortItems } from './pages/all';
import { project } from './functions/project';
import showAllProject from './pages/projectUI';
import { handleProject } from './pages/projectUI';
import { projectFormValidation, noteFormValidation } from './functions/form';
import { showAllNotes, handleNotes } from './pages/notesUI';
import { notes } from './functions/notes';
console.log('I get called from print.js!');

let highlight;
let previousScrollPosition = 0;

// Load header, sidebar, and footer
pageLoad();
allUI();


// Event listener to change color theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', changeTheme);

const todoForm = document.querySelector('.todo-form');

// Event listener to add todo item
// const addBtn = document.querySelector('.add-btn');
// addBtn.addEventListener('click', () => {
//     showForm();
//     document.querySelector('#todo-form').addEventListener('submit', (e) => {
//         formValidation(e);
//     });
// });

// Event Listener for dynamically added elements

document.querySelector('#content').addEventListener('submit', (e) => {
    console.log(e.target.id);
    // if (e.target.id == 'todo-form') {
    //     console.log(e.target.id);
    //     e.preventDefault();
    //     // formValidation(e);
    // } else if (e.target.id == 'project-form') {
    //     console.log(e.target.id);
    //     e.preventDefault();
    //     // projectFormValidation(e);
    // } else if (e.target.id == 'note-form') {
    //     console.log(e.target.id);
    //     e.preventDefault();
    //     // noteFormValidation(e);
    // }
});
    // if (e.target.closest('#todo-form .ok-btn')) {
    //     formValidation(e.target.closest('#todo-form'));
    //     // document.querySelector('#todo-form').addEventListener('submit', formValidation);
    // } else if (document.querySelector('#edit-form btn')) {
    //     // document.querySelector('#project-form').addEventListener('submit', projectFormValidation);
    // } else if (document.querySelector('#project-form btn')) {
    //     // document.querySelector('#note-form').addEventListener('submit', noteFormValidation);
    // }

document.querySelector('#content').addEventListener('click', (e) => {
    if (e.target.closest('#todo-form .ok-btn')) {
        formValidation(e.target.closest('#todo-form'));
    }
    if (e.target.closest('#project-form .proj-add-btn')) {
        projectFormValidation(e.target.closest('#project-form'));
    }
    if (e.target.closest('#note-form .note-add-btn')) {
        noteFormValidation(e.target.closest('#note-form'));
    }

    if (e.target.closest('.todo-item')) {
        itemsEventHandler(e);
    }
    if (e.target.closest('.note')) {
        handleNotes(e);
    }
    if (e.target.closest('.add-btn')){
        if (document.querySelector('.box:nth-of-type(1) .item.active') || document.querySelector('.project-title')){
            showForm();
        } else if (document.querySelector('.todo-list-project') && document.querySelector('.project-title') === null) {
            showProjectForm();
        } else if (document.querySelector('.notes-list')) {
            showNoteForm();
        }
    }
    if (e.target.closest('.menu-button')) {

        if (document.querySelector('.sidebar-content').classList.contains('full')) {
            previousScrollPosition = document.querySelector('.sidebar-content').scrollTop;
        }
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
    if (e.target.closest('.close-btn')) {
        closeForm();
    }
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
    if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        allUI('All');
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Today');
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(3)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Week');
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(4)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Important');
    } else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(5)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Completed');
    } else if (e.target.closest('.box:nth-of-type(2) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject();
    } else if (e.target.closest('.box:nth-of-type(2) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject(true);
    } else if (e.target.closest('.box:nth-of-type(3) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllNotes();
    } else if (e.target.closest('.box:nth-of-type(3) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllNotes(true);
    }
    if (e.target.closest('.todo-project')) {
        handleProject(e);
    }
    if (e.target.closest('.back-btn')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject();
    }
});

document.querySelector('#content').addEventListener('change', (e) => {
    if (e.target.closest('.sort #sort-selection')) {
        console.log(e.target.value);
        sortItems(e.target.value);
    }
});

document.querySelector('#content').addEventListener('input', (e) => {
    if (e.target.closest('.note-title') || e.target.closest('.note-description')) {
        console.log(e.target.textContent);
        notes.editNote(e.target.closest('.note').getAttribute('note-id'), e.target.closest('.note').querySelector('.note-title').textContent, e.target.closest('.note').querySelector('.note-description').textContent);
    }
});

