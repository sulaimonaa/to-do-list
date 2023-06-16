import './styles/main.css';
// import toDoList from '../modules/taskList.js';
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
  const { target } = event;
  const parentElement = target.parentNode;
  const todoId = Number(parentElement.id);
  const { action } = target.dataset;

  if (action === 'delete') {
    taskCollection.removeTask(todoId);
  }
});

taskCollection.storedLocal();
taskCollection.displayTasks();
