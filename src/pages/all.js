import edit from '../assets/img/edit.svg';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import sad from '../assets/img/sad.svg';
import noTask from '../assets/img/noTask.svg';
import formValidation from '../functions/form';
import { formatDistanceToNow, isSameDay, addDays, differenceInCalendarDays, format, parseISO, parse, set } from 'date-fns';
import { storage } from '../functions/storage';
import { project } from '../functions/project';
import searchTask from '../functions/search';

//handle actions on the todo items
const itemsEventHandler = (event) => {
    // if event target is the completed checkbox
    if (event.target.closest('.todo-item .completed')) {
        project.projectItemCompleted(event.target.closest('.todo-item').id);
    }
    // if event target is the delete button
    if (event.target.closest('.todo-item .todo-delete')) {
        project.projectItemDeleted( event.target.closest('.todo-item').id);
    }
    // if event target is the star button
    if (event.target.closest('.todo-item .star img')) {
        const starImg = event.target.closest('.todo-item .star img');
        starImg.src = star ? fullStar : star;
        project.projectItemStarred(event.target.closest('.todo-item').id);
    }
    // if event target is the edit button
    if (event.target.closest('.todo-item .todo-edit')) {
        // set the the item's id as the form's data-id attribute
        document.querySelector('#edit-form').setAttribute('data-id', event.target.closest('.todo-item').id);
        document.getElementById('editFormContainer').style.display = 'block';
        editItems(event.target.closest('.todo-item').id);
        // close the edit form
        document.querySelector('#closeEditBtn').addEventListener('click', () => {
            document.getElementById('editFormContainer').style.display = 'none';
        });
        // submit the edit form
        document.querySelector('#edit-form').addEventListener('submit', (e) => {
            
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

// add the data of the item to the edit form
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

// show the detail of the item
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

// sort item based on the sort dropdown value
const sortItems = (event) => {
    // account for which filter is selected
    let filter;
    if (document.querySelector('.project-title')){
        filter = document.querySelector('.selection input[name="proj-selection"]:checked').value;
    } else {
        filter = document.querySelector('.selection input[name="selection"]:checked').value;
    }
    
    // taking both sort and filter into account, display the right items
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

// displays todo items from all or specific project, and then filters and sorts those todo items
const displayAllItems = (name = 'default', sortBy = 'Time', filter = 'All') => {
    const searchBar = document.getElementById('search');
    const todoList = document.querySelector('.todo-list');
    // clear the todo list
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
    
    // filter the sorted list based on the filter parameter
    let list = []
    if (filter == 'All') {
        searchBar.placeholder = 'Search all tasks';
        list = defaultProject.todoList; // nothing changes, show all items
    } else if (filter == 'Today') {
        searchBar.placeholder = 'Search today\'s tasks';
        // filter for incomplete items first
        list = defaultProject.todoList.filter(item => !item.done.flag);
        // then filter for items with due date today or in the future, or a due time in the past no less than a day ago
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
        searchBar.placeholder = 'Search this week\'s tasks';
        // filter for incomplete items first
        list = defaultProject.todoList.filter(item => !item.done.flag);
        // then filter for items with due date today or in the future, or a due time in the past no less than a day ago
        list = list.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) >= new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) >= 0)));
        // then filter for items with due date within a week from now
        list = list.filter(item => (item.dueTime && differenceInCalendarDays(new Date(item.dueDate + ' ' + item.dueTime), new Date()) <= 7) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) <= 7)));
    } else if (filter == 'Important') {
        searchBar.placeholder = 'Search important tasks';
        list = defaultProject.todoList.filter(item => item.starred == true);
    } else if (filter == 'Completed'){
        searchBar.placeholder = 'Search completed tasks';
        list = defaultProject.todoList.filter(item => item.done.flag == true);
    } else if (filter == 'High') {
        searchBar.placeholder = 'Search high priority tasks';
        list = defaultProject.todoList.filter(item => item.priority == 'high');
    }

    // if the list is empty, display the no item icon
    if (list.length == 0) {
        todoList.classList.add('no-item')
        const noItem = document.createElement('div');
        noItem.classList.add('no-item');
        const noItemIcon = document.createElement('img');
        noItemIcon.src = noTask;
        noItemIcon.alt = 'No task icon';
        noItemIcon.draggable = false;
        noItem.appendChild(noItemIcon);
        const noItemText = document.createElement('p');
        if (filter == 'All') {
            noItemText.textContent = 'Yaay! No tasks left!';
        } else if (filter == 'Today') {
            noItemText.textContent = 'Yaay! No tasks left today!';
        } else if (filter == 'Week') {
            noItemText.textContent = 'Yaay! No tasks left this week!';
        } else if (filter == 'Important') {
            noItemText.textContent = 'Yaay! No important tasks left!';
        } else if (filter == 'Completed') {
            noItemIcon.src = sad;
            noItemText.textContent = 'Unfortunately, no completed tasks yet!';
        } else if (filter == 'High') {
            noItemText.textContent = 'Yaay! No high priority tasks left!';
        }
        noItem.appendChild(noItemText);
        todoList.appendChild(noItem);

    // if the list is not empty, display the list
    } else {
        todoList.classList.remove('no-item')
        // display the filtered list
        for (let i = 0; i < list.length; i++) {
            displayTodoItem(list[i]);
        }
    }

    // filter the displayed list based on the search bar value
    if (searchBar.value !== '') {
        searchTask(searchBar.value, 'list');
    }
}

// display a todo item and update the due time every second
const displayTodoItem = (item) => {
    let title = item.title;
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

    // color code items based on priority
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
    // if the title is too long, truncate it
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

    // Update the time displayed
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

    // check if the item is completed already
    if (done) {
        todoItem.classList.add('checked-item');
        completed.classList.add('checked');
        completed.textContent = '✓';
        todoTitle.classList.add('checked-text');
    }

}

// update the UI when a task is marked as done
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

// remove the item from the UI
const removeTodoItemUI = (id) => {
    const item = document.getElementById(id);
    item.parentNode.removeChild(item);
}

// helper methods to create radio buttons for filtering the todo items
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

// sets up the UI for the all page
const allUI = () => {
    // remove the active class from all sidebar items
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    // add the active class to the all sidebar item
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
    const important = createRadioBtn('selection', 'Important', 'Important');
    const completed = createRadioBtn('selection', 'Completed', 'Completed');
    const high = createRadioBtn('selection', 'High', 'High');

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

    // dynamically adjust the height and margins of the list
    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.style.minHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - display.offsetHeight - 16 + 'px';
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - display.offsetHeight - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    display.style.marginRight = addBtn.offsetWidth + 72 + 'px';
    pageContent.appendChild(todoList);

    // display all items, when all page is loaded
    displayAllItems();
};

// Check if any item was recently is due, So that item can be pushed to the bottom of the list
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