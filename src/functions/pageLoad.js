import {sidebar} from './sidebar.js';
import header from './header.js';
import footer from './footer.js';
import createPopupContainers from './popup.js';


const pageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    let width = sidebarContent.offsetWidth;
    console.log(width);
    let top = sidebarContent.style.marginTop;
    const footerH = document.querySelector('footer');
    let bottom = footerH.offsetHeight;
    const height = document.querySelector('.nav-bar').offsetHeight;

    const pageContent = document.createElement('div');
    pageContent.id = 'page-content';
    pageContent.style.marginLeft = width + 'px';
    pageContent.style.marginTop = top;
    pageContent.style.minHeight = 'calc(100vh - ' + (top + bottom + 'px') + ')';
    pageContent.style.maxHeight = 'calc(100vh - ' + (top + bottom + 'px') + ')';
    pageContent.style.border = '1px solid red';
    pageContent.style.width = 'calc(100vw - ' + (width + 'px') + ')';
    pageContent.style.paddingBottom = (bottom + 8) + 'px';

    document.querySelector('div#content').appendChild(pageContent);
}

const adjustPageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    let width = sidebarContent.offsetWidth;
    console.log(width);
    let top = sidebarContent.style.marginTop;
    let height = sidebarContent.style.height;
    const footerH = document.querySelector('footer');
    let bottom = footerH.offsetHeight;

    const pageContent = document.querySelector('#page-content');
    pageContent.style.marginLeft = width + 'px';
    pageContent.style.marginTop = top;
    pageContent.style.minHeight = 'calc(100vh - ' + (top + bottom + 'px') + ')';
    pageContent.style.width = 'calc(100vw - ' + (width + 'px') + ')';
}

const pageLoad = () => {
    header();
    sidebar();
    footer();
    createPopupContainers();
    pageContent();
}

// Change color theme
const changeTheme = () => {
    document.body.classList.toggle('light-theme');
    document.querySelector('.search-box').classList.toggle('light-theme');
    document.querySelector('footer').classList.toggle('light-theme');
}

const showForm = () => {
    document.querySelector('.priority-container #low').checked = true;
    document.getElementById('popupFormContainer').style.display = 'block';
    document.querySelector('.new-todo-box:nth-of-type(1)').classList.add('active');
    document.querySelector('.new-todo-box:nth-of-type(2)').classList.remove('active');
    document.querySelector('.new-todo-box:nth-of-type(3)').classList.remove('active');
}

const closeForm = () => {
    document.querySelector('.todo-form').reset();
    document.getElementById('popupFormContainer').style.display = 'none';
}

export default pageLoad;
export {adjustPageContent, changeTheme, showForm, closeForm};