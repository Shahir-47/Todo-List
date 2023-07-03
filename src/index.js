//import all css files
//import required pics
import './css/pageLoad.css';
import './css/all.css';
import {sidebar, miniSidebar} from './functions/sidebar.js';
import pageLoad from './functions/pageLoad';
import {adjustPageContent} from './functions/pageLoad';
import allUI from './pages/all';
console.log('I get called from print.js!');

// Load header, sidebar, and footer
pageLoad();
allUI();

// Event listener to maximize/minimize sidebar
document.querySelector('#content').addEventListener('click', (event) => {
    if (event.target.closest('.menu-button')) {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (sidebarContent.classList.contains('full')) {
            console.log('full');
            miniSidebar();
            adjustPageContent();
        } else if (sidebarContent.classList.contains('mini')) {
            sidebar();
            adjustPageContent();
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
