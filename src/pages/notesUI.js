import { storage } from '../functions/storage';
import del from '../assets/img/del.svg';
import star from '../assets/img/star.svg';
import Masonry from 'masonry-layout';

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
    todoList.innerHTML = '';

    // let notesList = storage.getNotes()[0].list;
    let notesList = [
        {
            title: 'Note 1',
            description: 'This is a note',
            starred: false,
            id: 1
        },
        {
            title: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            description: 'This is a note',
            starred: true,
            id: 2
        },
        {
            title: 'Note 3',
            description: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            starred: true,
            id: 3
        },
        {
            title: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            description: 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF',
            starred: false,
            id: 4
        },
        {
            title: Array(72).fill('f').join(''),
            description: Array(276).fill('f').join(''),
            starred: false,
            id: 5
        },


    ];
    notesList.reverse(); // Reverse the order of the array
    notesList.forEach((note, index) => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note');

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
        const starImg = document.createElement('img');
        starImg.src = star;
        starImg.alt = 'Pin Note';
        starBtn.appendChild(starImg);

        buttons.appendChild(starBtn);
        buttons.appendChild(delBtn);

        noteCard.appendChild(noteTitle);
        noteCard.appendChild(noteDescription);
        noteCard.appendChild(buttons);

        todoList.appendChild(noteCard);
    });

    // Initialize Masonry.js and specify the container element
    let masonry = new Masonry(todoList, {
        itemSelector: '.note',
        columnWidth: '.note',
        gutter: 10,
    });

    // Call masonry.layout() after adding the notes to the container
    setTimeout(() => {
        masonry.layout();
    }, 0);

}

export { showAllNotes, allNotes }