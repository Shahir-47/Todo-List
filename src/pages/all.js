import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import formValidation from '../functions/form';
import { formatDistanceToNow, isSameDay, addDays, differenceInCalendarDays, format, parseISO, parse } from 'date-fns';
import { storage } from '../functions/storage';
import { project } from '../functions/project';

// const handle todo item events
const itemsEventHandler = (event) => {
    // if event target is the completed checkbox
    if (event.target.closest('.todo-item .completed')) {
        project.projectItemCompleted(event.target.closest('.todo-item').id);
    }
    // if event target is the delete button
    if (event.target.closest('.todo-item .todo-delete')) {
        project.projectItemDeleted( event.target.closest('.todo-item').id);
    }
    if (event.target.closest('.todo-item .star img')) {
        const starImg = event.target.closest('.todo-item .star img');
        starImg.src = star ? fullStar : star;
        project.projectItemStarred(event.target.closest('.todo-item').id);
    }
    // if event target is the edit button
    if (event.target.closest('.todo-item .todo-edit')) {
        event.target.closest('.todo-item').id;
        document.querySelector('#edit-form').setAttribute('data-id', event.target.closest('.todo-item').id);
        console.log(event.target.closest('.todo-item').id)
        document.getElementById('editFormContainer').style.display = 'block';
        editItems(event.target.closest('.todo-item').id);
        // close the edit form
        document.querySelector('#closeEditBtn').addEventListener('click', () => {
            document.getElementById('editFormContainer').style.display = 'none';
        });
        // submit the edit form
        document.querySelector('#edit-form').addEventListener('submit', (e) => {
            console.log(e.target.getAttribute('data-id'));
            formValidation(e, e.target.getAttribute('data-id'));
        });
    }
    // if clicked anywhere on the todo item but the buttons, show details
    if (event.target.closest('.todo-item') && !event.target.closest('.todo-item .todo-delete') && !event.target.closest('.todo-item .completed') && !event.target.closest('.todo-item .todo-edit') && !event.target.closest('.todo-item .star')) {
        // show the details form
        document.getElementById('detailFormContainer').style.display = 'block';
        displayDetail(event.target.closest('.todo-item').id);
        // close the details form
        document.querySelector('#closeDetailsBtn').addEventListener('click', () => {
            document.getElementById('detailFormContainer').style.display = 'none';
        });
    }
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
        document.querySelector('#editForm #edit-low').checked = true;
    }
    if (item.priority == 'medium') {
        document.querySelector('#editForm #edit-medium').checked = true;
    }
    if (item.priority == 'high') {
        document.querySelector('#editForm #edit-high').checked = true;
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
    project.sort(name);
    console.log(project.getProjectTodoList());
    const projectList = storage.getFromLocalStorage();
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
    let starred = item.starred;

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

    todoRight.appendChild(todoDetails);
    todoRight.appendChild(todoDueDate);
    todoRight.appendChild(starBtn);
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

    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('.item:nth-of-type(1)').classList.add('active');

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

    displayAllItems();
};

export default allUI;

export { displayTodoItem, taskDoneUI, itemsEventHandler, removeTodoItemUI };