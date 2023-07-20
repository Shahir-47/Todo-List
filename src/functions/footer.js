import GitHub from '../assets/img/git.svg';

// Create the footer
const footer = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    // Link to my github profile
    const gitHubProfile = document.createElement('a');
    gitHubProfile.href = 'https://github.com/Shahir-47';

    // GitHub logo
    const gitHubProfileImg = document.createElement('img');
    gitHubProfileImg.src = GitHub;
    gitHubProfileImg.alt = 'gitHub Logo';
    
    // my Github username
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

    // Link to this source code
    const gitHubRepo = document.createElement('a');
    gitHubRepo.href = 'https://github.com/Shahir-47/Todo-List';
    gitHubRepo.textContent = 'Source Code';

    footer.appendChild(gitHubProfile);
    footer.appendChild(seperator);
    footer.appendChild(gitHubRepo);

    return footer;
}

export default footer;