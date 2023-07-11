import { storage } from '../functions/storage';
import { v4 as uuidv4 } from 'uuid';
import { displayTodoItem, removeTodoItemUI, taskDoneUI } from '../pages/all';
import {compareAsc, compareDesc, formatDistanceToNow, isSameDay, differenceInCalendarDays} from 'date-fns';

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

    const addToProjectItem = (title, details, dueDate, dueTime, priority, name = 'default') => {
        console.log(projectList);
        let defaultProject = projectList.find(project => project.name == name);
        let index =  name + '~' + uuidv4();
        let item = { name, index, title, details, dueDate, dueTime, priority, done: { flag: false, timestamp: null }, starred: false };
        defaultProject.todoList.push(item);
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        displayTodoItem(item);
    }

    const editProjectItem = (index, title, details, dueDate, dueTime, priority) => {
        let name = index.split('~')[0];
        console.log(index.split('~')[1]);
        let defaultProject = projectList.find(project => project.name == name);
        let item = defaultProject.todoList.find(item => item.index == index);
        item.title = title;
        item.details = details;
        item.dueDate = dueDate;
        item.dueTime = dueTime;
        item.priority = priority;
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        removeTodoItemUI(index);
        displayTodoItem(item);
    }

    const getProjectTodoList = (name = 'default') => {
        return projectList.find(project => project.name === name).todoList;
    }

    const projectItemCompleted = (index) => {
        let name = index.split('~')[0];
        let completedProj = projectList.find(project => project.name === name);
        let completeIndex = completedProj.todoList.findIndex(item => item.index == index);
        completedProj.todoList[completeIndex].done.flag = !completedProj.todoList[completeIndex].done.flag;
        completedProj.todoList[completeIndex].done.timestamp = new Date();
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
        storage.saveToLocalStorage(projectList);
        updateProjectList();
    }

    const projectItemStarred = (index) => {
        let name = index.split('~')[0];
        let starredProj = projectList.find(project => project.name === name);
        let starredIndex = starredProj.todoList.findIndex(item => item.index == index);
        starredProj.todoList[starredIndex].starred = !starredProj.todoList[starredIndex].starred;
        storage.saveToLocalStorage(projectList);
        updateProjectList();
        removeTodoItemUI(index);
        displayTodoItem(starredProj.todoList[starredIndex]);
    }

    const sort = (name = 'default') => {
        let defaultProject = projectList.find(project => project.name === name);
        let incompleteItems = defaultProject.todoList.filter(item => !item.done.flag);
        const delayItems = incompleteItems.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) < new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) < 0)));
        const notDelayItems = incompleteItems.filter(item => (item.dueTime && new Date(item.dueDate + ' ' + item.dueTime) >= new Date()) || (!item.dueTime && (differenceInCalendarDays(new Date(item.dueDate.slice(0, 4), item.dueDate.slice(5, 7)-1, item.dueDate.slice(8, 10)), new Date()) >= 0)));
        sortByTime(notDelayItems);
        sortDelayItems(delayItems);
        console.log(notDelayItems);
        console.log(delayItems);
        incompleteItems = notDelayItems.concat(delayItems);

        const completeItems = defaultProject.todoList.filter(item => item.done.flag);
        sortDoneItems(completeItems);

        defaultProject.todoList = incompleteItems.concat(completeItems);

        console.log(defaultProject.todoList);
        storage.saveToLocalStorage(projectList);
        updateProjectList();
    }

    const sortDoneItems = (list) => {
        list.sort((a, b) => new Date(b.done.timestamp) - new Date(a.done.timestamp));
    }

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

    const sortDelayItems = (list) => {
        list.sort((a, b) => {

            if (a.dueTime && b.dueTime) {
                console.log('c5');
                let [aYear, aMonth, aDay] =  a.dueDate.split('-');
                let aDueDate = new Date(aYear, aMonth - 1, aDay);
                let [aHours, aMinutes] = a.dueTime.split(':');
                aDueDate.setHours(aHours);
                aDueDate.setMinutes(aMinutes);
                let [bYear, bMonth, bDay] =  b.dueDate.split('-');
                let bDueDate = new Date(bYear, bMonth - 1, bDay);
                let [bHours, bMinutes] = b.dueTime.split(':');
                bDueDate.setHours(bHours);
                bDueDate.setMinutes(bMinutes);
                let aDistance = formatDistanceToNow(aDueDate, { addSuffix: true });
                let bDistance = formatDistanceToNow(bDueDate, { addSuffix: true });
                aDistance = aDistance.split(' ');
                bDistance = bDistance.split(' ');
                if (((parseInt(aDistance[1]) <= 24 && (aDistance[2] == 'hour' || aDistance[2] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes'))) && ((parseInt(bDistance[1]) <= 24 && (bDistance[2] == 'hour' || bDistance[2] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    console.log(compareDesc(aDueDate, bDueDate));
                    if (compareDesc(aDueDate, bDueDate) == 0) {
                        return comparePriority(a, b);
                    }
                    return compareDesc(aDueDate, bDueDate);
                }
                else if (((parseInt(aDistance[1]) <= 24 && (aDistance[2] == 'hour' || aDistance[2] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes')))) {
                    return -1;
                }
                else if (((parseInt(bDistance[1]) <= 24 && (bDistance[2] == 'hour' || bDistance[2] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    return 1;
                }
            } else if (a.dueTime && !b.dueTime) {
                console.log('c6');
                let [aYear, aMonth, aDay] =  a.dueDate.split('-');
                let aDueDate = new Date(aYear, aMonth - 1, aDay);
                let [aHours, aMinutes] = a.dueTime.split(':');
                aDueDate.setHours(aHours);
                aDueDate.setMinutes(aMinutes);
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(aDueDate, { addSuffix: true });
                distance = distance.split(' ');
                if ((parseInt(distance[1]) <= 24 && (distance[2] == 'hour' || distance[2] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return -1;
                } else if (compareDesc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                    return comparePriority(a, b);
                }
                return compareDesc(new Date(a.dueDate), new Date(b.dueDate));
            } else if (!a.dueTime && b.dueTime) {
                console.log('c7');
                let [bYear, bMonth, bDay] =  b.dueDate.split('-');
                let bDueDate = new Date(bYear, bMonth - 1, bDay);
                let [bHours, bMinutes] = b.dueTime.split(':');
                bDueDate.setHours(bHours);
                bDueDate.setMinutes(bMinutes);
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(bDueDate, { addSuffix: true });
                distance = distance.split(' ');
                if ((parseInt(distance[1]) <= 24 && (distance[2] == 'hour' || distance[2] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return 1;
                } else if (compareDesc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                    return comparePriority(a, b);
                }
                return compareDesc(new Date(a.dueDate), new Date(b.dueDate));
            }
            if (compareDesc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                return comparePriority(a, b);
            }
            return compareDesc(new Date(a.dueDate), new Date(b.dueDate));
        });
    }


    const sortByTime = (list) => {
        // let defaultProject = projectList.find(project => project.name == name);
        list.sort((a, b) => {

            if (a.dueTime && !b.dueTime && isSameDay(new Date(b.dueDate.slice(0, 4), b.dueDate.slice(5, 7)-1, b.dueDate.slice(8, 10)), new Date())) {
                console.log('a');
                let [aYear, aMonth, aDay] =  a.dueDate.split('-');
                let aDueDate = new Date(aYear, aMonth - 1, aDay);
                let [aHours, aMinutes] = a.dueTime.split(':');
                aDueDate.setHours(aHours);
                aDueDate.setMinutes(aMinutes);
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(aDueDate, { addSuffix: true });
                distance = distance.split(' ');
                if ((parseInt(distance[2]) <= 24 && (distance[3] == 'hour' || distance[3] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return -1;
                }
                return 1;
            }
            if (!a.dueTime && b.dueTime && isSameDay(new Date(a.dueDate.slice(0, 4), a.dueDate.slice(5, 7)-1, a.dueDate.slice(8, 10)), new Date())) {
                console.log('b');
                let [bYear, bMonth, bDay] =  b.dueDate.split('-');
                let bDueDate = new Date(bYear, bMonth - 1, bDay);
                let [bHours, bMinutes] = b.dueTime.split(':');
                bDueDate.setHours(bHours);
                bDueDate.setMinutes(bMinutes);
                // Calculate the time difference between the current date/time and the task due date
                let distance = formatDistanceToNow(bDueDate, { addSuffix: true });
                distance = distance.split(' ');
                if ((parseInt(distance[2]) <= 24 && (distance[3] == 'hour' || distance[3] == 'hours')) || (distance.includes('minute') || distance.includes('minutes'))) {
                    return 1;
                }
                return -1;
            }

            if (a.dueTime && b.dueTime) {
                console.log('c');
                let [aYear, aMonth, aDay] =  a.dueDate.split('-');
                let aDueDate = new Date(aYear, aMonth - 1, aDay);
                let [aHours, aMinutes] = a.dueTime.split(':');
                aDueDate.setHours(aHours);
                aDueDate.setMinutes(aMinutes);
                let [bYear, bMonth, bDay] =  b.dueDate.split('-');
                let bDueDate = new Date(bYear, bMonth - 1, bDay);
                let [bHours, bMinutes] = b.dueTime.split(':');
                bDueDate.setHours(bHours);
                bDueDate.setMinutes(bMinutes);
                let aDistance = formatDistanceToNow(aDueDate, { addSuffix: true });
                let bDistance = formatDistanceToNow(bDueDate, { addSuffix: true });
                aDistance = aDistance.split(' ');
                bDistance = bDistance.split(' ');
                if (((parseInt(aDistance[2]) <= 24 && (aDistance[3] == 'hour' || aDistance[3] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes'))) && ((parseInt(bDistance[2]) <= 24 && (bDistance[3] == 'hour' || bDistance[3] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    console.log(compareAsc(aDueDate, bDueDate));
                    if (compareAsc(aDueDate, bDueDate) == 0) {
                        return comparePriority(a, b);
                    }
                    return compareAsc(aDueDate, bDueDate);
                }
                else if (((parseInt(aDistance[2]) <= 24 && (aDistance[3] == 'hour' || aDistance[3] == 'hours')) || (aDistance.includes('minute') || aDistance.includes('minutes')))) {
                    return -1;
                }
                else if (((parseInt(bDistance[2]) <= 24 && (bDistance[3] == 'hour' || bDistance[3] == 'hours')) || (bDistance.includes('minute') || bDistance.includes('minutes')))) {
                    return 1;
                }
            }
            
            if (compareAsc(new Date(a.dueDate), new Date(b.dueDate)) == 0) {
                return comparePriority(a, b);
            }
            return compareAsc(new Date(a.dueDate), new Date(b.dueDate));
    });
}

    return {addToProjectList, addToProjectItem, getProjectTodoList, projectItemCompleted, projectItemDeleted, editProjectItem, projectItemStarred, sort};
})();



export { project };