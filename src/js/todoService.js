import { v4 as uuidv4 } from 'uuid';
import { saveToLS, getFromLS } from './helpers';
import { createMarkup } from './createMarkup';

export const todoService = {
  todoList: [],

  createTodo(text) {
    return {
      id: uuidv4(),
      description: text,
      completed: false,
    };
  },

  addTodo(text) {
    this.todoList.push(this.createTodo(text));
    saveToLS('todos', this.todoList);

    return this.updateTodo();
  },

  updateTodo() {
    return this.todoList;
  },

  renderMarkup(ref) {
    const markup = this.todoList.map(item => createMarkup(item)).join('');

    ref.innerHTML = markup;
  },

  renderFromLS(ref, key) {
    const data = getFromLS(key);

    if (!data) return;

    this.todoList = data;

    this.renderMarkup(ref);
  },
};
