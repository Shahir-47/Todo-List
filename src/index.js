//import all css files
//import required pics
import './css/pageLoad.css';
import {sidebar, miniSidebar} from './functions/sidebar.js';
import header from './functions/header.js';
console.log('I get called from print.js!');

header();
sidebar();

document.querySelector('.menu-button').addEventListener('click', (event) => {
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