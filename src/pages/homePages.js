import { displayAllItems } from './all';

const showPage = (page) => {

    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    if (page == 'Today') {
        document.querySelector('.item:nth-of-type(2)').classList.add('active');
    } else if (page == 'Week') {
        document.querySelector('.item:nth-of-type(3)').classList.add('active');
    } else if (page == 'Important') {
        document.querySelector('.item:nth-of-type(4)').classList.add('active');
    } else if (page == 'Completed') {
        document.querySelector('.item:nth-of-type(5)').classList.add('active');
    }

    const pageContent = document.querySelector('#page-content');
    const footer = document.querySelector('footer');

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    pageContent.appendChild(todoList);

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