//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import fullStar from './assets/img/fullStar.svg';
import star from './assets/img/star.svg';
import {handleSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import { changeTheme, showForm, closeForm, showProjectForm } from './functions/pageLoad';
import allUI, { displayAllItems } from './pages/all';
import showPage from './pages/homePages';
import formValidation from './functions/form';
import { itemsEventHandler, sortItems } from './pages/all';
import { project } from './functions/project';
import showAllProject from './pages/projectUI';
import { handleProject } from './pages/projectUI';
import { projectFormValidation } from './functions/form';
console.log('I get called from print.js!');

let highlight;

// Load header, sidebar, and footer
pageLoad();
allUI();


// Event listener to change color theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', changeTheme);

// Event listener to add todo item
// const addBtn = document.querySelector('.add-btn');
// addBtn.addEventListener('click', () => {
//     showForm();
//     document.querySelector('#todo-form').addEventListener('submit', (e) => {
//         formValidation(e);
//     });
// });

// Event Listener for dynamically added elements
document.querySelector('#content').addEventListener('click', (e) => {
    const starImg = e.target.closest('.todo-item .star img')
    if (e.target.closest('.todo-item')) {
        itemsEventHandler(e);
    }
    if (e.target.closest('.add-btn')){
        if (document.querySelector('.box:nth-of-type(1) .item.active') || document.querySelector('.project-title')){
            showForm();
            document.querySelector('#todo-form').addEventListener('submit', (e) => {
                formValidation(e);
            });
        } else if (document.querySelector('.box:nth-of-type(2) .item.active') && document.querySelector('.project-title') === null) {
            showProjectForm();
            document.querySelector('#project-form').addEventListener('submit', (e) => {
                projectFormValidation(e);
            });
        }
    }
    if (e.target.closest('.menu-button')) {
        if (document.querySelector('.box:nth-of-type(1) .item.active p')) {
            highlight = document.querySelector('.box:nth-of-type(1) .item.active p').textContent;
            handleSidebar();
            let homeItems = document.querySelectorAll('.box:nth-of-type(1) .item p');
            homeItems.forEach((item) => {
                if (item.textContent === highlight) {
                    item.parentElement.classList.add('active');
                }
            });
            homeItems.classList.add('active');
        } else if (document.querySelector('.box:nth-of-type(2) .item.active p')) {
            highlight = document.querySelector('.box:nth-of-type(2) .item.active p').textContent;
            handleSidebar();
            let projectItems = document.querySelectorAll('.box:nth-of-type(2) .item p');
            projectItems.forEach((item) => {
                if (item.textContent === highlight) {
                    item.parentElement.classList.add('active');
                }
            });
        } else {
            handleSidebar();
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
    }
    else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Today');
    }
    else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(3)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Week');
    }
    else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(4)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Important');
    }
    else if (e.target.closest('.box:nth-of-type(1) .item:nth-of-type(5)')) {
        document.querySelector('#page-content').innerHTML = '';
        showPage('Completed');
    } else if (e.target.closest('.box:nth-of-type(2) .item:nth-of-type(1)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject();
    } else if (e.target.closest('.box:nth-of-type(2) .item:nth-of-type(2)')) {
        document.querySelector('#page-content').innerHTML = '';
        showAllProject(true);
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