import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import { formatDistanceToNow, isSameDay, addDays, differenceInCalendarDays, format, parseISO, parse } from 'date-fns';
import { storage } from '../functions/storage';
import { v4 as uuidv4 } from 'uuid';

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

const editItems = (index) => {
    let name = index.split('~')[0];

    const item = project.getProjectTodoList(name).find(item => item.index == index);
    const title = document.querySelector('#editForm #title');
    const details = document.querySelector('#editForm #details');
    const dueDate = document.querySelector('#editForm #due-date');
    const dueTime = document.querySelector('#editForm #due-time');

    title.value = item.title;
    details.value = item.details;
    dueDate.value = item.dueDate;
    dueTime.value = item.dueTime;
    if (item.priority == 'low') {
        document.querySelector('#editForm #low').checked = true;
    }
    if (item.priority == 'medium') {
        document.querySelector('#editForm #medium').checked = true;
    }
    if (item.priority == 'high') {
        document.querySelector('#editForm #high').checked = true;
    }
}

const displayDetail = (index) => {

    const detailBody = document.querySelector('.detail-body');
    detailBody.innerHTML = '';

    let name = index.split('~')[0];
    let proj = project.getProjectTodoList(name);
    let item = proj.find(item => item.index == index);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    const titleInput = document.createElement('p');
    titleInput.classList.add('detail-title');
    titleInput.textContent = item.title; 
    wrapper.appendChild(titleInput);
    detailBody.appendChild(wrapper);


    const priorityContainer = document.createElement('div');
    priorityContainer.classList.add('title-container');
    const priority = document.createElement('p');
    priority.textContent = "Priority: ";
    const priorityInput = document.createElement('p');
    priorityInput.textContent = item.priority;
    priorityContainer.appendChild(priority);
    priorityContainer.appendChild(priorityInput);
    detailBody.appendChild(priorityContainer);

    if (item.dueTime !== '') {
        const dueContainer = document.createElement('div');
        dueContainer.classList.add('due-container');

        const dueDateContainer = document.createElement('div')
        dueDateContainer.classList.add('title-container');
        const dueDate = document.createElement('p');
        dueDate.textContent = "Due Date: ";
        const dueDateInput = document.createElement('p');
        dueDateInput.textContent = format(parseISO(item.dueDate), 'do MMMM yyyy');
        dueDateContainer.appendChild(dueDate);
        dueDateContainer.appendChild(dueDateInput);

        const dueTimeContainer = document.createElement('div');
        dueTimeContainer.classList.add('title-container');
        const dueTime = document.createElement('p');
        dueTime.textContent = "Due Time: ";
        const dueTimeInput = document.createElement('p');
        dueTimeInput.textContent = format(parse(item.dueTime, 'HH:mm', new Date()), 'h:mm a');
        dueTimeContainer.appendChild(dueTime);
        dueTimeContainer.appendChild(dueTimeInput);

        dueContainer.appendChild(dueDateContainer);
        dueContainer.appendChild(dueTimeContainer);

        detailBody.appendChild(dueContainer);

    } else {

        const dueDateContainer = document.createElement('div')
        dueDateContainer.classList.add('title-container');
        const dueDate = document.createElement('p');
        dueDate.textContent = "Due Date: ";
        const dueDateInput = document.createElement('p');
        dueDateInput.textContent = format(parseISO(item.dueDate), 'do MMMM yyyy');
        dueDateContainer.appendChild(dueDate);
        dueDateContainer.appendChild(dueDateInput);

        detailBody.appendChild(dueDateContainer);
    }

    let ans = item.done.flag ? 'Yes' : 'No';

    if (item.done.flag) {
        const completeContainer = document.createElement('div');
        completeContainer.classList.add('due-container');

        const container = document.createElement('div');
        container.classList.add('title-container');
        
        const completed = document.createElement('p');
        completed.textContent = "Completed: ";

        const completedInput = document.createElement('p');
        completedInput.textContent = ans;

        container.appendChild(completed);
        container.appendChild(completedInput);


        const container2 = document.createElement('div');
        container2.classList.add('title-container');
        const completedDate = document.createElement('p');
        completedDate.textContent = "Completed at: ";

        const completedDateInput = document.createElement('p');
        completedDateInput.textContent = format(new Date(item.done.timestamp), "h:mm a 'on' do MMMM yyyy");;

        container2.appendChild(completedDate);
        container2.appendChild(completedDateInput);

        completeContainer.appendChild(container);
        completeContainer.appendChild(container2);

        detailBody.appendChild(completeContainer);
    } else {
        const container = document.createElement('div');
        container.classList.add('title-container');
        
        const completed = document.createElement('p');
        completed.textContent = "Completed: ";

        const completedInput = document.createElement('p');
        completedInput.textContent = ans;

        container.appendChild(completed);
        container.appendChild(completedInput);

        detailBody.appendChild(container);
    }

    if (item.details !== '') {
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('title-container');
        const details = document.createElement('p');
        details.textContent = "Details: ";
        const detail = document.createElement('div');
        detail.classList.add('wrapper');
        const detailsInput = document.createElement('p');
        detailsInput.textContent = item.details;
        detail.appendChild(detailsInput);
        detailsContainer.appendChild(details);
        detailsContainer.appendChild(detail);

        detailBody.appendChild(detailsContainer);
    }
}

