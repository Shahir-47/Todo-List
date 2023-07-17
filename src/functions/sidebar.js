// import all the icons
import All from '../assets/img/all.svg';
import Today from '../assets/img/today.svg';
import Week from '../assets/img/week.svg';
import Important from '../assets/img/important.svg';
import Completed from '../assets/img/completed.svg';
import allProjects from '../assets/img/allProjects.svg';
import starredProjects from '../assets/img/starredProjects.svg';
import allNotes from '../assets/img/allNotes.svg';
import starredNotes from '../assets/img/starredNote.svg';
import { adjustPageContent } from './pageLoad';
import { adjustFooter } from './footer';

// Create a sidebar item
const createSidebarItems = (icon, text, barType) => { 
    const item = document.createElement('div');
    item.classList.add('item');
    // if sidebar is mini, change the layout of the item
    if (barType === 'mini') {
        item.classList.remove('item-row');
        item.classList.add('item-column');
        item.classList.add('item-mini');
        item.classList.remove('item-reg')
    } else {
        item.classList.remove('item-column');
        item.classList.add('item-row');
        item.classList.add('item-reg');
        item.classList.remove('item-mini');
    }
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
    
    // The sidebar data is stored in an array of objects
    let sidebarLog = []

    // Get the sidebar data
    const getSidebarData = () => sidebarLog;

    // Remove all the sidebar data
    const removeAll = () => {
        sidebarLog = [];
    }

    // Remove a sidebar category
    const removeSidebarCategory = (title) => {
        // check if the title is a string
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        sidebarLog = sidebarLog.filter((category) => category.title !== title);
    }

    // Remove a sidebar item
    const removeSidebarItem = (title, text) => {
        // check if the title is a strings
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        // check if the text is a string
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }
        const category = sidebarLog.find((category) => category.title === title);
        // check if the category exists
        if (!category) {
            throw new Error('Category not found');
        }
        category.items = category.items.filter((item) => item.text !== text);
    }

    // Add a sidebar category
    const addSidebarCategory = (title, items = []) => {
        // check if the title is a string
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        // check if the items is an array
        if (!Array.isArray(items)) {
            throw new Error('Items must be an array');
        }
        sidebarLog.push({ title, items }); // add the category to the sidebar
    }

    // Add a sidebar item
    const addSidebarItem = (title, icon, text) => {
        // check if the title is a string
        if (typeof title !== 'string') {
            throw new Error('Title must be a string');
        }
        // check if the icon is a string
        if (typeof icon !== 'string') {
            throw new Error('Icon must be a string');
        }
        // check if the text is a string
        if (typeof text !== 'string') {
            throw new Error('Text must be a string');
        }
        
        const category = sidebarLog.find((category) => category.title === title);
        // check if the category exists
        if (!category) {
            throw new Error('Category not found');
        }
        category.items.push({ icon, text });
    }

    return {getSidebarData, addSidebarCategory, addSidebarItem, removeSidebarCategory, removeSidebarItem, removeAll }

})();

// Create a sidebar category
const createSidebarCategory = (data, barType = "full") => {
    // find the height of the nav-bar
    const top = document.querySelector('.nav-bar').offsetHeight;

    // adjust the height and position according to the header height
    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');
    sidebarContent.style.height = 'calc(100vh - ' + (top - 0.5) + 'px)';
    sidebarContent.style.marginTop = (top - 0.5) + 'px';

    // adjust the width and padding according to the sidebar type
    if (barType === 'mini') {
        sidebarContent.classList.add('mini');
        sidebarContent.classList.remove('full');
        sidebarContent.style.padding = '0'
        sidebarContent.style.width = '87px';
    } else {
        sidebarContent.classList.add('full');
        sidebarContent.classList.remove('mini');
        sidebarContent.style.padding = '0';
        sidebarContent.style.paddingLeft = '1rem';
        sidebarContent.style.width = '250px';
    }

    //create a div for each category
    for (let i = 0; i < data.length; i++) {

        const Box = document.createElement('div');
        Box.classList.add('box');

        if (barType !== 'mini') {
            const titleBox = document.createElement('div');
            titleBox.classList.add('title-box');
            const title = document.createElement('h2');
            title.textContent = data[i].title;
            titleBox.appendChild(title);
            Box.appendChild(titleBox);
            Box.appendChild(titleBox);
        }

        const Items = document.createElement('div');
        Items.classList.add('items');
        // create an item for each item in the category
        for (let j = 0; j < data[i].items.length; j++) {
            const item = createSidebarItems(data[i].items[j].icon, data[i].items[j].text, barType);
            Items.appendChild(item);
        }

        Box.appendChild(Items);
        sidebarContent.appendChild(Box);
    }
    return sidebarContent;

}

// Create a sidebar
const sidebar = () => {

    if (document.querySelector('.sidebar-content')) {
        if (document.querySelector('.sidebar-content').classList.contains('full')) {
            return;
        } else {
            document.querySelector('.sidebar-content').remove();
        }
    }
    // Add home, projects, and notes to sidebar
    sidebarData.removeAll();
    sidebarData.addSidebarCategory('Home');
    sidebarData.addSidebarItem('Home', All, 'All');
    sidebarData.addSidebarItem('Home', Today, 'Today');
    sidebarData.addSidebarItem('Home', Week, 'Week');
    sidebarData.addSidebarItem('Home', Important, 'Important');
    sidebarData.addSidebarItem('Home', Completed, 'Completed');

    sidebarData.addSidebarCategory('Projects');
    sidebarData.addSidebarItem('Projects', allProjects, 'All Projects');
    sidebarData.addSidebarItem('Projects', starredProjects, 'Starred Projects');

    sidebarData.addSidebarCategory('Notes');
    sidebarData.addSidebarItem('Notes', allNotes, 'All Notes');
    sidebarData.addSidebarItem('Notes', starredNotes, 'Starred Notes');  

    // Add sidebar to content
    document.querySelector('#content').appendChild(createSidebarCategory(sidebarData.getSidebarData()));
}

// Create a mini sidebar
const miniSidebar = () => {

    if (document.querySelector('.sidebar-content')) {
        if (document.querySelector('.sidebar-content').classList.contains('mini')) {
            return;
        } else {
            document.querySelector('.sidebar-content').remove();
        }
    }

    sidebarData.removeAll();
    sidebarData.addSidebarCategory('Home');
    sidebarData.addSidebarItem('Home', All, 'All');
    sidebarData.addSidebarItem('Home', Today, 'Today');
    sidebarData.addSidebarItem('Home', Week, 'Week');
    sidebarData.addSidebarItem('Home', Important, 'Important');
    sidebarData.addSidebarItem('Home', Completed, 'Completed');
    document.querySelector('#content').appendChild(createSidebarCategory(sidebarData.getSidebarData(), 'mini'));
    
}

// maximize or minimize the sidebar when the sidebar button is clicked
const handleSidebar = (previousScrollPosition) => {
    const sidebarContent = document.querySelector('.sidebar-content');
    // if the sidebar is full, minimize it and adjust the page content and footer
    if (sidebarContent.classList.contains('full')) {
        miniSidebar();
        adjustPageContent();
        adjustFooter();
        
        // if the sidebar is mini, maximize it and adjust the page content and footer
    } else if (sidebarContent.classList.contains('mini')) {
        sidebar();                                         
        adjustPageContent();
        adjustFooter();
        document.querySelector('.sidebar-content').scrollTop = previousScrollPosition;
    }
}

export {sidebar, handleSidebar};