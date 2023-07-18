import New from '../assets/img/new.svg';
import newNote from '../assets/img/newNote.svg';
import newProject from '../assets/img/newProject.svg';

//pop up form for viewing details of a todo item
const createDetailContainer = () => {
    const popupFormContainer = document.createElement('div');
    popupFormContainer.setAttribute('id', 'detailFormContainer');
    const detailsForm = document.createElement('div');
    detailsForm.setAttribute('id', 'detailsForm');

    const formHeader = document.createElement('div');
    formHeader.classList.add('detail-header');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Details';
    formHeader.appendChild(formTitle);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.id = 'closeDetailsBtn';
    closeBtn.textContent = 'X';
    formHeader.appendChild(closeBtn);
    detailsForm.appendChild(formHeader);

    const formBody = document.createElement('div');
    formBody.classList.add('detail-body');
    detailsForm.appendChild(formBody);

    popupFormContainer.appendChild(detailsForm);
    document.querySelector('#content').appendChild(popupFormContainer);
}

//pop up form for editing a project
const editProjectContainer = () => {
    const popupFormContainer = document.createElement('div');
    popupFormContainer.setAttribute('id', 'editProjectFormContainer');
    const popupForm = document.createElement('div');
    popupForm.setAttribute('id', 'editProjectForm');

    const formHeader = document.createElement('div');
    formHeader.classList.add('edit-header');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Edit Project';
    formHeader.appendChild(formTitle);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.id = 'closeEditProjectBtn';
    closeBtn.textContent = 'X';
    formHeader.appendChild(closeBtn);
    popupForm.appendChild(formHeader);

    const todoForm = document.createElement('form');
    todoForm.classList.add('editProj');
    todoForm.setAttribute('id', 'edit-project-form');
    todoForm.setAttribute('onsubmit', "return false;");

    const detailsInput = document.createElement('textarea');
    detailsInput.classList.add('project-title-input');
    detailsInput.id = 'project-edit-title';
    detailsInput.name = 'project-edit-title';
    detailsInput.maxLength = 100;
    detailsInput.setAttribute('required', 'true');

    const okBtn = document.createElement('button');
    okBtn.classList.add('proj-add-btn');
    okBtn.id = 'edit-project-btn';
    okBtn.textContent = 'Add Project';

    todoForm.appendChild(detailsInput);
    todoForm.appendChild(okBtn);

    popupForm.appendChild(todoForm);
    popupFormContainer.appendChild(popupForm);
    document.querySelector('div#content').appendChild(popupFormContainer);
}    

