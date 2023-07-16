import { notes } from '../functions/notes';
import { storage } from '../functions/storage';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import fullStar from '../assets/img/fullStar.svg';
import Masonry from 'masonry-layout';

let masonry;

const handleNotes = (event) => {
    if (event.target.closest('.note .del-btn')) {
        notes.deleteNote(event.target.closest('.note').getAttribute('note-id'));
    }
    if (event.target.closest('.note .star-btn')) {
        const starImg = event.target.closest('.note .star-btn img');
        const currentSrc = starImg.src;
        if (currentSrc === fullStar) {
            starImg.src = star;
        } else {
            starImg.src = fullStar;
        }

        notes.starNote(event.target.closest('.note').getAttribute('note-id'));
    }
}

const showAllNotes = (starred = false) => {
    const allSidebarItems = document.querySelectorAll('.item');
    allSidebarItems.forEach(item => {
        item.classList.remove('active');
    });

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
    const pageContent = document.querySelector('#page-content');
    const footer = document.querySelector('footer');
    pageContent.appendChild(projectTitle);

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const todoList = document.createElement('div');
    todoList.classList.add('notes-list');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight*2) - (projectTitle.offsetHeight*1.5) - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    projectTitle.style.marginRight = addBtn.offsetWidth + 72 + 'px';
    pageContent.appendChild(todoList);

    allNotes(starred);
}

const allNotes = (starred) => {
    const todoList = document.querySelector('.notes-list');
    let notesList = storage.getNotes()[0].list;
    todoList.innerHTML = '';
    if (starred) {
        notesList = notesList.filter(note => note.starred === true);
        todoList.setAttribute('starred', 'true');
    } else {
        todoList.setAttribute('starred', 'false');
    }

    notesList.reverse(); // Reverse the order of the array
    notesList.forEach((note, index) => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note');
        noteCard.style.width = (todoList.offsetWidth/3.3) + 'px';
        noteCard.setAttribute('note-id', note.id);
        const noteTitle = document.createElement('div');
        noteTitle.classList.add('note-title');
        noteTitle.contentEditable = true;
        noteTitle.textContent = note.title;

        const noteDescription = document.createElement('div');
        noteDescription.classList.add('note-description');
        noteDescription.contentEditable = true;
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

    // Initialize Masonry.js and specify the container element
    masonry = new Masonry(todoList, {
        itemSelector: '.note',
        columnWidth: '.note',
        gutter: 10,
    });

    // Call masonry.layout() after adding the notes to the container
    setTimeout(() => {
        masonry.layout();
    }, 0);

}

export { showAllNotes, allNotes, handleNotes }