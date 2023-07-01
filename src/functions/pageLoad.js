import Icon from '../assets/img/icon.svg';
// import GitHub from '../assets/img/git.svg';

const sidebar = () => {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');


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

    document.querySelector('#content').appendChild(sidebar);
}

export default sidebar;