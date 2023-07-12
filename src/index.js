//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import fullStar from './assets/img/fullStar.svg';
import star from './assets/img/star.svg';
import {handleSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import { changeTheme, showForm, closeForm } from './functions/pageLoad';
import allUI, { displayAllItems } from './pages/all';
import formValidation from './functions/form';
import { itemsEventHandler, sortItems } from './pages/all';
import { project } from './functions/project';
console.log('I get called from print.js!');



// Load header, sidebar, and footer
pageLoad();
allUI();


// Event listener to change color theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', changeTheme);

// Event listener to add todo item
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    showForm();
    document.querySelector('#todo-form').addEventListener('submit', (e) => {
        formValidation(e);
    });
});

// Event Listener for dynamically added elements
document.querySelector('#content').addEventListener('click', (e) => {
    const starImg = e.target.closest('.todo-item .star img')
    if (e.target.closest('.todo-item')) {
        itemsEventHandler(e);
    }
    if (e.target.closest('.menu-button')) {
        handleSidebar();
    }
    if (e.target.closest('.close-btn')) {
        closeForm();
    }
    if (e.target.closest('#All')) {
        displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'All');
    } else if (e.target.closest('#Today')) {
        displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Today');
    } else if (e.target.closest('#Week')) {
        displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Week');
    } else if (e.target.closest('#Important')) {
        displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'Important');
    } else if (e.target.closest('#High')) {
        displayAllItems('default', document.querySelector('.sort #sort-selection').value, 'High');
    } 
});

document.querySelector('#content').addEventListener('change', (e) => {
    if (e.target.closest('.sort #sort-selection')) {
        console.log(e.target.value);
        sortItems(e.target.value);
    }
});