const displayAllItems = (name = 'default') => {
    console.log(storage.getFromLocalStorage())
    const projectList = storage.getFromLocalStorage();
    console.log(projectList);
    let defaultProject = projectList.find(project => project.name == name);

    // Access the todoList property of the default project
    for (let i = 0; i < defaultProject.todoList.length; i++) {
        displayTodoItem(defaultProject.todoList[i]);
    }
}

const displayTodoItem = (item) => {
    let title = item.title;
    let details = item.details;
    let dueDate = item.dueDate;
    let dueTime = item.dueTime;
    let priority = item.priority;
    let done =  item.done.flag;
    let index = item.index;

    const todoList = document.querySelector('.todo-list');

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.id = item.index;

    const colorPane = document.createElement('div');
    let color = priority === 'low' ? 'green' : priority === 'medium' ? 'orange' : 'red';
    colorPane.style.backgroundColor = color;

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');

    const todoLeft = document.createElement('div');
    todoLeft.classList.add('todo-left');

    const completed = document.createElement('div');
    completed.classList.add('completed');

    const wordContainer = document.createElement('div');
    wordContainer.classList.add('word-container');
    const todoTitle = document.createElement('h2');
    if (title.length > 55) {
        todoTitle.textContent = title.slice(0, 55) + '...';
    } else {
        todoTitle.textContent = title;
    }
    wordContainer.appendChild(todoTitle);

    const todoRight = document.createElement('div');
    todoRight.classList.add('todo-right');

    const todoDetails = document.createElement('button');
    todoDetails.classList.add('todo-details');
    todoDetails.textContent = 'Details';

    const todoDueDate = document.createElement('p');
    todoDueDate.classList.add('todo-due-date');

    let interval;

    function updateTime() {

        // Get the due date of the task
        let year = dueDate.slice(0, 4);
        let month = dueDate.slice(5, 7);
        let day = dueDate.slice(8, 10);

        const relDueDate = new Date(year, month-1, day);
        new Date(year, month, day)
        const today = new Date();
        let distanceToDueDate = '';

        if (dueTime == '') {
            // Check if the due date is today
            if (isSameDay(relDueDate, today)) {
                distanceToDueDate = 'Today';
            } else if (isSameDay(relDueDate, addDays(today, 1))) {
                distanceToDueDate = 'Tomorrow';
            } else  {
                // Calculate the time difference between the current date/time and the task due date
                const distanceInDays = differenceInCalendarDays(relDueDate, today);
                if (distanceInDays < 0) {
                    distanceToDueDate = `${Math.abs(distanceInDays)} day(s) ago`;
                } else  if (distanceInDays > 0) {
                    distanceToDueDate = `${distanceInDays} day(s) from now`;
                }
                
            }
        } else {
            const [year, month, day] =  dueDate.split('-');
            const taskDueDate = new Date(year, month - 1, day);

            // Parse the time input value
            const [hours, minutes] = dueTime.split(':');

            taskDueDate.setHours(hours);
            taskDueDate.setMinutes(minutes);
            // Calculate the time difference between the current date/time and the task due date
            distanceToDueDate = formatDistanceToNow(taskDueDate, { addSuffix: true });
        }    

        const itemSync = project.getProjectTodoList().find(item => item.index == index);

        if (!itemSync) {
            clearInterval(interval); // Stop the interval
            return;
        }

        if (itemSync.done.flag == false) {
            todoDueDate.textContent = 'Due ' + distanceToDueDate;
        } else {
            distanceToDueDate = formatDistanceToNow(new Date(itemSync.done.timestamp), { addSuffix: true });
            todoDueDate.textContent = 'Completed ' + distanceToDueDate;
        }
    }

    // Update the time displayed every second
    interval = setInterval(updateTime, 1000);

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

    todoRight.appendChild(todoDetails);
    todoRight.appendChild(todoDueDate);
    todoRight.appendChild(todoEdit);
    todoRight.appendChild(todoDelete);

    todoLeft.appendChild(completed);
    todoLeft.appendChild(wordContainer);

    todoText.appendChild(todoLeft);
    todoText.appendChild(todoRight);

    todoItem.appendChild(colorPane);
    todoItem.appendChild(todoText);

    todoList.appendChild(todoItem);

    colorPane.classList.add('color-pane');

    if (done) {
        todoItem.classList.add('checked-item');
        completed.classList.add('checked');
        completed.textContent = '✓';
        todoTitle.classList.add('checked-text');
    }

}

