import { add } from "date-fns";
import { project } from "../pages/all";

function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
}

const checkLocalStorage = () => {
    let storage;
    if (storageAvailable("localStorage")) {
        // Yippee! We can use localStorage awesomeness
        storage = true;
    } else {
        // Too bad, no localStorage for us
        storage = false;
    }

    return storage;
}

const saveToLocalStorage = (projectList) => {
    if (checkLocalStorage()) {
        let projectListString = JSON.stringify(projectList);
        localStorage.setItem('projectList', projectListString);
        console.log(JSON.parse(localStorage.getItem('projectList')));
        console.log('Local storage available');
    } else {
        console.log('Local storage not available');
    }
}

const getFromLocalStorage = () => {
    // Retrieve the projectListString from localStorage
    let projectListString = localStorage.getItem('projectList');

    // Convert the projectListString back to an array
    let projectList = JSON.parse(projectListString);
    return projectList;
}

export { saveToLocalStorage, getFromLocalStorage };