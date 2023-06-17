import './styles/main.css';
import TaskCollection from '../modules/taskFunctions.js';

const addToDoBtn = document.querySelector('.enter');
const addThrEnter = document.querySelector('form');

const taskCollection = new TaskCollection();

addToDoBtn.addEventListener('click', (event) => {
  event.preventDefault();
  taskCollection.addTask();
});

addThrEnter.addEventListener('submit', (event) => {
  event.preventDefault();
  taskCollection.addTask();
});

const taskItems = document.querySelector('.tasks-container');
taskItems.addEventListener('click', (event) => {
  event.preventDefault();
  const { target } = event;
  const parentElement = target.parentNode;
  const todoId = Number(parentElement.id);

  const { action } = target.dataset;

  function performCheckAction(action, todoId) {
    if (action === 'check') {
      taskCollection.completeTask(todoId);
    } else if (action === 'edit') {
      taskCollection.editTask(todoId);
    } else if (action === 'delete') {
      taskCollection.removeTask(todoId);
    }
  }

  performCheckAction(action, todoId);
});

taskCollection.storedLocal();
taskCollection.displayTasks();
