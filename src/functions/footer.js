import GitHub from '../assets/img/git.svg';

const footer = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const gitHubProfile = document.createElement('a');
    gitHubProfile.href = 'https://github.com/Shahir-47';

    const gitHubProfileImg = document.createElement('img');
    gitHubProfileImg.src = GitHub;
    gitHubProfileImg.alt = 'gitHub Logo';
    

    const gitHubProfileText = document.createElement('p');
    const atSymbol = document.createElement('span');
    atSymbol.classList.add('at-symbol');
    atSymbol.textContent = '@';
    const username = document.createElement('span');
    username.textContent = 'Shahir-47';
    gitHubProfileText.appendChild(atSymbol);
    gitHubProfileText.appendChild(username);
    
    gitHubProfile.appendChild(gitHubProfileImg);
    gitHubProfile.appendChild(gitHubProfileText);

    const seperator = document.createElement('p');
    seperator.textContent = '|';

    const gitHubRepo = document.createElement('a');
    gitHubRepo.href = 'https://github.com/Shahir-47/Todo-List';
    gitHubRepo.textContent = 'Source Code';

    footer.appendChild(gitHubProfile);
    footer.appendChild(seperator);
    footer.appendChild(gitHubRepo);

    document.querySelector('div#content').appendChild(footer);
    adjustFooter();
}

const adjustFooter = () => {
    const sidebarContent = document.querySelector('.sidebar-content');
    let width = sidebarContent.offsetWidth;

    const footer = document.querySelector('footer');
    footer.style.marginLeft = width + 'px';

    footer.style.width = 'calc(100vw - ' + (width + 114 + 'px') + ')';
    footer.style.paddingLeft = 16 + 'px';
    footer.style.paddingRight = 32 + 'px';
}

export default footer;
export {adjustFooter};