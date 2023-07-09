//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import fullStar from './assets/img/fullStar.svg';
import star from './assets/img/star.svg';
import {handleSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import { changeTheme, showForm, closeForm } from './functions/pageLoad';
import allUI from './pages/all';
import formValidation from './functions/form';
import { itemsEventHandler } from './pages/all';
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
});