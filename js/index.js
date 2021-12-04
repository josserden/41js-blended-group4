const refs = {
  form: document.querySelector('.js-form'),
  todoList: document.querySelector('.js-todo-list'),
};

const todoService = {
  todoList: [],

  createTodo(text) {
    const generateId = () => {
      return Date.now().toString(36) + Math.random().toString(36).substr(2);
    };

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

  todoService.addTodo(todoText);

  const createMarkup = ({ description }) => {
    return `<li class="col card text-white bg-secondary">
            <div class="card-header">My Todo</div>
            <div class="card-body">
              <p class="card-text">${description}</p>
            </div>
          </li>`;
  };

  const todoListGallery = todoService.todoList
    .map(todo => createMarkup(todo))
    .join('');

  refs.todoList.innerHTML = todoListGallery;

  refs.form.reset();
}

refs.form.addEventListener('submit', onSubmit);
