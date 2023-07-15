const storage = (() => {

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
            // Check if projectList exists in localStorage{
            // Convert the projectList array to a string
            let projectListString = JSON.stringify(projectList);
            localStorage.setItem('projectList', projectListString);
        } else {
            console.log('Local storage not available');
        }
    }   

    const getFromLocalStorage = () => {
        // Get the projectList string from localStorage
        if (localStorage.getItem('projectList') === null) {
            createLocalStorage();
        }    
        let projectListString = localStorage.getItem('projectList');

        // Convert the projectListString back to an array
        let projectList = JSON.parse(projectListString);
        return projectList;
    }

    const createLocalStorage = () => {
        if (checkLocalStorage()) {
            if (localStorage.getItem('projectList') !== null) {
                console.log('projectList already exists in localStorage');
                return;
            }
            console.log('Creating projectList in localStorage');
            let projectList = [{
                displayName: 'default',
                name: 'default',
                todoList: [],
                starred: false
            }];
            saveToLocalStorage(projectList);
        } else {
            console.log('Local storage not available');
        }
    }

    return { createLocalStorage, saveToLocalStorage, getFromLocalStorage };

})();

export { storage };