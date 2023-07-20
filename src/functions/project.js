import { allProject } from '../pages/projectUI.js';
import { storage } from '../functions/storage.js';
import { v4 as uuidv4 } from 'uuid';
import { displayAllItems, removeTodoItemUI, taskDoneUI } from '../pages/all.js';
import { compareAsc, compareDesc, formatDistanceToNow, isSameDay, differenceInCalendarDays } from 'date-fns';

// After adding, editing, deleting, or completing a todo item, the page needs to be updated to reflect the changes.
const displayTheRightPage = () => {
    // if the page is the home page
    if (document.querySelector('.box:nth-of-type(1) .item.active')){
        // if the page is the all page, show all the items
        if (document.querySelector('.selection input[name="selection"]:checked') && document.querySelector('.box:nth-of-type(1) .item:nth-of-type(1).active')) {
            displayAllItems('default', document.querySelector('.sort #sort-selection').value, document.querySelector('.selection input[name="selection"]:checked').value);
        } else {
            // if the page is not the all page, show the items based on the page
            displayAllItems('default', 'Time', document.querySelector('.box:nth-of-type(1) .item.active p').textContent);
        }
    } else if (document.querySelector('.project-title')) {
        // if the page is showing a specific project's todo item,
        // then show the specific project's todo items based on filter and sort options
        displayAllItems(document.querySelector('.project-title').textContent, document.querySelector('.sort #sort-selection').value, document.querySelector('.selection input[name="proj-selection"]:checked').value);
    }
}

const formatTime = (item) => {
    // create date for the a item
    let [year, month, day] =  item.dueDate.split('-');
    let dueDate = new Date(year, month - 1, day);
    let [hours, minutes] = item.dueTime.split(':');
    dueDate.setHours(hours);
    dueDate.setMinutes(minutes);
    return dueDate;
}

