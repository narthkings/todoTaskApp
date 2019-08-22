const addTodoForm = document.querySelector('.add');
const todosUL = document.querySelector('.todos');
const search = document.querySelector('.search input');

// dynamically adds the todo list in the dom
const addTodo = (text) => {
    const dom = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${text}</span>
                <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    todosUL.innerHTML += dom;
};

// get and submits all values to the  addtodo
addTodoForm.addEventListener('submit', e => {
    e.preventDefault();
    const inputText = e.target.add.value.trim();
    if (inputText.length) {
        addTodo(inputText);
        addTodoForm.reset();
    }

});

// delete the li element
todosUL.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

const filterTodo = (text) => {
    Array.from(todosUL.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(text))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(todosUL.children)
        .filter(todo => todo.textContent.toLowerCase().includes(text))
        .forEach(todo => todo.classList.remove('filtered'));
};


// search for the typed text amongst the todo list
search.addEventListener('keyup', e => {
    const searchtext = search.value.trim().toLowerCase();
    console.log(searchtext);
    filterTodo(searchtext);
});