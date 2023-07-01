import Icon from '../assets/img/icon.svg';
import All from '../assets/img/all.svg';
import Today from '../assets/img/today.svg';
import Week from '../assets/img/week.svg';
import Important from '../assets/img/important.svg';
import Completed from '../assets/img/completed.svg';
// import GitHub from '../assets/img/git.svg';


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

    const sidebarContent = document.createElement('div');
    sidebarContent.classList.add('sidebar-content');

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
    // Create sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    // Create Logo and Header Text
    const logoBox = document.createElement('div');
    logoBox.classList.add('logo-box');
    const logo = document.createElement('img');
    logo.src = Icon;
    logo.alt = 'Todo List logo';
    const logoLink = document.createElement('a');
    logoLink.appendChild(logo);
    logoBox.appendChild(logoLink);
    const logoText = document.createElement('h1');
    logoText.textContent = 'Todo List';
    const logoLink2 = document.createElement('a');
    logoLink2.appendChild(logoText);
    logoBox.appendChild(logoLink2);
    sidebar.appendChild(logoBox);

    // Create sidebar items
    sidebarData.addSidebarCategory('Home');
    sidebarData.addSidebarItem('Home', All, 'All');
    sidebarData.addSidebarItem('Home', Today, 'Today');
    sidebarData.addSidebarItem('Home', Week, 'Week');
    sidebarData.addSidebarItem('Home', Important, 'Important');
    sidebarData.addSidebarItem('Home', Completed, 'Completed');

    sidebarData.addSidebarCategory('Projects');

    sidebarData.addSidebarCategory('Notes');  

    sidebar.appendChild(createSidebarCategory(sidebarData.getSidebarData()));

    document.querySelector('#content').appendChild(sidebar);
}

export default sidebar;