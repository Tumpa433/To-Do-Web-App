function addTodo() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
    if (task !== '') {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <input type="checkbox">
            <span>${task}</span>
            <button onclick="deleteTodo(this)">Delete</button>
        `;
        todoList.appendChild(li);
        input.value = '';
    }
}

function deleteTodo(btn) {
    const li = btn.parentElement;
    li.remove();
}
