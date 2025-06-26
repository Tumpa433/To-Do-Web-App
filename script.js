// Get references
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

// Load tasks from localStorage when page loads
window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => addTaskToDOM(task));
};

// Add new task
function addTask() {
  const task = input.value.trim();
  if (task === '') {
    alert('Please enter a task.');
    return;
  }

  addTaskToDOM(task);
  saveTask(task);
  input.value = '';
}

// Add task to HTML (DOM)
function addTaskToDOM(task) {
  const li = document.createElement('li');
  li.innerHTML = `<span>${task}</span> <button onclick="removeTask(this)">X</button>`;
  list.appendChild(li);
}

// Save task to localStorage
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task
function removeTask(button) {
  const li = button.parentElement;
  const taskText = li.querySelector('span').innerText;

  // Remove from DOM
  li.remove();

  // Remove from localStorage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks = tasks.filter(t => t !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
