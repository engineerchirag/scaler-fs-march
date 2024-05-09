function fetchTodo() {
    fetch('https://dummyjson.com/todos')
        .then(res => res.json())
        .then(data => renderTodo(data))
}

function renderTodo(data) {
    console.log(data.todos);
    renderSummary(data.todos.length);
    const todoListRef = document.getElementById('todoList');
    data.todos.forEach(todoObj => {
        createTodo(todoListRef, todoObj.todo, todoObj.completed);
    })
    
}

function renderSummary(count) {
    const completedCountRef = document.querySelector('.summary strong');
    completedCountRef.innerText = count;
}

function createTodo(todoListRef, text, completed) {
    const newLiRef = document.createElement('li');
    newLiRef.innerText = text;
    newLiRef.style.textDecoration = completed ? 'line-through' : 'none';
    todoListRef.appendChild(newLiRef);
    const checkBoxRef = document.createElement('input');
    checkBoxRef.type = 'checkbox';
    checkBoxRef.checked = completed;
    newLiRef.prepend(checkBoxRef);

    const buttonRef = document.createElement('button');
    buttonRef.innerText = 'Remove';
    buttonRef.style.fontSize = '8px';
    buttonRef.style.marginLeft = '10px';
    newLiRef.appendChild(buttonRef);
}

fetchTodo();