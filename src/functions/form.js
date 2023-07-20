import { project } from './project.js';
import { notes } from './notes.js';

// validate the add and edit todo form and sent data to project.js
const formValidation = (form, id = null) => {

  // check if the form is valid
  if (form.checkValidity()) {
    // get the form data
    let formData = new FormData(form);
    // if the form is the add todo form, add the todo to the project
    if (form.id == 'todo-form') {
      // if the user is in a specific project page, add the todo to the specific project
      if (document.querySelector('.project-title')){
        project.addToProjectItem(formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('priority'), document.querySelector('.project-title').textContent);
      } else {
        // if the user is in the all todo page, add the todo to the default project
        project.addToProjectItem(formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('priority'));
      }
    } else if (form.id == 'edit-form') {
      // if the form is the edit todo form, edit the todo
      project.editProjectItem(id, formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('edit-priority'));
    }
    form.reset(); // reset the form
    document.getElementById('popupFormContainer').style.display = 'none'; // close the form
    document.getElementById('editFormContainer').style.display = 'none'; // close the form
  }
  
}

// validate the add and edit project form and sent data to project.js
const projectFormValidation = (form) => {
  // check if the form is valid
  if (form.checkValidity()) {
    let formData = new FormData(form); // get the form data
    // if the form is the add project form, add the project to the project list
    if (form.id == 'project-form') {
      project.addToProjectList(formData.get('project-title'));

    // if the form is the edit project form, edit the project
    } else if (form.id == 'edit-project-form') {
      project.editProject(form.getAttribute('project-codename'), formData.get('project-edit-title'));
    }
    form.reset(); // reset the form
    document.getElementById('popupFormContainer').style.display = 'none'; // close the form
    document.getElementById('editProjectFormContainer').style.display = 'none'; // close the form
  }
}

// validate the add note form and sent data to notes.js
const noteFormValidation = (form) => {
  // check if the form is valid
  if (form.checkValidity()) {
    let formData = new FormData(form); // get the form data
    notes.addNote(formData.get('note-title'), formData.get('note-details'));
  }
  form.reset(); // reset the form
  document.getElementById('popupFormContainer').style.display = 'none'; // close the form
}

export default formValidation;
export { projectFormValidation, noteFormValidation };