//pop up form for editing a todo item
const createEditContainer = () => {
    const popupFormContainer = document.createElement('div');
    popupFormContainer.setAttribute('id', 'editFormContainer');
    const popupForm = document.createElement('div');
    popupForm.setAttribute('id', 'editForm');

    const formHeader = document.createElement('div');
    formHeader.classList.add('edit-header');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Edit Todo';
    formHeader.appendChild(formTitle);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.id = 'closeEditBtn';
    closeBtn.textContent = 'X';
    formHeader.appendChild(closeBtn);
    popupForm.appendChild(formHeader);

    const todoForm = document.createElement('form');
    todoForm.classList.add('todo-form');
    todoForm.setAttribute('id', 'edit-form');
    todoForm.setAttribute('onsubmit', "return false;");
    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.type = 'text';
    titleInput.setAttribute('required', 'true');
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.maxLength = 100;

    const detailsInput = document.createElement('textarea');
    detailsInput.classList.add('details-input');
    detailsInput.id = 'details';
    detailsInput.name = 'details';
    detailsInput.maxLength = 500;


    const thirdRow = document.createElement('div');
    thirdRow.classList.add('third-row');

    const thirdRowUpper = document.createElement('div');
    thirdRowUpper.classList.add('third-row-upper');
    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('due-date-container');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.textContent = 'Due Date: ';
    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('due-date-input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'due-date';
    dueDateInput.setAttribute('required', 'true');
    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateInput);
    thirdRowUpper.appendChild(dueDateContainer);


    const dueTimeContainer = document.createElement('div');
    dueTimeContainer.classList.add('due-date-container');
    const dueTimeLabel = document.createElement('label');
    dueTimeLabel.setAttribute('for', 'due-time');
    dueTimeLabel.textContent = 'Due Date: (Optional) ';
    const dueTimeInput = document.createElement('input');
    dueTimeInput.classList.add('due-date-input');
    dueTimeInput.type = 'time';
    dueTimeInput.id = 'due-time';
    dueTimeInput.name = 'due-time';
    dueTimeContainer.appendChild(dueTimeLabel);
    dueTimeContainer.appendChild(dueTimeInput);
    thirdRowUpper.appendChild(dueTimeContainer);


    const selectionContainer = document.createElement('div');
    selectionContainer.classList.add('selection-container');

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');
    const priorityLabel = document.createElement('p');
    priorityLabel.textContent = 'Priority: ';

    const prioritySelection1 = document.createElement('div');
    prioritySelection1.classList.add('priority-selection');

    const low = document.createElement('input');
    low.type = 'radio';
    low.id = 'edit-low';
    low.name = 'edit-priority';
    low.value = 'low';
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for', 'edit-low');
    lowLabel.textContent = 'Low';
    prioritySelection1.appendChild(low);
    prioritySelection1.appendChild(lowLabel);

    const prioritySelection2 = document.createElement('div');
    prioritySelection2.classList.add('priority-selection');

    const medium = document.createElement('input');
    medium.type = 'radio';
    medium.id = 'edit-medium';
    medium.name = 'edit-priority';
    medium.value = 'medium';
    const mediumLabel = document.createElement('label');
    mediumLabel.setAttribute('for', 'edit-medium');
    mediumLabel.textContent = 'Medium';
    prioritySelection2.appendChild(medium);
    prioritySelection2.appendChild(mediumLabel);

    const prioritySelection3 = document.createElement('div');
    prioritySelection3.classList.add('priority-selection');

    const high = document.createElement('input');
    high.type = 'radio';
    high.id = 'edit-high';
    high.name = 'edit-priority';
    high.value = 'high';
    const highLabel = document.createElement('label');
    highLabel.setAttribute('for', 'edit-high');
    highLabel.textContent = 'High';
    prioritySelection3.appendChild(high);
    prioritySelection3.appendChild(highLabel);

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(prioritySelection1);
    priorityContainer.appendChild(prioritySelection2);
    priorityContainer.appendChild(prioritySelection3);

    const okBtn = document.createElement('button');
    okBtn.classList.add('ok-btn');
    okBtn.textContent = 'Edit Todo';
    
    selectionContainer.appendChild(priorityContainer);
    selectionContainer.appendChild(okBtn);

    thirdRow.appendChild(thirdRowUpper);
    thirdRow.appendChild(selectionContainer);

    todoForm.appendChild(titleInput);
    todoForm.appendChild(detailsInput);
    todoForm.appendChild(thirdRow);

    popupForm.appendChild(todoForm);
    popupFormContainer.appendChild(popupForm);

    document.querySelector('div#content').appendChild(popupFormContainer);

}

//pop up form for creating a new todo, project, or note
const formUI = () => {
    const popupFormContainer = document.createElement('div');
    popupFormContainer.setAttribute('id', 'popupFormContainer');
    const popupForm = document.createElement('div');
    popupForm.setAttribute('id', 'popupForm');

    const formHeader = document.createElement('div');
    formHeader.classList.add('form-header');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Create a new...';
    formHeader.appendChild(formTitle);

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');
    closeBtn.textContent = 'X';
    formHeader.appendChild(closeBtn);

    popupForm.appendChild(formHeader);

    const formBody = document.createElement('div');
    formBody.classList.add('form-body');

    const scrollBox = document.createElement('div');
    scrollBox.classList.add('scroll-box');

    scrollBox.appendChild(newItem('Todo', New, 'New Todo icon'));
    scrollBox.appendChild(newItem('Project', newProject, 'New Project icon'));
    scrollBox.appendChild(newItem('Note', newNote, 'New Note icon'));
    formBody.appendChild(scrollBox);

    const todoForm = document.createElement('form');
    todoForm.classList.add('todo-form');
    // todoForm.setAttribute('id', 'todo-form');

    formBody.appendChild(todoForm);

    popupForm.appendChild(formBody);
    popupFormContainer.appendChild(popupForm);

    document.querySelector('div#content').appendChild(popupFormContainer);
}

