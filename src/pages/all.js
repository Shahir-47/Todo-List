const allUI = () => {
    const pageContent = document.querySelector('#page-content');

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';

    pageContent.appendChild(addBtn);

};

const todoItem = (title, details, dueDate, priority) => {
    return { title, details, dueDate, priority };
}

const project = (title = 'default') => {
    let todoList = [];

    const addTodoItem = (title, details, dueDate, priority) => {
        const item = todoItem(title, details, dueDate, priority);
        todoList.push(item);
    }

    const removeTodoItem = (title) => {
        todoList = todoList.filter((item) => item.title !== title);
    }

    return {addTodoItem, removeTodoItem };
}

export default allUI;

// const addTodoItemUI = () => {
