import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import formValidation from '../functions/form';
import { formatDistanceToNow, isSameDay, addDays, differenceInCalendarDays, format, parseISO, parse, set } from 'date-fns';
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
        document.querySelector('#edit-form').setAttribute('data-id', event.target.closest('.todo-item').id);
        document.getElementById('editFormContainer').style.display = 'block';
        editItems(event.target.closest('.todo-item').id);
        // close the edit form
        document.querySelector('#closeEditBtn').addEventListener('click', () => {
            document.getElementById('editFormContainer').style.display = 'none';
        });
        // submit the edit form
        document.querySelector('#edit-form').addEventListener('submit', (e) => {
            console.log(e.target.getAttribute('data-id'));
            formValidation(e.target, e.target.getAttribute('data-id'));
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

const sortItems = (event) => {
    let filter;
    if (document.querySelector('.project-title')){
        filter = document.querySelector('.selection input[name="proj-selection"]:checked').value;
    } else {
        filter = document.querySelector('.selection input[name="selection"]:checked').value;
    }
    console.log(filter);
    if (event == 'Time') {
        if (document.querySelector('.project-title')){
            displayAllItems(document.querySelector('.project-title').textContent, 'Time', filter);
        } else {
            displayAllItems('default', 'Time', filter);
        }
    } else if (event == 'priority') {
        if (document.querySelector('.project-title')){
            displayAllItems(document.querySelector('.project-title').textContent, 'priority', filter);
        } else {
            displayAllItems('default', 'priority', filter);
        }
    }
}

const displayAllItems = (name = 'default', sortBy = 'Time', filter = 'All') => {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';

    // get the right list and then sort it
    let projectList = storage.getFromLocalStorage();
    name = projectList.find(project => project.displayName == name).name;
    if (sortBy == 'Time') {
        project.sort(name);
    } else if (sortBy == 'priority') {
        project.sortByPriority(name);
    }

    // now get the sorted data and then filter it
    projectList = storage.getFromLocalStorage();
    let defaultProject = projectList.find(project => project.name == name);

    console.log()
    console.log(defaultProject.todoList);
    // debugger;
    // Access the todoList property of the default project
    let list = []
    if (filter == 'All') {
        list = defaultProject.todoList;
    } else if (filter == 'Today') {
        list = defaultProject.todoList.filter(item => !item.done.flag);
        list = list.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) >= new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) >= 0)));
        list = list.filter(item => {
            if (item.dueTime) {
                let [year, month, day] =  item.dueDate.split('-');
                let dueDate = new Date(year, month - 1, day);
                let [hours, minutes] = item.dueTime.split(':');
                dueDate.setHours(hours);
                dueDate.setMinutes(minutes);
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(dueDate, { addSuffix: true });
                distance = distance.split(' ');
                if ((parseInt(distance[2]) <= 24 && (distance[3] == 'hour' || distance[3] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return true;
                } else {
                    return false;
                } 
            } else if (isSameDay(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date())) {
                return true;
            } else {
                return false;
            }
        })
    } else if (filter == 'Week') {
        list = defaultProject.todoList.filter(item => !item.done.flag);
        list = list.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) >= new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) >= 0)));
        list = list.filter(item => (item.dueTime && differenceInCalendarDays(new Date(item.dueDate + ' ' + item.dueTime), new Date()) <= 7) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) <= 7)));
    } else if (filter == 'Important') {
        list = defaultProject.todoList.filter(item => item.starred == true);
    } else if (filter == 'Completed'){
        list = defaultProject.todoList.filter(item => item.done.flag == true);
    } else if (filter == 'High') {
        list = defaultProject.todoList.filter(item => item.priority == 'high');
    }

    for (let i = 0; i < list.length; i++) {
        displayTodoItem(list[i]);
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
    let name = index.split('~')[0];

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
    if (title.length > 43) {
        todoTitle.textContent = title.slice(0, 43) + '...';
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

        const itemSync = project.getProjectTodoList(name).find(item => item.index == index);

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

const createRadioBtn = (name, value, id, checked = false) => {
    const prioritySelection1 = document.createElement('div');
    prioritySelection1.classList.add('priority-selection');

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.id = id;
    radio.name = name;
    radio.value = value;
    radio.checked = checked;
    const radioLabel = document.createElement('label');
    radioLabel.setAttribute('for', id);
    radioLabel.textContent = value;
    prioritySelection1.appendChild(radio);
    prioritySelection1.appendChild(radioLabel);

    return prioritySelection1;
}

const allUI = () => {

    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('.box:nth-of-type(1) .item:nth-of-type(1)').classList.add('active');

    const pageContent = document.querySelector('#page-content');
    const footer = document.querySelector('footer');

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const display = document.createElement('div');
    display.classList.add('display');

    const selection = document.createElement('div');
    selection.classList.add('selection');

    const all = createRadioBtn('selection', 'All', 'All', true);
    const today = createRadioBtn('selection', 'Today', 'Today');
    const week = createRadioBtn('selection', 'Week', 'Week');
    const month = createRadioBtn('selection', 'Month', 'Month');
    const important = createRadioBtn('selection', 'Important', 'Important');
    const completed = createRadioBtn('selection', 'Completed', 'Completed');
    const starred = createRadioBtn('selection', 'Starred', 'Starred');
    const high = createRadioBtn('selection', 'High', 'High');
    const medium = createRadioBtn('selection', 'Medium', 'Medium');
    const low = createRadioBtn('selection', 'Low', 'Low');

    selection.appendChild(all);
    selection.appendChild(today);
    selection.appendChild(week);
    // selection.appendChild(month);
    selection.appendChild(important);
    selection.appendChild(completed);
    // selection.appendChild(starred);
    selection.appendChild(high);
    // selection.appendChild(medium);
    // selection.appendChild(low);

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

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - display.offsetHeight - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    display.style.marginRight = addBtn.offsetWidth + 72 + 'px';
    pageContent.appendChild(todoList);

    displayAllItems();
};

setInterval(() => {
    document.querySelectorAll('.todo-item .todo-due-date').forEach(item => {
      if (item.textContent == 'Due less than a minute ago' || item.textContent == 'Due 1 minute ago') {
        displayAllItems('default', document.querySelector('.sort #sort-selection').value, document.querySelector('.selection input[name="selection"]:checked').value);
      }
    });
}, 60000);

//Update the todo list every 24 hours
setInterval(() => {
    displayAllItems('default', document.querySelector('.sort #sort-selection').value, document.querySelector('.selection input[name="selection"]:checked').value);
}, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
  
export default allUI;

export { displayTodoItem, taskDoneUI, itemsEventHandler, removeTodoItemUI, sortItems, displayAllItems, createRadioBtn };