const project = (() => {

    // get projectList from localStorage
    let projectList = storage.getFromLocalStorage();

    // helper method to update the projectList periodically
    const updateProjectList = () => {
        projectList = storage.getFromLocalStorage();
    }

    // add a new project to the projectList
    const addToProjectList = (name) => {
        let imp = false;
        // check if the project is in important project page, if so, set the starred attribute to true
        if (document.querySelector('.todo-list-project')){
            imp = document.querySelector('.todo-list-project').getAttribute('starred') == 'false' ? false : true;
        }
        // create a new project object
        projectList.push({
            displayName: name,
            name,
            todoList: [],
            starred: imp
        });
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        // if the project is in important project page, display the important projects
        if (document.querySelector('.todo-list-project')){
            allProject(imp);

        }
    }

    // remove a project from the projectList
    const removeFromProjectList = (name) => {
        let index = projectList.findIndex(project => project.name == name);
        projectList.splice(index, 1); // remove the project from the projectList
        // remove the deleted project's todo items from the "all todo items" list
        // NOTE: the default project is where all the todo items are stored
        if (name != 'default') {
            let defaultProject = projectList.find(project => project.name == 'default');
            let deleteIndexes = [];
            defaultProject.todoList.forEach((item, index) => {
                if (item.name == name) {
                    deleteIndexes.push(index);
                }
            });
            deleteIndexes.reverse();
            deleteIndexes.forEach(index => {
                defaultProject.todoList.splice(index, 1);
            });
        }
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        // if the project is in important project page, display the important projects
        if (document.querySelector('.todo-list-project').getAttribute('starred') == 'false'){
            allProject(false);
        } else if (document.querySelector('.todo-list-project').getAttribute('starred') == 'true') {
            allProject(true);
        }
    }

    // toggle the starred attribute of a project
    const starredProject = (name) => {
        let index = projectList.findIndex(project => project.name == name);
        projectList[index].starred = !projectList[index].starred;
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        // if the project is in important project page, display the important projects
        if (document.querySelector('.todo-list-project').getAttribute('starred') == 'false'){
            allProject(false);
        } else if (document.querySelector('.todo-list-project').getAttribute('starred') == 'true') {
            allProject(true);
        }
    }

    // edit the name of a project
    const editProject = (name, newName) => {
        let index = projectList.findIndex(project => project.name == name);
        // changing the actual name of the project would require changing the id of all the todo items 
        // in the project and would require to stop the clock interval that keeps track of the time left.
        // All todo items in the project are linked to their project by the name attribute.so instead, 
        //I changed the displayName attribute of the project
        projectList[index].displayName = newName;
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        // if the project is in important project page, display the important projects
        if (document.querySelector('.todo-list-project').getAttribute('starred') == 'false'){
            allProject(false);
        } else if (document.querySelector('.todo-list-project').getAttribute('starred') == 'true') {
            allProject(true);
        }
    }

    // add a new todo item to a project
    const addToProjectItem = (title, details, dueDate, dueTime, priority, name = 'default') => {
        
        // check if the todo item is important, if so, set the starred attribute to true
        let important = false;
        if (document.querySelector('.box:nth-of-type(1) .item:nth-of-type(4).active') || document.querySelector('.selection input[id="Important"]:checked')) {
            important = true;
        }
        let defaultProject = projectList.find(project => project.displayName == name);
        name = defaultProject.name; // get the actual name of the project
        let index =  name + '~' + uuidv4(); // create a unique id for the todo item
        // create a new todo item object
        let item = { name, index, title, details, dueDate, dueTime, priority, done: { flag: false, timestamp: null }, starred: important };
        defaultProject.todoList.push(item); // add the todo item to the project
        // add the todo item to the default project as well
        if (name != 'default') {
            projectList.find(project => project.name == 'default').todoList.push(item);
        }
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList

        displayTheRightPage(); // update the page
    }

    const editProjectItem = (index, title, details, dueDate, dueTime, priority) => {
        let name = index.split('~')[0]; // get the name of the project
         
        let defaultProject = projectList.find(project => project.name == name);
        // if the project is not the default project, edit the todo item in the default project as well
        if (name != 'default') {
            let project = projectList.find(project => project.name == 'default');
            let item = project.todoList.find(item => item.index == index);
            item.title = title;
            item.details = details;
            item.dueDate = dueDate;
            item.dueTime = dueTime;
            item.priority = priority;
        }
        // edit the todo item in the project
        let item = defaultProject.todoList.find(item => item.index == index);
        item.title = title;
        item.details = details;
        item.dueDate = dueDate;
        item.dueTime = dueTime;
        item.priority = priority;
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        displayTheRightPage(); // update the page
    }

    // get the todo list of a project
    const getProjectTodoList = (name = 'default') => {
        if (projectList.find(project => project.name === name) == undefined) {
            return []; // if the project does not exist, return an empty array
        }
        return projectList.find(project => project.name === name).todoList;
    }

    // toggle the complete status of a todo item
    const projectItemCompleted = (index) => {
        let name = index.split('~')[0]; // get the name of the project
        let completedProj = projectList.find(project => project.name === name);
        // if the project is not the default project, toggle the complete status of the todo item in the default project as well
        if (name != 'default') {
            let project = projectList.find(project => project.name == 'default');
            let item = project.todoList.find(item => item.index == index);
            item.done.flag = !item.done.flag;
            // if the todo item is completed, set the timestamp to the current time
            // add timestamp to sort the completed todo items
            item.done.timestamp = new Date();
        }
        let completeIndex = completedProj.todoList.findIndex(item => item.index == index);
        completedProj.todoList[completeIndex].done.flag = !completedProj.todoList[completeIndex].done.flag;
        // if the todo item is completed, set the timestamp to the current time
        // add timestamp to sort the completed todo items
        completedProj.todoList[completeIndex].done.timestamp = new Date();
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        taskDoneUI(index); // update the style of the todo item
        displayTheRightPage(); // update the page
    }

    const projectItemDeleted = (index) => {
        let name = index.split('~')[0]; // get the name of the project
        let deletedProj = projectList.find(project => project.name === name); // get the project
        // if the project is not the default project, delete the todo item in the default project as well
        if (name != 'default') {
            let project = projectList.find(project => project.name == 'default');
            let deleteIndex = project.todoList.findIndex(item => item.index == index); // get the index of the todo item
            project.todoList.splice(deleteIndex, 1); // delete the todo item from the default project
        }
        
        let deleteIndex = deletedProj.todoList.findIndex(item => item.index == index); // get the index of the todo item
        deletedProj.todoList.splice(deleteIndex, 1); // delete the todo item from the project
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        displayTheRightPage(); // update the page
    }

    const projectItemStarred = (index) => {
        let name = index.split('~')[0]; // get the name of the project
        let starredProj = projectList.find(project => project.name === name);
        // if the project is not the default project, toggle the starred attribute of the todo item in the default project as well
        if (name != 'default') {
            let project = projectList.find(project => project.name == 'default');
            let item = project.todoList.find(item => item.index == index);
            item.starred = !item.starred;
        }
        // toggle the starred attribute of the todo item in the project
        let starredIndex = starredProj.todoList.findIndex(item => item.index == index);
        starredProj.todoList[starredIndex].starred = !starredProj.todoList[starredIndex].starred;
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
        removeTodoItemUI(index); // remove the todo item from the page
        displayTheRightPage(); // update the page
    }

    //sort the todo items in a project
    /* After sorting, the list should look like this:
    * 1. All the incomplete items that are not delayed, sorted by time
    * 2. All the incomplete items that are delayed, sorted by time
    * 3. All the completed items, sorted by time
    * 4. If the items have the same time, sort by priority
    */
    const sort = (name = 'default') => {
        let defaultProject = projectList.find(project => project.name === name); // get the project 
        
        // if the project does not exist, return
        if (defaultProject.todoList.length == 0) {
            return;
        }
        // first, get all the incomplete items
        let incompleteItems = defaultProject.todoList.filter(item => !item.done.flag);
        // filter for the items past their due time
        const delayItems = incompleteItems.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) < new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) < 0)));
        // filter for the items that are not past their due time
        const notDelayItems = incompleteItems.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) >= new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) >= 0)));
        sortByTime(notDelayItems); // sort the items that are not past their due time
        sortDelayItems(delayItems); // sort the items that are past their due time
        
        
        // sorted incomplete items that are not past their due time
        // are on top of the sorted incomplete items that are past their due time
        incompleteItems = notDelayItems.concat(delayItems);
        // get all the completed items
        const completeItems = defaultProject.todoList.filter(item => item.done.flag);
        sortDoneItems(completeItems); // sort the completed items by time
        // the sorted incomplete items are above the sorted completed items
        defaultProject.todoList = incompleteItems.concat(completeItems);

        
        storage.saveToLocalStorage(projectList); // save the projectList to localStorage
        updateProjectList(); // update the projectList
    }

    // sort completed items by time
    const sortDoneItems = (list) => {
        list.sort((a, b) => new Date(b.done.timestamp) - new Date(a.done.timestamp));
    }

    // sort by priority
    const sortByPriority = (name = 'default') => {
        let defaultProject = projectList.find(project => project.name === name);
        defaultProject.todoList.sort((a, b) => {
            return comparePriority(a, b);
        });
        storage.saveToLocalStorage(projectList);
        updateProjectList();
    }

    // compare the priority of two todo items
    const comparePriority = (a, b) => {
        if (a.priority == 'high' && b.priority == 'medium') {
            return -1;
        } else if (a.priority == 'high' && b.priority == 'low') {
            return -1;
        } else if (a.priority == 'medium' && b.priority == 'high') {
            return 1;
        } else if (a.priority == 'medium' && b.priority == 'low') {
            return -1;
        } else if (a.priority == 'low' && b.priority == 'high') {
            return 1;
        } else if (a.priority == 'low' && b.priority == 'medium') {
            return 1;
        }
        return 0;
    }

    // sort todo items that are due past their time and are incomplete
    const sortDelayItems = (list) => {
        list.sort((a, b) => {
            // first check which one has the recent due time
            // if same, check which one has the higher priority
            if (a.dueTime && b.dueTime) {
                
                // create date for the item in the desired format for comparison
                let aDueDate = formatTime(a);
                let bDueDate = formatTime(b);

                // Calculate the time difference between the current date/time and the task due date
                let aDistance = formatDistanceToNow(aDueDate, { addSuffix: true });
                let bDistance = formatDistanceToNow(bDueDate, { addSuffix: true });
                aDistance = aDistance.split(' ');
                bDistance = bDistance.split(' ');
                // if both items are due within 24 hours, compare time.
                // if same time, then compare priority
                if (((parseInt(aDistance[1]) <= 24 && (aDistance[2] == 'hour' || aDistance[2] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes'))) && ((parseInt(bDistance[1]) <= 24 && (bDistance[2] == 'hour' || bDistance[2] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    
                    if (compareDesc(aDueDate, bDueDate) == 0) {
                        return comparePriority(a, b);
                    }
                    return compareDesc(aDueDate, bDueDate);
                } 
                // if item a is due within 24 hours and item b is not, item a is higher priority
                else if (((parseInt(aDistance[1]) <= 24 && (aDistance[2] == 'hour' || aDistance[2] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes')))) {
                    return -1;
                }
                // if item b is due within 24 hours and item a is not, item b is higher priority
                else if (((parseInt(bDistance[1]) <= 24 && (bDistance[2] == 'hour' || bDistance[2] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    return 1;
                }
            // if a has a due time but b does not
            } else if (a.dueTime && !b.dueTime) {
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(formatTime(a), { addSuffix: true });;
                distance = distance.split(' ');
                // if item a is due within 24 hours, it is higher priority
                if ((parseInt(distance[1]) <= 24 && (distance[2] == 'hour' || distance[2] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return -1;
                // if item a is not due within 24 hours, and both items have the same date, then compare priority
                } else if (compareDesc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                    return comparePriority(a, b);
                }
                // if item a is not due within 24 hours, then compare by due date
                return compareDesc(new Date(a.dueDate), new Date(b.dueDate));
            // if b has a due time but 'a' does not
            } else if (!a.dueTime && b.dueTime) {
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(formatTime(b), { addSuffix: true });
                distance = distance.split(' ');
                // if item b is due within 24 hours, it is higher priority
                if ((parseInt(distance[1]) <= 24 && (distance[2] == 'hour' || distance[2] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return 1;
                // if item b is not due within 24 hours, and both items have the same date, then compare priority
                } else if (compareDesc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                    return comparePriority(a, b);
                }
                // if item b is not due within 24 hours, then compare by due date
                return compareDesc(new Date(a.dueDate), new Date(b.dueDate));
            }
            // if both items do not have a due time, and have the same due date, then compare by priority
            if (compareDesc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                return comparePriority(a, b);
            }
            // if both items do not have a due time, then compare by due date
            return compareDesc(new Date(a.dueDate), new Date(b.dueDate));
        });
    }

    // sort todo items that are not past their due time and are incomplete
    const sortByTime = (list) => {
        list.sort((a, b) => {
            /*
            * If a has a due time and b is due Today,
            * then check if a is due within 24 hours, if so, a is higher priority
            * else, b is higher priority
            */
            if (a.dueTime && !b.dueTime && isSameDay(new Date(b.dueDate.slice(0, 4), b.dueDate.slice(5, 7)-1, b.dueDate.slice(8, 10)), new Date())) {
                
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(formatTime(a), { addSuffix: true });
                distance = distance.split(' ');
                // if item a is due within 24 hours, it is higher priority
                if ((parseInt(distance[2]) <= 24 && (distance[3] == 'hour' || distance[3] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return -1;
                }
                // a is not due within 24 hours. So, b is higher priority
                return 1;
            }
            // If b has a due time and a is due Today,
            // then check if b is due within 24 hours, if so, b is higher priority
            if (!a.dueTime && b.dueTime && isSameDay(new Date(a.dueDate.slice(0, 4), a.dueDate.slice(5, 7)-1, a.dueDate.slice(8, 10)), new Date())) {
                
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(formatTime(b), { addSuffix: true });
                distance = distance.split(' ');
                // if item b is due within 24 hours, it is higher priority
                if ((parseInt(distance[2]) <= 24 && (distance[3] == 'hour' || distance[3] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return 1;
                }
                // b is not due within 24 hours. So, a is higher priority
                return -1;
            }
            // if both a and b have a due time, then check if both are due within 24 hours
            // if both are due within 24 hours, then compare by time
            // if a is due within 24 hours and b is not, a is higher priority
            // if b is due within 24 hours and a is not, b is higher priority
            // if both are not due within 24 hours, then compare by due date
            if (a.dueTime && b.dueTime) {
                
                // Calculate the time difference between the current date/time and the task due date
                let aDueDate = formatTime(a);
                let bDueDate = formatTime(b);
                let aDistance = formatDistanceToNow(aDueDate, { addSuffix: true });
                let bDistance = formatDistanceToNow(bDueDate, { addSuffix: true });
                aDistance = aDistance.split(' ');
                bDistance = bDistance.split(' ');
                // if both items are due within 24 hours, compare time.
                if (((parseInt(aDistance[2]) <= 24 && (aDistance[3] == 'hour' || aDistance[3] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes'))) && ((parseInt(bDistance[2]) <= 24 && (bDistance[3] == 'hour' || bDistance[3] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    
                    // if both items have the same time, then compare priority
                    if (compareAsc(aDueDate, bDueDate) == 0) {
                        return comparePriority(a, b);
                    }
                    // if both items do not have the same time, then compare by time
                    return compareAsc(aDueDate, bDueDate);
                }
                // if item a is due within 24 hours and item b is not, item a is higher priority
                else if (((parseInt(aDistance[2]) <= 24 && (aDistance[3] == 'hour' || aDistance[3] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes')))) {
                    return -1;
                }
                // if item b is due within 24 hours and item a is not, item b is higher priority
                else if (((parseInt(bDistance[2]) <= 24 && (bDistance[3] == 'hour' || bDistance[3] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    return 1;
                }
            }
            // if none of the items have a due time, and have the same due date, then compare by priority
            if (compareAsc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                return comparePriority(a, b);
            }
            // if none of the items have a due time, then compare by due date
            return compareAsc(new Date(a.dueDate), new Date(b.dueDate));
    });
}

    return {addToProjectList, editProject, addToProjectItem, getProjectTodoList, projectItemCompleted, projectItemDeleted, editProjectItem, projectItemStarred, sort, sortByPriority, removeFromProjectList, starredProject};
})();



export { project, displayTheRightPage };