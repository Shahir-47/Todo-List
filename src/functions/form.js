import { id } from 'date-fns/locale';
import New from '../assets/img/new.svg';
import newNote from '../assets/img/newNote.svg';
import newProject from '../assets/img/newProject.svg';

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
    popupForm.appendChild(formHeader);

    const formBody = document.createElement('div');
    formBody.classList.add('form-body');

    const scrollBox = document.createElement('div');
    scrollBox.classList.add('scroll-box');

    scrollBox.appendChild(newItem('Todo', New, 'New Todo icon'));
    scrollBox.appendChild(newItem('Project', newProject, 'New Project icon'));
    scrollBox.appendChild(newItem('Note', newNote, 'New Note icon'));
    formBody.appendChild(scrollBox);

    const todoForm = document.createElement('div');
    todoForm.classList.add('todo-form');

    const titleInput = document.createElement('input');
    titleInput.classList.add('title-input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Title: Pay bills';
    titleInput.setAttribute('required', 'true');
    titleInput.id = 'title';
    titleInput.name = 'title';

    const detailsInput = document.createElement('textarea');
    detailsInput.classList.add('details-input');
    detailsInput.placeholder = 'Details: Rent, Electricity, Water, Internet, etc...';
    detailsInput.id = 'details';
    detailsInput.name = 'details';


    const thirdRow = document.createElement('div');
    thirdRow.classList.add('third-row');

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
    const today = new Date().toISOString().split('T')[0];
    dueDateInput.setAttribute('min', today);
    dueDateContainer.appendChild(dueDateLabel);
    dueDateContainer.appendChild(dueDateInput);

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

    thirdRow.appendChild(dueDateContainer);
    thirdRow.appendChild(selectionContainer);

    todoForm.appendChild(titleInput);
    todoForm.appendChild(detailsInput);
    todoForm.appendChild(thirdRow);
    formBody.appendChild(todoForm);

    popupForm.appendChild(formBody);
    popupFormContainer.appendChild(popupForm);

    document.querySelector('div#content').appendChild(popupFormContainer);
}

export default formUI;