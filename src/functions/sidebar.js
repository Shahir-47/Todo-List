// import all the icons
import All from '../assets/img/all.svg';
import Today from '../assets/img/today.svg';
import Week from '../assets/img/week.svg';
import Important from '../assets/img/important.svg';
import Completed from '../assets/img/completed.svg';
import newNote from '../assets/img/newNote.svg';
import newProject from '../assets/img/newProject.svg';
import allProjects from '../assets/img/allProjects.svg';
import starredProjects from '../assets/img/starredProjects.svg';
import allNotes from '../assets/img/allNotes.svg';
import starredNotes from '../assets/img/starredNote.svg';

// Create a sidebar item
const createSidebarItems = (icon, text) => { 
    const item = document.createElement('div');
    item.classList.add('item');
    const itemIcon = document.createElement('img');
    itemIcon.src = icon;
    itemIcon.alt = text;
    const itemText = document.createElement('p');
    itemText.textContent = text;
    item.appendChild(itemIcon);
    item.appendChild(itemText);
    return item;
}

// All the data u want to display in the sidebar gets added and accessed from here
const sidebarData = (() => {
    
    let sidebarLog = []

    const getSidebarData = () => sidebarLog;

    const addSidebarCategory = (title, items = []) => {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        if (!Array.isArray(items)) {
            throw new Error('Items must be an array');
        }
        sidebarLog.push({ title, items });
    }

    const addSidebarItem = (title, icon, text) => {
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        if (typeof icon !== 'string') {
            throw new Error('Icon must be a string');
        }
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }
        
        const category = sidebarLog.find((category) => category.title === title);
        if (!category) {
            throw new Error('Category not found');
        }
        category.items.push({ icon, text });
    }

    return {getSidebarData, addSidebarCategory, addSidebarItem }

})();

const createSidebarCategory = (data) => {
    // find the height of the nav-bar
    const top = document.querySelector('.nav-bar').offsetHeight;

    // adjust the height and position according to the header height
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');
    sidebarContent.style.height = 'calc(100vh - ' + top + 'px)';
    sidebarContent.style.marginTop = top + 'px';

    //create a div for each category
    for (let i = 0; i < data.length; i++) {
        const Box = document.createElement('div');
        Box.classList.add('box');
        const titleBox = document.createElement('div');
        titleBox.classList.add('title-box');
        const title = document.createElement('h2');
        title.textContent = data[i].title;
        titleBox.appendChild(title);
        Box.appendChild(titleBox);
        Box.appendChild(titleBox);

        const Items = document.createElement('div');
        Items.classList.add('items');
        // create an item for each item in the category
        for (let j = 0; j < data[i].items.length; j++) {
            const item = createSidebarItems(data[i].items[j].icon, data[i].items[j].text);
            Items.appendChild(item);
        }

        Box.appendChild(Items);
        sidebarContent.appendChild(Box);
    }
    return sidebarContent;

}

const sidebar = () => {

    // Add home, projects, and notes to sidebar
    sidebarData.addSidebarCategory('Home');
    sidebarData.addSidebarItem('Home', All, 'All');
    sidebarData.addSidebarItem('Home', Today, 'Today');
    sidebarData.addSidebarItem('Home', Week, 'Week');
    sidebarData.addSidebarItem('Home', Important, 'Important');
    sidebarData.addSidebarItem('Home', Completed, 'Completed');

    sidebarData.addSidebarCategory('Projects');
    sidebarData.addSidebarItem('Projects', newProject, 'New Project');
    sidebarData.addSidebarItem('Projects', allProjects, 'All Projects');
    sidebarData.addSidebarItem('Projects', starredProjects, 'Starred Projects');

    sidebarData.addSidebarCategory('Notes');
    sidebarData.addSidebarItem('Notes', newNote, 'New Note');
    sidebarData.addSidebarItem('Notes', allNotes, 'All Notes');
    sidebarData.addSidebarItem('Notes', starredNotes, 'Starred Notes');  

    // Add sidebar to content
    document.querySelector('#content').appendChild(createSidebarCategory(sidebarData.getSidebarData()));
}

export default sidebar;