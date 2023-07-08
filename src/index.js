//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import {handleSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import { changeTheme } from './functions/pageLoad';
import allUI from './pages/all';
import formValidation from './functions/form';
import { itemsEventHandler } from './pages/all';
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
    document.getElementById('popupFormContainer').style.display = 'block';
    document.querySelector('.new-todo-box:nth-of-type(1)').classList.add('active');
    document.querySelector('.new-todo-box:nth-of-type(2)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(3)').classList.remove('active');

    document.querySelector('#todo-form').addEventListener('submit', (e) => {
        console.log('submit');
        formValidation(e);
    });
});

const cancelBtn = document.querySelector('.close-btn');
cancelBtn.addEventListener('click', () => {
    document.querySelector('.todo-form').reset();
    document.getElementById('popupFormContainer').style.display = 'none';
});


document.querySelector('#content').addEventListener('click', (e) => {
    if (e.target.closest('.todo-item')) {
        itemsEventHandler(e);
    }
    if (e.target.closest('.menu-button')) {
        handleSidebar();
    }
});