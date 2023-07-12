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
    } else if (e.target.closest('#Today')) {
    } else if (e.target.closest('#Week')) {
        console.log('Week');
    } else if (e.target.closest('#Important')) {
        console.log('Important');
    } else if (e.target.closest('#High')) {
        console.log('High');
    } 
});

document.querySelector('#content').addEventListener('change', (e) => {
    if (e.target.closest('.sort #sort-selection')) {
        console.log(e.target.value);
        sortItems(e.target.value);
    }
});