const taskDoneUI = (id) => {
    const item = document.getElementById(id);
    const box = item.querySelector('.completed');

    if (box.classList.contains('checked')) {
        box.textContent = '';
    } else {
        box.textContent = '✓';
    }
    box.classList.toggle('checked');
    item.classList.toggle('checked-item');
    item.querySelector('.todo-left h2').classList.toggle('checked-text');
}

const removeTodoItemUI = (id) => {
    const item = document.getElementById(id);
    item.parentNode.removeChild(item);
}

const allUI = () => {
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
};


const project = ((name = 'default') => {

    let projectList = storage.getFromLocalStorage();
    
    const updateProjectList = () => {
        projectList = storage.getFromLocalStorage();
    }

    const addToProjectList = (name) => {
        projectList.push({
            name,
            todoList: []
        });
        storage.saveToLocalStorage(projectList);
        updateProjectList();
    }

    const addToProjectItem = (title, details, dueDate, dueTime, priority, done = { flag: false, timestamp: null }, name = 'default') => {
        console.log(projectList);
        let defaultProject = projectList.find(project => project.name == name);

        // Access the todoList property of the default project

        let index =  name + '~' + uuidv4();
        let item = { name, index, title, details, dueDate, dueTime, priority, done };
        defaultProject.todoList.push(item);
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        displayTodoItem(item);
    }

    const editProjectItem = (index, title, details, dueDate, dueTime, priority) => {
        let name = index.split('~')[0];
        let defaultProject = projectList.find(project => project.name == name);

        // Access the todoList property of the default project
        let item = defaultProject.todoList.find(item => item.index == index);
        item.title = title;
        item.details = details;
        item.dueDate = dueDate;
        item.dueTime = dueTime;
        item.priority = priority;
        console.log(item);
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        displayTodoItem(item);
    }

    // const generateUniqueID = () => {
    //     const timestamp = Date.now().toString();
    //     const randomChars = Math.random().toString(36).substr(2, 5);
    //     return timestamp + '-' + randomChars;
    // }

    // const removeTodoItem = (index) => {
    //     todoList.splice(index, 1);
    // }

    const getProjectTodoList = (name = 'default') => {
        return projectList.find(project => project.name === name).todoList;
    }

    const projectItemCompleted = (index) => {
        let name = index.split('~')[0];
        let completedProj = projectList.find(project => project.name === name);
        console.log(completedProj);
        let completeIndex = completedProj.todoList.findIndex(item => item.index == index);
        completedProj.todoList[completeIndex].done.flag = !completedProj.todoList[completeIndex].done.flag;
        completedProj.todoList[completeIndex].done.timestamp = new Date();
        console.log(completedProj.todoList[completeIndex].done);
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        taskDoneUI(index);
    }

    const projectItemDeleted = (index) => {
        let name = index.split('~')[0];
        let deletedProj = projectList.find(project => project.name === name);
        removeTodoItemUI(index);
        console.log(deletedProj.todoList.findIndex(item => item.index == index));
        let deleteIndex = deletedProj.todoList.findIndex(item => item.index == index);
        deletedProj.todoList.splice(deleteIndex, 1);
        console.log(deletedProj.todoList);
        storage.saveToLocalStorage(projectList);
        updateProjectList();
    }

    // const itemCompleted = (index) => {
    //     let i = index.split('-')[2];
    //     todoList[index].done = !todoList[index].done;
    //     taskDoneUI(index);
    // }

    return {addToProjectList, addToProjectItem, getProjectTodoList, projectItemCompleted, projectItemDeleted, editProjectItem};
})();

// console.log(project.getProjectTodoList());
// console.log(getFromLocalStorage());

export default allUI;

export { project, displayTodoItem, taskDoneUI, displayAllItems, createDetailContainer, displayDetail, createEditContainer, editItems };

// const addTodoItemUI = () => {
