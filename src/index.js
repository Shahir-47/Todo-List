//import all css files
//import required pics
import './css/pageLoad.css';
import {sidebar, miniSidebar} from './functions/sidebar.js';
import header from './functions/header.js';
import footer from './functions/footer';
console.log('I get called from print.js!');

header();
sidebar();
footer();

// Event listener to maximize/minimize sidebar
document.querySelector('#content').addEventListener('click', (event) => {
    if (event.target.closest('.menu-button')) {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (sidebarContent.classList.contains('full')) {
            console.log('full');
            miniSidebar();
        } else if (sidebarContent.classList.contains('mini')) {
            sidebar();
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
