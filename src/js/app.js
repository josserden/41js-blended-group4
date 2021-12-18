import swal from 'sweetalert';

import refs from './refs';
import { todoService } from './todoService';

todoService.renderFromLS(refs.todoList, 'todos');

function onSubmit(event) {
  event.preventDefault();

  const todoText = event.currentTarget.elements.todoText.value.trim();

  if (!todoText) return swal('Введите текст!', 'error');

  todoService.addTodo(todoText);
  todoService.renderMarkup(refs.todoList);
  refs.form.reset();
}

refs.form.addEventListener('submit', onSubmit);
