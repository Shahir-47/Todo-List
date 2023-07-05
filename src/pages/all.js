import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import { formatDistanceToNow, isSameDay, addDays, set } from 'date-fns';
import { it } from 'date-fns/locale';
import { saveToLocalStorage, getFromLocalStorage } from '../functions/storage';


const displayAllItems = (name = 'default') => {
    const projectList = getFromLocalStorage();
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
    let done =  item.done;

    const todoList = document.querySelector('.todo-list');

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.id = item.name + '-' + item.index;

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

    const todoDueDate = document.createElement('p');
    todoDueDate.classList.add('todo-due-date');

    function updateTime() {

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

    const project = getFromLocalStorage().find(project => project.name === item.name);
    const itemSync = project.todoList.find(item => item.index === item.index);      

        if (itemSync.done == false) {
            if (distanceToDueDate.includes('ago')) {
                todoDueDate.textContent = 'Overdue by ' + distanceToDueDate.slice(0, distanceToDueDate.length - 4);
            } else if (distanceToDueDate.includes('in')) {
                todoDueDate.textContent = 'Due ' + distanceToDueDate;
            }
        } else {
            distanceToDueDate = formatDistanceToNow(new Date(), { addSuffix: true });
            todoDueDate.textContent = 'Completed ' + distanceToDueDate;
        }
    }

    // Update the time displayed every second
    setInterval(updateTime, 1000);

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

const taskDoneUI = (id) => {
    const item = document.getElementById(id);
    const box = item.querySelector('.completed');
    const time = item.querySelector('.todo-right .todo-due-date')
    let completedInterval = null;

    if (box.classList.contains('checked')) {
        box.textContent = '';
    } else {
        box.textContent = '✓';
    }
    box.classList.toggle('checked');
    item.classList.toggle('checked-item');
    item.querySelector('.todo-left h2').classList.toggle('checked-text');
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

    // const todoListCopy = project.getTodoList();
    // for (let i = 0; i < todoListCopy.length; i++) {
    //     displayTodoItem(i, ,todoListCopy[i].title, todoListCopy[i].details, todoListCopy[i].dueDate, todoListCopy[i].dueTime, todoListCopy[i].priority, todoListCopy[i].done);
    // }
};


const project = ((name = 'default') => {

    let projectList = [
        {
            name: 'default',
            todoList: []
        }
    ];

    const addToProjectList = (name) => {
        projectList.push({
            name,
            todoList: []
        });
        saveToLocalStorage(projectList);
    }

    const addToProjectItem = (title, details, dueDate, dueTime, priority, done = false, name = 'default') => {

        let defaultProject = projectList.find(project => project.name == name);

        // Access the todoList property of the default project

        let index =  defaultProject.todoList.length;
        let item = { name, index, title, details, dueDate, dueTime, priority, done };
        defaultProject.todoList.push(item);
        saveToLocalStorage(projectList);
        console.log(getFromLocalStorage());
        displayTodoItem(item);
    }

    // const removeTodoItem = (index) => {
    //     todoList.splice(index, 1);
    // }

    const getProjectTodoList = (name = 'default') => {
        return projectList.find(project => project.name === name).todoList;
    }

    const projectItemCompleted = (index) => {
        let [name, i] = index.split('-');
        let completedProj = projectList.find(project => project.name === name);
        completedProj.todoList[i].done = !completedProj.todoList[i].done;
        saveToLocalStorage(projectList);
        taskDoneUI(index);
    }

    // const itemCompleted = (index) => {
    //     let i = index.split('-')[2];
    //     todoList[index].done = !todoList[index].done;
    //     taskDoneUI(index);
    // }

    return {addToProjectList, addToProjectItem, getProjectTodoList, projectItemCompleted};
})();


export default allUI;

export { project, displayTodoItem, taskDoneUI, displayAllItems };

// const addTodoItemUI = () => {
