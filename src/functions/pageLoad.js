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

const sidebar = () => {
    // Create sidebar
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    // Create Logo Box
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

    // Create Home Box
    const homeBox = document.createElement('div');
    homeBox.classList.add('home-box');

    // Create Home Title
    const titleBox = document.createElement('div');
    titleBox.classList.add('title-box');
    const title = document.createElement('h2');
    title.textContent = 'Home';

    // Create Home Items
    const homeItems = document.createElement('div');
    homeItems.classList.add('home-items');

    // Create All
    const all = createSidebarItems(All, 'All');

    // Create Today
    const today = createSidebarItems(Today, 'Today');

    // Create Week
    const week = createSidebarItems(Week, 'Week');

    // Create Important
    const important = createSidebarItems(Important, 'Important');

    // Create Completed
    const completed = createSidebarItems(Completed, 'Completed');

    // add Header and Logo
    titleBox.appendChild(title);
    homeBox.appendChild(titleBox);
    homeBox.appendChild(titleBox);

    // add Home Items
    homeItems.appendChild(all);
    homeItems.appendChild(today);
    homeItems.appendChild(week);
    homeItems.appendChild(important);
    homeBox.appendChild(homeItems);

    sidebar.appendChild(logoBox);
    sidebar.appendChild(homeBox);

    document.querySelector('#content').appendChild(sidebar);
}

export default sidebar;