// add todo form
const addForm = () => {
    const todoForm = document.querySelector('#popupForm .todo-form');
    todoForm.setAttribute('id', 'todo-form');
    todoForm.setAttribute('onsubmit', "return false;");
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title-div');

    todoForm.innerHTML = '';
    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title: Pay bills';
    titleInput.setAttribute('required', 'true');
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.maxLength = 100;

    const remainingCharacters = document.createElement('p');
    remainingCharacters.classList.add('remaining-characters');
    remainingCharacters.id = 'remaining-characters';
    remainingCharacters.textContent = '100 characters remaining';

    titleDiv.appendChild(titleInput);
    titleDiv.appendChild(remainingCharacters);

    const detailDiv = document.createElement('div');
    detailDiv.classList.add('detail-div');
    const detailsInput = document.createElement('textarea');
    detailsInput.classList.add('details-input');
    detailsInput.placeholder = `Details (Optional):\n\nRent, Electricity, Water, Internet, etc...`;
    detailsInput.id = 'details';
    detailsInput.name = 'details';
    detailsInput.maxLength = 500;

    const remainingCharacters_two = document.createElement('p');
    remainingCharacters_two.classList.add('remaining-characters');
    remainingCharacters_two.id = 'remaining-characters-two';
    remainingCharacters_two.textContent = '500 characters remaining';

    detailDiv.appendChild(detailsInput);
    detailDiv.appendChild(remainingCharacters_two);

    const thirdRow = document.createElement('div');
    thirdRow.classList.add('third-row');

    const thirdRowUpper = document.createElement('div');
    thirdRowUpper.classList.add('third-row-upper');
    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('due-date-container');
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.textContent = 'Due Date: ';
    const dueDateInput = document.createElement('input');
    dueDateInput.classList.add('due-date-input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'due-date';
    dueDateInput.name = 'due-date';
    dueDateInput.setAttribute('required', 'true');
    let now = new Date();
    const today = now.toISOString().split('T')[0];
    dueDateInput.setAttribute('min', today);
    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateInput);
    thirdRowUpper.appendChild(dueDateContainer);


    const dueTimeContainer = document.createElement('div');
    dueTimeContainer.classList.add('due-date-container');
    const dueTimeLabel = document.createElement('label');
    dueTimeLabel.setAttribute('for', 'due-time');
    dueTimeLabel.textContent = 'Due Date: (Optional) ';
    const dueTimeInput = document.createElement('input');
    dueTimeInput.classList.add('due-date-input');
    dueTimeInput.type = 'time';
    dueTimeInput.id = 'due-time';
    dueTimeInput.name = 'due-time';
    dueTimeContainer.appendChild(dueTimeLabel);
    dueTimeContainer.appendChild(dueTimeInput);
    thirdRowUpper.appendChild(dueTimeContainer);


    const selectionContainer = document.createElement('div');
    selectionContainer.classList.add('selection-container');

    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('priority-container');
    const priorityLabel = document.createElement('p');
    priorityLabel.textContent = 'Priority: ';

    const prioritySelection1 = document.createElement('div');
    prioritySelection1.classList.add('priority-selection');

    const low = document.createElement('input');
    low.type = 'radio';
    low.id = 'low';
    low.name = 'priority';
    low.value = 'low';
    const lowLabel = document.createElement('label');
    lowLabel.setAttribute('for', 'low');
    lowLabel.textContent = 'Low';
    prioritySelection1.appendChild(low);
    prioritySelection1.appendChild(lowLabel);

    const prioritySelection2 = document.createElement('div');
    prioritySelection2.classList.add('priority-selection');

    const medium = document.createElement('input');
    medium.type = 'radio';
    medium.id = 'medium';
    medium.name = 'priority';
    medium.value = 'medium';
    const mediumLabel = document.createElement('label');
    mediumLabel.setAttribute('for', 'medium');
    mediumLabel.textContent = 'Medium';
    prioritySelection2.appendChild(medium);
    prioritySelection2.appendChild(mediumLabel);

    const prioritySelection3 = document.createElement('div');
    prioritySelection3.classList.add('priority-selection');

    const high = document.createElement('input');
    high.type = 'radio';
    high.id = 'high';
    high.name = 'priority';
    high.value = 'high';
    const highLabel = document.createElement('label');
    highLabel.setAttribute('for', 'high');
    highLabel.textContent = 'High';
    prioritySelection3.appendChild(high);
    prioritySelection3.appendChild(highLabel);

    priorityContainer.appendChild(priorityLabel);
    priorityContainer.appendChild(prioritySelection1);
    priorityContainer.appendChild(prioritySelection2);
    priorityContainer.appendChild(prioritySelection3);

    const okBtn = document.createElement('button');
    okBtn.classList.add('ok-btn');
    okBtn.textContent = 'Add Todo';
    
    selectionContainer.appendChild(priorityContainer);
    selectionContainer.appendChild(okBtn);

    thirdRow.appendChild(thirdRowUpper);
    thirdRow.appendChild(selectionContainer);

    todoForm.appendChild(titleDiv);
    todoForm.appendChild(detailDiv);
    todoForm.appendChild(thirdRow);

    todoForm.style.gridTemplateRows = 'min-content 3fr 2fr';
}

