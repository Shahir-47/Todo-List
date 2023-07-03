import {sidebar} from './sidebar.js';
import header from './header.js';
import footer from './footer';


const pageContent = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    let width = sidebarContent.offsetWidth;
    console.log(width);
    let top = sidebarContent.style.marginTop;
    let height = sidebarContent.style.height;
    const footerH = document.querySelector('footer');
    let bottom = footerH.offsetHeight;

    const pageContent = document.createElement('div');
    pageContent.id = 'page-content';
    pageContent.style.marginLeft = width + 'px';
    pageContent.style.marginTop = top;
    pageContent.style.minHeight = 'calc(100vh - ' + (top + bottom + 'px') + ')';
    pageContent.style.width = 'calc(100vw - ' + (width + 'px') + ')';

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
    pageContent();
}

export default pageLoad;
export {adjustPageContent};