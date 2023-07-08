import { project } from './project';

const formValidation = (event, id = null) => {

    // Prevent form from submitting to the server
    event.preventDefault();
    
    let form = event.target;
  
    // Get the form fields
  if (form.checkValidity()) {
    let formData = new FormData(form);
    if (form.id == 'todo-form') {
      project.addToProjectItem(formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('priority'));
    } else if (form.id == 'edit-form') {
      project.editProjectItem(id, formData.get('title'), formData.get('details'), formData.get('due-date'), formData.get('due-time'), formData.get('edit-priority'));
    }
    form.reset();
    document.getElementById('popupFormContainer').style.display = 'none';
    document.getElementById('editFormContainer').style.display = 'none';
    // console.log(project.getTodoList());
  }
  
}

export default formValidation;