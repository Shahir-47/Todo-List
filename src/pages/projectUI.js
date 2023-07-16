import { storage } from '../functions/storage';
import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import displayProject from './indivProj';
import { project } from '../functions/project';
import { projectFormValidation } from '../functions/form';

const handleProject = (event) => {
    if (event.target.closest('.todo-project .todo-delete')) {
        project.removeFromProjectList(event.target.closest('.todo-project').getAttribute('project-key'));
    }
    if (event.target.closest('.todo-project .star img')) {
        const starImg = event.target.closest('.todo-project .star img');
        const currentSrc = starImg.src;
        if (currentSrc === fullStar) {
          starImg.src = star;
        } else {
          starImg.src = fullStar;
        }
        project.starredProject(event.target.closest('.todo-project').getAttribute('project-key'));
        // project.projectItemStarred(event.target.closest('.todo-item').id);
    }
    if (event.target.closest('.todo-project .todo-edit')) {
        document.querySelector('#edit-project-form').setAttribute('project-codename', event.target.closest('.todo-project').getAttribute('project-key'));
        document.querySelector('#editProjectFormContainer').style.display = 'block';
        document.querySelector('#edit-project-form textarea[name="project-edit-title"]').value = event.target.closest('.todo-project').getAttribute('display-name');

        document.querySelector('#closeEditProjectBtn').addEventListener('click', () => {
            document.getElementById('editProjectFormContainer').style.display = 'none';
        });

        document.querySelector('#edit-project-form').addEventListener('submit', (e) => {
            projectFormValidation(e.target);
        });

    }
    if (event.target.closest('.todo-project') && !event.target.closest('.todo-project .todo-delete') && !event.target.closest('.todo-project .todo-edit') && !event.target.closest('.todo-project .star')) {
        // displayProject(event.target.closest('.todo-item').id);
        document.querySelector('#page-content').innerHTML = '';
        displayProject(event.target.closest('.todo-project').getAttribute('project-key'));
    }

};

const showAllProject = (starred = false) => {
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });

    if (!starred && document.querySelector('.box:nth-of-type(2) .item:nth-of-type(1)')){
        document.querySelector('.box:nth-of-type(2) .item:nth-of-type(1)').classList.add('active');
    } else if (starred && document.querySelector('.box:nth-of-type(2) .item:nth-of-type(2)')) {
        document.querySelector('.box:nth-of-type(2) .item:nth-of-type(2)').classList.add('active');
    }

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-header');
    const pageContent = document.querySelector('#page-content');
    const footer = document.querySelector('footer');
    pageContent.appendChild(projectTitle);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list-project');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2.5) - (projectTitle.offsetHeight*3) - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    projectTitle.style.marginRight = addBtn.offsetWidth + 72 + 'px';
    pageContent.appendChild(todoList);

    allProject(starred);
}

const allProject = (starred) => {
    const todoList = document.querySelector('.todo-list-project');
    todoList.innerHTML = '';

    const projectTitle = document.querySelector('.project-header');
    let projectList = storage.getFromLocalStorage();
    if (starred) {
        projectTitle.textContent = 'Starred Projects';
        todoList.setAttribute('starred', 'true');
        projectList = projectList.filter(project => project.starred === true);
    } else {
        projectTitle.textContent = 'All Projects';
        todoList.setAttribute('starred', 'false');
    }

    projectList.reverse(); // Reverse the order of the array
    projectList.forEach((project, index) => {
        let projectName = project.displayName;
        let starred = project.starred;
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-project');
        todoItem.setAttribute('project-key', project.name);
        todoItem.setAttribute('display-name', projectName);
        const colorPane = document.createElement('div');
        colorPane.style.backgroundColor = 'var(--add-btn-color)';
        colorPane.classList.add('color-pane');
        
        const wordContainer = document.createElement('div');
        wordContainer.classList.add('word-name-container');
        const todoTitle = document.createElement('h2');
        if (projectName != null) {
            if (projectName.length > 50) {
                todoTitle.textContent = projectName.slice(0, 50) + '...';
            } else {
                todoTitle.textContent = projectName;
            }
            ///Add NO task or something
        }
        wordContainer.appendChild(todoTitle);

        const todoRight = document.createElement('div');
        todoRight.classList.add('todo-right-project');

        const starBtn = document.createElement('button');
        starBtn.classList.add('star');
        const starIcon = document.createElement('img');
        if (starred) {
            starIcon.src = fullStar;
        } else {
            starIcon.src = star;
        }
        starIcon.alt = 'Star icon';
        starBtn.appendChild(starIcon);
    
        const todoEdit = document.createElement('button');
        todoEdit.classList.add('todo-edit');
        const todoEditIcon = document.createElement('img');
        todoEditIcon.src = edit;
        todoEditIcon.alt = 'Edit icon';
        todoEdit.appendChild(todoEditIcon);
    
        const todoDelete = document.createElement('button');
        todoDelete.classList.add('todo-delete');
        const todoDeleteIcon = document.createElement('img');
        todoDeleteIcon.src = del;
        todoDeleteIcon.alt = 'Delete icon';
        todoDelete.appendChild(todoDeleteIcon);

        todoRight.appendChild(starBtn);
        todoRight.appendChild(todoEdit);
        todoRight.appendChild(todoDelete);
    
        todoItem.appendChild(colorPane);
        todoItem.appendChild(wordContainer);
        todoItem.appendChild(todoRight);
        todoList.appendChild(todoItem);        
    });
}

export default showAllProject;
export { allProject, handleProject };