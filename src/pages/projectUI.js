import { storage } from '../functions/storage';
import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import empty from '../assets/img/emptyFolder.svg';
import displayProject from './indivProj';
import { project } from '../functions/project';
import { projectFormValidation } from '../functions/form';
import searchTask from '../functions/search';
import footer from '../functions/footer';

// Handles the project buttons
const handleProject = (event) => {
    // Delete project
    if (event.target.closest('.todo-project .todo-delete')) {
        project.removeFromProjectList(event.target.closest('.todo-project').getAttribute('project-key'));
    }
    // Star project
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
    // Edit project
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
    // Display project
    if (event.target.closest('.todo-project') && !event.target.closest('.todo-project .todo-delete') && !event.target.closest('.todo-project .todo-edit') && !event.target.closest('.todo-project .star')) {
        // displayProject(event.target.closest('.todo-item').id);
        document.querySelector('#page-content').innerHTML = '';
        displayProject(event.target.closest('.todo-project').getAttribute('project-key'));
    }

};

// Renders the all project or starred project page based on the starred parameter
const showAllProject = (starred = false) => {
    // remove the highlight from all sidebar items
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    // add the highlight to the correct sidebar item
    if (!starred && document.querySelector('.box:nth-of-type(2) .item:nth-of-type(1)')){
        document.querySelector('.search-input').placeholder = 'Search all projects';
        document.querySelector('.box:nth-of-type(2) .item:nth-of-type(1)').classList.add('active');
    } else if (starred && document.querySelector('.box:nth-of-type(2) .item:nth-of-type(2)')) {
        document.querySelector('.search-input').placeholder = 'Search starred projects';
        document.querySelector('.box:nth-of-type(2) .item:nth-of-type(2)').classList.add('active');
    }
    
    const separator = document.createElement('div');
    separator.classList.add('list-btn-separator');

    // Render the page
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-header');
    const pageContent = document.querySelector('#page-content');
    pageContent.appendChild(projectTitle);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';


    // adjust the height and margins of the list dynamically
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list-project');

    separator.appendChild(todoList);
    separator.appendChild(addBtn);

    pageContent.appendChild(separator);
    pageContent.appendChild(footer());

    const navbar = document.querySelector('.nav-bar');
    console.log(navbar.offsetHeight);

    const footerBar = document.querySelector('.footer');
    pageContent.style.gridTemplateRows = 'min-content 1fr min-content';

    console.log(getComputedStyle(projectTitle).lineHeight);
    const lineHeight = parseInt(getComputedStyle(projectTitle).lineHeight);
    console.log(lineHeight);
    const margin = parseFloat(getComputedStyle(projectTitle).marginBottom) + parseFloat(getComputedStyle(projectTitle).marginTop);
    const padding = parseFloat(getComputedStyle(projectTitle).paddingBottom) + parseFloat(getComputedStyle(projectTitle).paddingTop);
    const height = lineHeight + margin + padding;

    console.log(height)
    console.log(navbar.offsetHeight + footerBar.offsetHeight + height + 32);
    console.log('calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + height + 32) + 'px)');
    console.log(window.innerHeight)
    console.log(window.innerHeight - (navbar.offsetHeight + footerBar.offsetHeight + height + 32) + 'px')

    todoList.style.minHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + height + 32) + 'px)';
    todoList.style.maxHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + height + 32) + 'px)';
    // todoList.style.minHeight = 550 + 'px';
    // todoList.style.maxHeight = 550 + 'px';

    // add all the projects to the list
    allProject(starred);
}

// helper method to display all the projects, based on the starred parameter
const allProject = (starred) => {
    const searchBar = document.getElementById('search');
    // clear the list
    const todoList = document.querySelector('.todo-list-project');
    todoList.innerHTML = '';

    const projectTitle = document.querySelector('.project-header');
    let projectList = storage.getFromLocalStorage();
    // filter the list based on the starred parameter
    if (starred) {
        projectTitle.textContent = 'Starred Projects';
        todoList.setAttribute('starred', 'true');
        projectList = projectList.filter(project => project.starred === true);
    } else {
        projectTitle.textContent = 'All Projects';
        todoList.setAttribute('starred', 'false');
    }

    projectList = projectList.filter(project => project.name !== 'default'); // remove the default project
    // if there are no projects, display a message
    if (projectList.length === 0) {
        todoList.classList.add('no-item')
        const noItem = document.createElement('div');
        noItem.classList.add('no-item-icon');
        const noItemIcon = document.createElement('img');
        noItemIcon.src = empty;
        noItemIcon.alt = 'No projects icon';
        noItemIcon.draggable = false;
        noItem.appendChild(noItemIcon);
        const noItemText = document.createElement('p');
        if (starred) {
            noItemText.textContent = 'No starred projects yet!';
        } else {
            noItemText.textContent = 'No projects yet!';
        }
        noItem.appendChild(noItemText);
        todoList.appendChild(noItem);

    // otherwise, display all the projects
    } else {
        projectList.reverse(); // reverse the order of the array so that the most recent project is at the top
        projectList.forEach((project) => {
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
            // if the project name is too long, truncate it
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

            // Render the star, edit, and delete buttons
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

    // show only the projects that match the search query
    if (searchBar.value !== '') {
        searchTask(searchBar.value, 'project');
    }

}

export default showAllProject;
export { allProject, handleProject };