import {sidebar} from './sidebar.js';
import header from './header.js';
import footer from './footer.js';
import createPopupContainers from './popup.js';
import { addForm, addProjectForm, addNoteForm } from './popup.js';
import { allNotes } from '../pages/notesUI.js'

//create div where all the page content will be displayed
const pageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');

    const pageContent = document.createElement('div');
    pageContent.id = 'page-content';
    pageContent.style.marginLeft = sidebarContent.offsetWidth + 'px';
    pageContent.style.marginTop = sidebarContent.style.marginTop;

    document.querySelector('div#content').appendChild(pageContent);
}

// adjust the page content when the sidebar is toggled
const adjustPageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    const pageContent = document.querySelector('#page-content');

    pageContent.style.marginLeft = sidebarContent.offsetWidth + 'px';
    pageContent.style.marginTop = sidebarContent.style.marginTop;

    // since notes uses masonry.js, we need to reload the page content for the notes page
    if (document.querySelector('.notes-list')) {
        let star = document.querySelector('.notes-list').getAttribute('starred') == 'true' ? true : false;
        allNotes(star);
    }
}

// load the initial page
const pageLoad = () => {
    header(); // create the header
    sidebar(); // create the sidebar
    createPopupContainers(); // create the popup forms
    pageContent(); // create the page content
}

// Change color theme
const changeTheme = () => {
    document.body.classList.toggle('light-theme');
    document.querySelector('.logo-box').classList.toggle('light-theme');
    document.querySelector('.search-box').classList.toggle('light-theme');
    document.querySelector('footer').classList.toggle('light-theme');
}

// Show the add todo form
const showForm = () => {
    addForm();
    document.querySelector('.priority-container #low').checked = true;
    document.getElementById('popupFormContainer').style.display = 'block';
    // add the highlight to the correct sidebar item
    document.querySelector('.new-todo-box:nth-of-type(1)').classList.add('active');
    document.querySelector('.new-todo-box:nth-of-type(2)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(3)').classList.remove('active');
}

// Show the add note form
const showNoteForm = () => {
    addNoteForm();
    // add the highlight to the correct sidebar item
    document.getElementById('popupFormContainer').style.display = 'block';
    document.querySelector('.new-todo-box:nth-of-type(1)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(2)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(3)').classList.add('active');
}

// Show the add project form
const showProjectForm = () => {
    addProjectForm();
    // add the highlight to the correct sidebar item
    document.getElementById('popupFormContainer').style.display = 'block';
    document.querySelector('.new-todo-box:nth-of-type(1)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(2)').classList.add('active');
    document.querySelector('.new-todo-box:nth-of-type(3)').classList.remove('active');
}

// Close the add forms
const closeForm = () => {
    document.querySelector('.todo-form').reset();
    document.getElementById('popupFormContainer').style.display = 'none';
}

export default pageLoad;
export {adjustPageContent, changeTheme, showForm, closeForm, showProjectForm, showNoteForm};