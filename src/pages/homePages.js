import { displayAllItems } from './all.js';
import footer from '../functions/footer.js';

// Show today, tomorrow, this week, important, and completed page based on the page parameter
const showPage = (page) => {
    // remove the highlight from all sidebar items
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    // add the highlight to the correct sidebar item and update the search bar placeholder value
    if (page == 'Today') {
        document.querySelector('.search-input').placeholder = 'Search today\'s tasks';
        document.querySelector('.box:nth-of-type(1) .item:nth-of-type(2)').classList.add('active');
    } else if (page == 'Week') {
        document.querySelector('.search-input').placeholder = 'Search this week\'s tasks';
        document.querySelector('.box:nth-of-type(1) .item:nth-of-type(3)').classList.add('active');
    } else if (page == 'Important') {
        document.querySelector('.search-input').placeholder = 'Search important tasks';
        document.querySelector('.box:nth-of-type(1) .item:nth-of-type(4)').classList.add('active');
    } else if (page == 'Completed') {
        document.querySelector('.search-input').placeholder = 'Search completed tasks';
        document.querySelector('.box:nth-of-type(1) .item:nth-of-type(5)').classList.add('active');
    }

    const pageContent = document.querySelector('#page-content');

    const separator = document.createElement('div');
    separator.classList.add('list-btn-separator');

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    separator.appendChild(todoList);

    // add the add button to the page except for the completed page
    if (page != 'Completed') {
        const addBtn = document.createElement('button');
        addBtn.classList.add('add-btn');
        addBtn.textContent = '+';
        separator.appendChild(addBtn);
    }

    pageContent.appendChild(separator);
    pageContent.appendChild(footer());

    const navbar = document.querySelector('.nav-bar');
    console.log(navbar.offsetHeight);

    const footerBar = document.querySelector('.footer');

    console.log(pageContent.offsetHeight);
    todoList.style.minHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + 32) + 'px)';
    todoList.style.maxHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + 32) + 'px)';

    pageContent.style.gridTemplateRows = '1fr min-content';

    // adjust the margin of the list based on the page 
    // display all the items based on the page
    if (page == 'Today') {
        displayAllItems('default', 'Time', 'Today');
    } else if (page == 'Week') {
        displayAllItems('default', 'Time', 'Week');
    } else if (page == 'Important') {
        displayAllItems('default', 'Time', 'Important');
    } else if (page == 'Completed') {
        displayAllItems('default', 'Time', 'Completed');
    }
};

export default showPage;