import { storage } from '../functions/storage';

const showAllProject = () => {
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    document.querySelector('.box:nth-of-type(2) .item:nth-of-type(1)').classList.add('active');

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

    allProject();
}

const allProject = () => {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

    const projectList = storage.getFromLocalStorage();
    projectList.reverse(); // Reverse the order of the array
    projectList.forEach((project, index) => {
        let projectName = project.name;
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-project');
        const colorPane = document.createElement('div');
        colorPane.style.backgroundColor = 'var(--add-btn-color)';
        colorPane.classList.add('color-pane');
        const todoText = document.createElement('h2');
        todoText.textContent = projectName;
        todoItem.appendChild(colorPane);
        todoItem.appendChild(todoText);
        todoList.appendChild(todoItem);        
    });
}

export default showAllProject;
export { allProject };