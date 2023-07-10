import { storage } from '../functions/storage';
import { v4 as uuidv4 } from 'uuid';
import { displayTodoItem, removeTodoItemUI, taskDoneUI } from '../pages/all';
import {compareAsc, format} from 'date-fns';

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

    const sortProjectList = (name = 'default') => {
        let defaultProject = projectList.find(project => project.name == name);
        defaultProject.todoList.sort((a, b) => {

            if (a.dueTime || b.dueTime) {
                if (a.dueTime && !b.dueTime) {
                    return -1;
                }
                if (!a.dueTime && b.dueTime) {
                    return 1;
                }
                if (a.dueTime && b.dueTime) {
                    return a.dueTime.localeCompare(b.dueTime);
                }
            }

            // // Check if both tasks have the same due date
            // if (a.dueDate === b.dueDate) {
            //     // Compare if tasks have due time
            //     if (a.dueTime && !b.dueTime) {
            //     return -1; // Task 'a' has due time, so it goes on top
            //     }
            //     if (!a.dueTime && b.dueTime) {
            //     return 1; // Task 'b' has due time, so it goes on top
            //     }
            //     if (a.dueTime && b.dueTime) {
            //         return a.dueTime.localeCompare(b.dueTime);
            //     }
            //     // Tasks have the same due date and no due time
            //     const priorityOrder = { high: 0, medium: 1, low: 2 };
            //     return priorityOrder[a.priority] - priorityOrder[b.priority];
            // }
        
            // Sort by due date for other tasks
            return compareAsc(new Date(a.dueDate), new Date(b.dueDate));
    });
    storage.saveToLocalStorage(projectList);
    updateProjectList();
}

    return {addToProjectList, addToProjectItem, getProjectTodoList, projectItemCompleted, projectItemDeleted, editProjectItem, projectItemStarred, sortProjectList};
})();



export { project };