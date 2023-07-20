import footer from '../functions/footer.js';
import { storage } from '../functions/storage.js';
import { createRadioBtn, displayAllItems } from './all.js';

// create the page to display tasks of a specific project
const displayProject = (name) => {
    const pageContent = document.querySelector('#page-content');
    const navbar = document.querySelector('.nav-bar');
    const footerBar = footer();

    // get the project list from localStorage
    let projectList = storage.getFromLocalStorage();
    projectList = projectList.filter(project => project.name === name)[0];
    let showName = projectList.displayName;

    // top title container
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    // back button
    const backBtn = document.createElement('button');
    backBtn.classList.add('back-btn');
    backBtn.textContent = '<';
    titleContainer.appendChild(backBtn);

    // project title
    const wordContainer = document.createElement('div');
    wordContainer.classList.add('name-container');
    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = showName;
    wordContainer.appendChild(projectTitle);
    titleContainer.appendChild(wordContainer);

    // add title container to page
    pageContent.appendChild(titleContainer);


    // sorting and filtering display options go here
    const display = document.createElement('div');
    display.classList.add('display');

    // filter options
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

    // sort options
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

    // separate the list from the buttons
    const separator = document.createElement('div');
    separator.classList.add('list-btn-separator');

    // todo list
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list')

    // create the add button
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';

    separator.appendChild(todoList);
    separator.appendChild(addBtn);
    pageContent.appendChild(separator);
    pageContent.appendChild(footerBar);

    // give todo List a fixed height
    todoList.style.minHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + display.offsetHeight + titleContainer.offsetHeight + 32) + 'px)';
    todoList.style.maxHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + display.offsetHeight + titleContainer.offsetHeight + 32) + 'px)';

    // adjust the grid template rows of the page content
    pageContent.style.gridTemplateRows = 'min-content min-content 1fr min-content';

    //Show all todo items after the page is set up
    displayAllItems(showName, 'Time', 'All');

};

export default displayProject;