import { notes } from '../functions/notes';
import { storage } from '../functions/storage';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import empty from '../assets/img/emptyNote.svg';
import Masonry from 'masonry-layout';
import { searchNote } from '../functions/search';
import footer from '../functions/footer';

// handle the note buttons
const handleNotes = (event) => {
    // Delete note
    if (event.target.closest('.note .del-btn')) {
        notes.deleteNote(event.target.closest('.note').getAttribute('note-id'));
    }
    // toggle the note's star status
    if (event.target.closest('.note .star-btn')) {
        const starImg = event.target.closest('.note .star-btn img');
        const currentSrc = starImg.src;
        // based on the note's current star status, change the star icon
        if (currentSrc === fullStar) {
            starImg.src = star;
        } else {
            starImg.src = fullStar;
        }
        // toggle the note's star attribute
        notes.starNote(event.target.closest('.note').getAttribute('note-id'));
    }
}

// Renders the all notes or starred notes page based on the starred parameter
const showAllNotes = (starred = false) => {
    const pageContent = document.querySelector('#page-content');
    const navbar = document.querySelector('.nav-bar');
    const footerBar = footer();

    // remove the highlight from all sidebar items
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });
    // add the highlight to the correct sidebar item
    if (!starred && document.querySelector('.box:nth-of-type(3) .item:nth-of-type(1)')){
        document.querySelector('.box:nth-of-type(3) .item:nth-of-type(1)').classList.add('active');
    } else if (starred && document.querySelector('.box:nth-of-type(3) .item:nth-of-type(2)')) {
        document.querySelector('.box:nth-of-type(3) .item:nth-of-type(2)').classList.add('active');
    }

    const projectTitle = document.createElement('h1');
    projectTitle.classList.add('project-header');
    if (starred) {
        projectTitle.textContent = 'Starred Notes';
    } else {
        projectTitle.textContent = 'All Notes';
    }
    pageContent.appendChild(projectTitle);

    const separator = document.createElement('div');
    separator.classList.add('list-btn-separator');

    const todoList = document.createElement('div');
    todoList.classList.add('notes-list');

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';

    separator.appendChild(todoList);
    separator.appendChild(addBtn);

    pageContent.appendChild(separator);
    pageContent.appendChild(footerBar);

    // get height of the project title
    const lineHeight = parseInt(getComputedStyle(projectTitle).lineHeight);
    const margin = parseFloat(getComputedStyle(projectTitle).marginBottom) + parseFloat(getComputedStyle(projectTitle).marginTop);
    const padding = parseFloat(getComputedStyle(projectTitle).paddingBottom) + parseFloat(getComputedStyle(projectTitle).paddingTop);
    const height = lineHeight + margin + padding;

    // set the min and max height of the todo list
    todoList.style.minHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + height + 32) + 'px)';
    todoList.style.maxHeight = 'calc(100vh - ' + (navbar.offsetHeight + footerBar.offsetHeight + height + 32) + 'px)';

    // adjust the grid template rows of the page content
    pageContent.style.gridTemplateRows = 'min-content 1fr min-content';

    // display all the notes
    allNotes(starred);
}

// helper method to display all the notes, based on the starred parameter
const allNotes = (starred) => {
    const searchBar = document.getElementById('search');
    const todoList = document.querySelector('.notes-list');
    let notesList = storage.getNotes()[0].list;
    // clear the notes list
    todoList.innerHTML = '';
    // filter the notes list based on the starred parameter
    if (starred) {
        document.querySelector('.search-input').placeholder = 'Search starred notes';
        document.querySelector('.search-input').value = '';
        notesList = notesList.filter(note => note.starred === true);
        todoList.setAttribute('starred', 'true');
    } else {
        document.querySelector('.search-input').placeholder = 'Search all notes';
        document.querySelector('.search-input').value = '';
        todoList.setAttribute('starred', 'false');
    }

    // if there are no notes, display the empty notes image
    if (notesList.length === 0) {
        todoList.classList.add('no-item')
        const noItem = document.createElement('div');
        noItem.classList.add('no-item-icon');
        const noItemIcon = document.createElement('img');
        noItemIcon.src = empty;
        noItemIcon.alt = 'No notes icon';
        noItemIcon.draggable = false;
        noItem.appendChild(noItemIcon);
        const noItemText = document.createElement('p');
        if (starred) {
            noItemText.textContent = 'No starred notes yet!';
        } else {
            noItemText.textContent = 'No notes yet!';
        }
        noItem.appendChild(noItemText);
        todoList.appendChild(noItem);

    // otherwise, display the notes
    } else {


        // reverse the order of the notes list so that the newest notes are displayed first
        notesList.reverse(); // Reverse the order of the array
        notesList.forEach((note) => {
            const noteCard = document.createElement('div');
            noteCard.classList.add('note');
            // dynamically set the width of the note card based on the width of the list
            noteCard.style.width = (todoList.offsetWidth/3.3) + 'px';
            noteCard.setAttribute('note-id', note.id);
            const noteTitle = document.createElement('div');
            noteTitle.classList.add('note-title');
            // make the note title and description editable
            noteTitle.contentEditable = true;
            noteTitle.spellcheck=false;
            noteTitle.textContent = note.title;

            const noteDescription = document.createElement('div');
            noteDescription.classList.add('note-description');
            noteDescription.contentEditable = true;
            noteDescription.spellcheck=false;
            noteDescription.textContent = note.description;

            const buttons = document.createElement('div');
            buttons.classList.add('buttons');

            const delBtn = document.createElement('button');
            delBtn.classList.add('del-btn');
            const delImg = document.createElement('img');
            delImg.src = del;
            delImg.alt = 'Delete Note';
            delBtn.appendChild(delImg);

            const starBtn = document.createElement('button');
            starBtn.classList.add('star-btn');
            const starIcon = document.createElement('img');
            if (note.starred) {
                starIcon.src = fullStar;
            } else {
                starIcon.src = star;
            }
            starIcon.alt = 'Star icon';
            starBtn.appendChild(starIcon);
        
            buttons.appendChild(starBtn);
            buttons.appendChild(delBtn);

            noteCard.appendChild(noteTitle);
            noteCard.appendChild(noteDescription);
            noteCard.appendChild(buttons);

            todoList.appendChild(noteCard);
        });
    }
    
    // if the search bar has a value, search the notes list
    if (searchBar.value !== '') {
        searchNote(searchBar.value);
    }

    // Using masonry to display the notes in a grid that makes the layout based on the
    // content of the notes
    let masonry = new Masonry(todoList, {
        itemSelector: '.note',
        columnWidth: '.note',
        gutter: 10,
    });

    // Calling masonry.layout() after adding the notes to the list
    setTimeout(() => {
        masonry.layout();
    }, 0);

}

export { showAllNotes, allNotes, handleNotes }