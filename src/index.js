//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import {sidebar, miniSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import {adjustPageContent} from './functions/pageLoad';
import { adjustFooter } from './functions/footer';
import allUI from './pages/all';
import formUI from './functions/form';
import { formValidation } from './functions/form';
import { project, displayTodoItem, taskDoneUI, displayAllItems, createDetailContainer, displayDetail } from './pages/all';
console.log('I get called from print.js!');

// Load header, sidebar, and footer
pageLoad();
allUI();
formUI();
displayAllItems();
createDetailContainer();

// Event listener to maximize/minimize sidebar
document.querySelector('#content').addEventListener('click', (event) => {
    if (event.target.closest('.menu-button')) {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (sidebarContent.classList.contains('full')) {
            console.log('full');
            miniSidebar();
            adjustPageContent();
            adjustFooter();
        } else if (sidebarContent.classList.contains('mini')) {
            sidebar();
            adjustPageContent();
            adjustFooter();
        }
    }
});

// Event listener to change color theme
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.querySelector('.search-box').classList.toggle('light-theme');
    document.querySelector('footer').classList.toggle('light-theme');
});


// Event listener to add todo item
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
    document.getElementById('popupFormContainer').style.display = 'block';
    document.querySelector('.new-todo-box:nth-of-type(1)').classList.add('active');
    document.querySelector('.new-todo-box:nth-of-type(2)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(3)').classList.remove('active');

    document.querySelector('.todo-form').addEventListener('submit', (e) => {
        formValidation(e);
    });
});

const cancelBtn = document.querySelector('.close-btn');
cancelBtn.addEventListener('click', () => {
    document.querySelector('.todo-form').reset();
    document.getElementById('popupFormContainer').style.display = 'none';
});


document.querySelector('#content').addEventListener('click', (e) => {
    if (e.target.closest('.todo-item .completed')) {
        project.projectItemCompleted( e.target.closest('.todo-item').id);
    }
    if (e.target.closest('.todo-item .todo-delete')) {
        project.projectItemDeleted( e.target.closest('.todo-item').id);
    }
    if (e.target.closest('.todo-item') && !e.target.closest('.todo-item .todo-delete') && !e.target.closest('.todo-item .completed') && !e.target.closest('.todo-item .todo-edit')) {
        document.getElementById('detailFormContainer').style.display = 'block';
        displayDetail(e.target.closest('.todo-item').id);
        document.querySelector('#closeDetailsBtn').addEventListener('click', () => {
            document.getElementById('detailFormContainer').style.display = 'none';
        });
    }
    //todo-details
});

// const newTodoBoxes = document.querySelectorAll('.todo-item .completed');
// newTodoBoxes.forEach((box) => {
//     console.log("box");
//     box.addEventListener('click', (e) => {
//         console.log(e)
//         console.log(e.target.closest('.todo-item'));
//         project.itemCompleted( e.target.closest('.todo-item').id);
        // taskDoneUI(e.target);

        
        // if (box.classList.contains('todo-title')) {
        //     document.querySelector('.todo-form').removeChild(document.querySelector('.todo-form .form-body .third-row'));
        // } else if (box.classList.contains('todo-details')) {
        //     document.querySelector('.todo-form').removeChild(document.querySelector('.todo-form .form-body .third-row'));
        //     document.querySelector('.todo-form').appendChild(document.querySelector('.todo-form .form-body .third-row'));
        // } else if (box.classList.contains('todo-date')) {
        //     document.querySelector('.todo-form').removeChild(document.querySelector('.todo-form .form-body .third-row'));
        //     document.querySelector('.todo-form').appendChild(document.querySelector('.todo-form .form-body .third-row'));
        // }
//     });
// });