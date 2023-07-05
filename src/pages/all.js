import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import { formatDistanceToNow, isSameDay, addDays } from 'date-fns';

const displayTodoItem = (title, details, dueDate, dueTime, priority) => {
    const todoList = document.querySelector('.todo-list');

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    const colorPane = document.createElement('div');
    let color = priority === 'low' ? 'green' : priority === 'medium' ? 'orange' : 'red';
    colorPane.style.backgroundColor = color;

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');

    const todoLeft = document.createElement('div');
    todoLeft.classList.add('todo-left');

    const completed = document.createElement('div');
    completed.classList.add('completed');

    const todoTitle = document.createElement('h2');
    todoTitle.textContent = title;

    const todoRight = document.createElement('div');
    todoRight.classList.add('todo-right');

    const todoDetails = document.createElement('button');
    todoDetails.classList.add('todo-details');
    todoDetails.textContent = 'Details';

    // Get the due date of the task
    const relDueDate = new Date(dueDate);
    const today = new Date();
    let distanceToDueDate = '';

    if (dueTime == '') {
        // Check if the due date is today
        if (isSameDay(relDueDate, today)) {
            distanceToDueDate = 'Today';
        } else {
            // Calculate the distance to the due date
            distanceToDueDate = formatDistanceToNow(relDueDate, { addSuffix: true, includeSeconds: false });

            // Check if the due date is tomorrow
            const tomorrow = addDays(today, 1);
            if (isSameDay(relDueDate, tomorrow)) {
                console.log('Task is due tomorrow');
                distanceToDueDate = 'Tomorrow';
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



    const todoDueDate = document.createElement('p');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = 'Due ' + distanceToDueDate;

    // Display the due time in words
    console.log(`Task is due ${distanceToDueDate}`);

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
    todoLeft.appendChild(todoTitle);

    todoText.appendChild(todoLeft);
    todoText.appendChild(todoRight);

    todoItem.appendChild(colorPane);
    todoItem.appendChild(todoText);

    todoList.appendChild(todoItem);

    colorPane.classList.add('color-pane');

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

    displayTodoItem('Pay bills', 'Pay the bills for the month', '2023-08-4', '', 'low');
    displayTodoItem('Pay bills', 'Pay the bills for the month', '2023-06-13', '', 'high');
    displayTodoItem('Pay bills', 'Pay the bills for the month', '2023-07-4', '', 'medium');
    displayTodoItem('Pay bills', 'Pay the bills for the month', '2023-05-4', '', 'high');
    displayTodoItem('Pay bills', 'Pay the bills for the month', '2023-06-4', '', 'low');
};


const project = ((title = 'default') => {
    let todoList = [];

    const addTodoItem = (title, details, dueDate, dueTime, priority) => {
        todoList.push({ title, details, dueDate, dueTime, priority });
    }

    const removeTodoItem = (title) => {
        todoList = todoList.filter((item) => item.title !== title);
    }

    const getTodoList = () => todoList;

    return {addTodoItem, removeTodoItem, getTodoList };
})();

export default allUI;

export { project };

// const addTodoItemUI = () => {
