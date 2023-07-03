//import all css files
//import required pics
import './css/pageLoad.css';
import {sidebar, miniSidebar} from './functions/sidebar.js';
import header from './functions/header.js';
console.log('I get called from print.js!');

header();
sidebar();

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

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-theme');
    document.querySelector('.search-box').classList.toggle('light-theme');
});


// const toggle = document.getElementById('toggle');

// toggle.addEventListener('change', function() {
//   const sun = document.querySelector('.sun');
//   const moon = document.querySelector('.moon');

//   if (toggle.checked) {
//     sun.style.opacity = '0';
//     sun.style.transform = 'translateX(24px)';
//     moon.style.opacity = '1';
//     moon.style.transform = 'translateX(-24px)';
//   } else {
//     sun.style.opacity = '1';
//     sun.style.transform = 'translateX(0)';
//     moon.style.opacity = '0';
//     moon.style.transform = 'translateX(0)';
//   }
// });