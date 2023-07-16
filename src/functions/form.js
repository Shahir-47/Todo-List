import { project } from './project';
import { notes } from './notes';

const formValidation = (event, id = null) => {

  // Prevent form from submitting to the server
  event.preventDefault();
  let form = event.target;

  // Get the form fields
  if (form.checkValidity()) {
    let formData = new FormData(form);
    if (form.id == 'todo-form') {
      if (document.querySelector('.project-title')){
        project.addToProjectItem(formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('priority'), document.querySelector('.project-title').textContent);
      } else {
        project.addToProjectItem(formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('priority'));
      }
    } else if (form.id == 'edit-form') {
      project.editProjectItem(id, formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('edit-priority'));
    }
    form.reset();
    document.getElementById('popupFormContainer').style.display = 'none';
    document.getElementById('editFormContainer').style.display = 'none';
    // console.log(project.getTodoList());
  }
  
}

const projectFormValidation = (event) => {
  event.preventDefault();
  let form = event.target;
  if (form.checkValidity()) {
    let formData = new FormData(form);
    if (form.id == 'project-form') {
      project.addToProjectList(formData.get('project-title'));
    } else if (form.id == 'edit-project-form') {
      console.log(formData.get('edit-project-title'));
      project.editProject(event.target.getAttribute('project-codename'), formData.get('project-edit-title'));
    }
    form.reset();
    document.getElementById('popupFormContainer').style.display = 'none';
    document.getElementById('editProjectFormContainer').style.display = 'none';
  }
}

const noteFormValidation = (event) => {
  event.preventDefault();
  let form = event.target;
  if (form.checkValidity()) {
    let formData = new FormData(form);
    notes.addNote(formData.get('note-title'), formData.get('note-details'));
  }
  form.reset();
  document.getElementById('popupFormContainer').style.display = 'none';
}

export default formValidation;
export { projectFormValidation, noteFormValidation };