// add project form
const addProjectForm = () => {
    const todoForm = document.querySelector('#popupForm .todo-form');
    todoForm.setAttribute('id', 'project-form');
    todoForm.setAttribute('onsubmit', "return false;");
    todoForm.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('title-div');
    const detailsInput = document.createElement('textarea');
    detailsInput.classList.add('project-title-input');
    detailsInput.placeholder = `Enter Project Title:`;
    detailsInput.id = 'project-title';
    detailsInput.name = 'project-title';
    detailsInput.maxLength = 100;
    detailsInput.setAttribute('required', 'true');

    const remainingCharacters = document.createElement('p');
    remainingCharacters.classList.add('remaining-characters');
    remainingCharacters.id = 'remaining-characters-three';
    remainingCharacters.textContent = '100 characters remaining';

    div.appendChild(detailsInput);
    div.appendChild(remainingCharacters);

    const okBtn = document.createElement('button');
    okBtn.classList.add('proj-add-btn');
    okBtn.textContent = 'Add Project';

    todoForm.appendChild(div);
    todoForm.appendChild(okBtn);

    todoForm.style.gridTemplateRows = '2fr min-content';
}

// add note form
const addNoteForm = () => {
    const todoForm = document.querySelector('#popupForm .todo-form');
    todoForm.setAttribute('id', 'note-form');
    todoForm.setAttribute('onsubmit', "return false;");
    todoForm.innerHTML = '';

    const detailsInput = document.createElement('textarea');
    detailsInput.classList.add('note-title-input');
    detailsInput.placeholder = `Enter Note Title: Grocery List`;
    detailsInput.id = 'note-title';
    detailsInput.name = 'note-title';
    detailsInput.setAttribute('required', 'true');

    const detailsInput2 = document.createElement('textarea');
    detailsInput2.classList.add('note-details-input');
    detailsInput2.placeholder = `Enter Note Description (Optional): \n\nMilk, Eggs, Bread, etc...`;
    detailsInput2.id = 'note-details';
    detailsInput2.name = 'note-details';

    const okBtn = document.createElement('button');
    okBtn.classList.add('note-add-btn');
    okBtn.textContent = 'Add Note';

    todoForm.appendChild(detailsInput);
    todoForm.appendChild(detailsInput2);
    todoForm.appendChild(okBtn);

    todoForm.style.gridTemplateRows = 'min-content 2fr min-content';
}

// show the remaining characters left for the user
function updateRemainingCharacters(item, remainingCharacters) {
    const threshold = 50; // threshold for when to turn the text red
    const inputValue = item.value;
    const inputRemaining = item.maxLength - inputValue.length;
    remainingCharacters.textContent = `${inputRemaining} characters left`;
    if (inputRemaining <= 0) {
        remainingCharacters.textContent = `No characters left`;
    } else if (inputRemaining === 1) {
        remainingCharacters.textContent = `${inputRemaining} character left`;
    }
    if (inputRemaining <= threshold) {
        remainingCharacters.classList.add('red-text');
    } else {
        remainingCharacters.classList.remove('red-text');
    }
}

// helper function for creating new todo, project, and note icons on the sidebar
const newItem  = (text, img, imgText) => {
    const newTodoBox = document.createElement('div');
    newTodoBox.classList.add('new-todo-box');
    const itemIcon = document.createElement('img');
    itemIcon.src = img;
    itemIcon.alt = imgText;

    const itemText = document.createElement('p');
    itemText.textContent = text;
    newTodoBox.appendChild(itemIcon);
    newTodoBox.appendChild(itemText);
    return newTodoBox;
}

// creating all popup form needed
const createPopupContainers = () => {
    createDetailContainer();
    createEditContainer();
    editProjectContainer();
    formUI();
}

export default createPopupContainers;
export {addForm, addProjectForm, addNoteForm, updateRemainingCharacters};