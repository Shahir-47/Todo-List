import { displayAllItems } from './all';

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
    const footer = document.querySelector('footer');

    let width = 160;
    // add the add button to the page except for the completed page
    if (page != 'Completed') {
        const addBtn = document.createElement('button');
        addBtn.classList.add('add-btn');
        addBtn.textContent = '+';
        pageContent.appendChild(addBtn);
        width = addBtn.offsetWidth + 64;
    }

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.style.minHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - 16 + 'px';
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - 16 + 'px';
    // adjust the margin of the list based on the page
    if (page != 'Completed') {
        todoList.style.marginRight =  width + 'px';
    } else {
        todoList.style.marginRight = width + 'px';
    }  
    pageContent.appendChild(todoList);
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