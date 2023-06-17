import addNewTodoItem from '../modules/add.js';
import createTodoItem from '../modules/display.js';
import { removeItems } from '../modules/remove.js';
import './styles/main.css';

const FORM_ADD_NEW_ITEM = document.querySelector('.add-item');
FORM_ADD_NEW_ITEM.addEventListener('submit', (event) => {
  event.preventDefault();
  addNewTodoItem();
  createTodoItem();
  document.location.reload();
});

const REMOVE_ALL_BUTTON = document.querySelector('.remove-all');
REMOVE_ALL_BUTTON.addEventListener('click', (event) => {
  event.preventDefault();
  removeItems();
  document.location.reload();
});
