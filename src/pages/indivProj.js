import { createRadioBtn, displayAllItems } from './all';
import { storage } from '../functions/storage';

// create the page to display tasks of a specific project
const displayProject = (name) => {

    let projectList = storage.getFromLocalStorage();
    projectList = projectList.filter(project => project.name === name)[0];
    console.log(projectList.displayName);
    let showName = projectList.displayName;


    const pageContent = document.querySelector('#page-content');
    pageContent.style.gridTemplateRows = 'min-content min-content 1fr';
    const footer = document.querySelector('footer');

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    const backBtn = document.createElement('button');
    backBtn.classList.add('back-btn');
    backBtn.textContent = '<';
    titleContainer.appendChild(backBtn);

    const wordContainer = document.createElement('div');
    wordContainer.classList.add('name-container');
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = showName;
    wordContainer.appendChild(projectTitle);

    titleContainer.appendChild(wordContainer);
    pageContent.appendChild(titleContainer);


    const display = document.createElement('div');
    display.classList.add('display');

    const selection = document.createElement('div');
    selection.classList.add('selection');

    const all = createRadioBtn('proj-selection', 'All', 'All', true);
    const today = createRadioBtn('proj-selection', 'Today', 'Today');
    const week = createRadioBtn('proj-selection', 'Week', 'Week');
    const important = createRadioBtn('proj-selection', 'Important', 'Important');
    const completed = createRadioBtn('proj-selection', 'Completed', 'Completed');
    const high = createRadioBtn('proj-selection', 'High', 'High');

    selection.appendChild(all);
    selection.appendChild(today);
    selection.appendChild(week);
    selection.appendChild(important);
    selection.appendChild(completed);
    selection.appendChild(high);

    display.appendChild(selection);

    const right = document.createElement('div');
    right.classList.add('right-display');

    const sort = document.createElement('div');
    sort.classList.add('sort');

    const sortText = document.createElement('p');
    sortText.textContent = 'Sort by:';

    const sortSelection = document.createElement('select');
    sortSelection.classList.add('sort-selection');
    sortSelection.id = 'sort-selection';
    sortSelection.name = 'sort-selection';

    const sortOption1 = document.createElement('option');
    sortOption1.value = 'Time';
    sortOption1.textContent = 'Remaining Time';

    const sortOption2 = document.createElement('option');
    sortOption2.value = 'priority';
    sortOption2.textContent = 'Priority';

    sortSelection.appendChild(sortOption1);
    sortSelection.appendChild(sortOption2);

    sort.appendChild(sortText);
    sort.appendChild(sortSelection);

    right.appendChild(sort);
    display.appendChild(right);

    pageContent.appendChild(display);
    display.style.padding = '0';
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - display.offsetHeight - titleContainer.offsetHeight - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    titleContainer.style.marginRight = addBtn.offsetWidth + 72 + 'px';
    pageContent.appendChild(todoList);

    //Show all todo items after the page is set up
    displayAllItems(showName, 'Time', 'All');

};

export default displayProject;