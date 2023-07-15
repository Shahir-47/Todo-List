import { storage } from '../functions/storage';

const showAllNotes = (starred = false) => {
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    if (!starred && document.querySelector('.box:nth-of-type(3) .item:nth-of-type(1)')){
        document.querySelector('.box:nth-of-type(3) .item:nth-of-type(1)').classList.add('active');
    } else if (starred && document.querySelector('.box:nth-of-type(3) .item:nth-of-type(2)')) {
        document.querySelector('.box:nth-of-type(3) .item:nth-of-type(2)').classList.add('active');
    }

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-header');
    if (starred) {
        projectTitle.textContent = 'Starred Notes';
    } else {
        projectTitle.textContent = 'All Notes';
    }
    const pageContent = document.querySelector('#page-content');
    const footer = document.querySelector('footer');
    pageContent.appendChild(projectTitle);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const todoList = document.createElement('div');
    todoList.classList.add('notes-list');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2.5) - (projectTitle.offsetHeight*3) - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    projectTitle.style.marginRight = addBtn.offsetWidth + 72 + 'px';
    pageContent.appendChild(todoList);

    // allProject(starred);
}

export { showAllNotes }