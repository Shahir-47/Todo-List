import { storage } from '../functions/storage';
import { v4 as uuidv4 } from 'uuid';
import { displayTodoItem, removeTodoItemUI, taskDoneUI } from '../pages/all';

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

    return {addToProjectList, addToProjectItem, getProjectTodoList, projectItemCompleted, projectItemDeleted, editProjectItem, projectItemStarred};
})();

export { project };