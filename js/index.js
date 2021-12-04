// Refs
const refs = {
  form: document.querySelector('.js-form'),
};

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const todoService = {
  todoList: [],

  createTodo(text) {
    return {
      id: generateId(),
      description: text,
      completed: false,
    };
  },

  addTodo(text) {
    this.todoList.push(this.createTodo(text));

    return this.updateTodo();
  },

  updateTodo() {
    return this.todoList;
  },
};

function onSubmit(event) {
  event.preventDefault();

  const todoText = event.currentTarget.elements.todoText.value.trim();

  if (!todoText) return alert('Введите текст!');

  console.log(todoService.addTodo(todoText));
  refs.form.reset();
}

refs.form.addEventListener('submit', onSubmit);
