import Icon from '../assets/img/icon.svg';
import menu from '../assets/img/menu.svg';
import search from '../assets/img/search.svg';

const header = () => {
    const bar = document.createElement('div');
    bar.classList.add('nav-bar');

    const leftBox = document.createElement('div');
    leftBox.classList.add('left-box');

    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    const menuIcon = document.createElement('img');
    menuIcon.src = menu;
    menuIcon.alt = 'Menu icon';
    menuButton.appendChild(menuIcon);
    leftBox.appendChild(menuButton);

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
    leftBox.appendChild(logoBox);

    bar.appendChild(leftBox);

    const searchBox = document.createElement('div');
    searchBox.classList.add('search-box');
    const searchInput = document.createElement('input');
    searchInput.classList.add('search-input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';
    searchInput.id = 'search';
    searchInput.name = 'search';
    searchBox.appendChild(searchInput);
    const searchButton = document.createElement('button');
    searchButton.classList.add('search-button');
    searchBox.appendChild(searchButton);
    const searchIcon = document.createElement('img');
    searchIcon.src = search;
    searchIcon.alt = 'Search icon';
    searchButton.appendChild(searchIcon);

    bar.appendChild(searchBox);

    const toggleBox = document.createElement('div');
    toggleBox.classList.add('toggle-switch');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.setAttribute('id', 'theme-toggle');
    const label = document.createElement('label');
    label.setAttribute('for', 'theme-toggle');
    const light = document.createElement('span');
    light.classList.add('toggle-icon');
    light.classList.add('toggle-icon-light');
    const dark = document.createElement('span');
    dark.classList.add('toggle-icon');
    dark.classList.add('toggle-icon-dark');
    const slider = document.createElement('span');
    slider.classList.add('slider');

    label.appendChild(light);
    label.appendChild(dark);
    label.appendChild(slider);

    toggleBox.appendChild(checkBox);
    toggleBox.appendChild(label);


    bar.appendChild(toggleBox);

    document.querySelector('div#content').appendChild(bar);
}

export default header;