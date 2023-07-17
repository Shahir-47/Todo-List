const storage = (() => {

    // Helper method to check if localStorage is available
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

    // check if localStorage is available
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

    // save notes to localStorage
    const saveNotes = (notes) => {
        //first check if localStorage is available
        if (checkLocalStorage()) {
            // Convert the notes array to a string
            let notesString = JSON.stringify(notes);
            // Save the notes string to localStorage
            localStorage.setItem('notes', notesString);
        } else {
            // If localStorage is not available, log a message to the console
            console.log('Local storage not available');
        }
    }

    // save projectList to localStorage
    const saveToLocalStorage = (projectList) => {
        //first check if localStorage is available
        if (checkLocalStorage()) {
            // Convert the projectList array to a string
            let projectListString = JSON.stringify(projectList);
            // Save the projectList string to localStorage
            localStorage.setItem('projectList', projectListString);
        } else {
            // If localStorage is not available, log a message to the console
            console.log('Local storage not available');
        }
    }   

    // get projectList from localStorage
    const getFromLocalStorage = () => {
        // if projectList does not exist in localStorage, create it
        if (localStorage.getItem('projectList') === null) {
            createLocalStorage(); // Create the projectList in localStorage
        }
        // Get the projectList string from localStorage    
        let projectListString = localStorage.getItem('projectList');

        // Convert the projectListString back to an array
        let projectList = JSON.parse(projectListString);
        // return the projectList array
        return projectList;
    }

    // get notes from localStorage
    const getNotes = () => {
        // if notes does not exist in localStorage, create it
        if (localStorage.getItem('notes') === null) {
            createNotes(); // Create the notes in localStorage
        }
        // Get the notes string from localStorage
        let notesString = localStorage.getItem('notes');

        // Convert the projectListString back to an array
        let notes = JSON.parse(notesString);
        return notes; // return the notes array
    }

    // helper method to create projectList in localStorage
    const createLocalStorage = () => {
        // first check if localStorage is available
        if (checkLocalStorage()) {
            // if projectList already exists in localStorage, return
            if (localStorage.getItem('projectList') !== null) {
                console.log('projectList already exists in localStorage');
                return;
            }
            console.log('Creating projectList in localStorage');
            // create projectList in localStorage
            let projectList = [{
                displayName: 'default',
                name: 'default',
                todoList: [],
                starred: false
            }];
            // save projectList to localStorage
            saveToLocalStorage(projectList);
        } else {
            // If localStorage is not available, log a message to the console
            console.log('Local storage not available');
        }
    }

    // helper method to create notes in localStorage
    const createNotes = () => {
        // first check if localStorage is available
        if (checkLocalStorage()) {
            // if notes already exists in localStorage, return
            if (localStorage.getItem('notes') !== null) {
                console.log('notes already exists in localStorage');
                return;
            }
            console.log('Creating notes in localStorage');
            // create notes in localStorage
            let notes = [
                {
                    title: 'notes',
                    list: []
                }
            ];
            saveNotes(notes); // save notes to localStorage
        } else {
            // If localStorage is not available, log a message to the console
            console.log('Local storage not available');
        }
    }

    return {saveToLocalStorage, getFromLocalStorage, getNotes, saveNotes };

})();

export { storage };