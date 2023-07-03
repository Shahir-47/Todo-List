const formUI = () => {
    const popupFormContainer = document.createElement('div');
    popupFormContainer.setAttribute('id', 'popupFormContainer');
    const popupForm = document.createElement('div');
    popupForm.setAttribute('id', 'popupForm');

    const formHeader = document.createElement('div');
    formHeader.classList.add('form-header');
    const formTitle = document.createElement('h2');
    formTitle.textContent = 'Create a new...';
    formHeader.appendChild(formTitle);
    popupForm.appendChild(formHeader);

    const formBody = document.createElement('div');
    formBody.classList.add('form-body');

    const scrollBox = document.createElement('div');
    scrollBox.classList.add('scroll-box');

    formBody.appendChild(scrollBox);
    popupForm.appendChild(formBody);
    popupFormContainer.appendChild(popupForm);

    document.querySelector('div#content').appendChild(popupFormContainer);
}

export default formUI;