const allUI = () => {
    const pageContent = document.querySelector('#page-content');
    const footer = document.querySelector('footer');

    const addBtn = document.createElement('button');
    addBtn.classList.add('add-btn');
    addBtn.textContent = '+';
    pageContent.appendChild(addBtn);

    const todoList = document.createElement('div');
    todoList.classList.add('todo-list');
    todoList.style.maxHeight = pageContent.offsetHeight - (footer.offsetHeight * 2) - 16 + 'px';
    todoList.style.marginRight = addBtn.offsetWidth + 64 + 'px';
    pageContent.appendChild(todoList);

};


const project = ((title = 'default') => {
    let todoList = [];

    const addTodoItem = (title, details, dueDate, priority) => {
        todoList.push({ title, details, dueDate, priority });
    }

    const removeTodoItem = (title) => {
        todoList = todoList.filter((item) => item.title !== title);
    }

    const getTodoList = () => todoList;

    return {addTodoItem, removeTodoItem, getTodoList };
})();

export default allUI;

export { project };

// const addTodoItemUI = () => {
