console.log('hello world');

const todoInput = document.getElementById('todoInput');
const todoButton = document.getElementById('todoButton');
const todoContainer = document.getElementById('todoContainer');

todoButton.addEventListener('click', () => {
  const todoInputValue = todoInput.value;
  const todoList = document.createElement('li');
  todoList.innerHTML = todoInputValue;
  todoContainer.appendChild(todoList);
  // Task 1: Avoid empty todo
  // Task 2: Clear input on add todo
});
