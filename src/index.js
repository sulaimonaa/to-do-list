import _ from 'lodash';
import './styles/main.css';
import toDoList from '../modules/taskList.js';

const listContainer = document.querySelector('.tasks-container');

const displayTasks = () => {
  let singleTask = '';
  toDoList.forEach((task) => {
    singleTask += `<li class="task-item" id='${task.index}'>
                    <div class="checkList"> <input type="checkbox" name="check"> ${task.description}</div>
                    <i class="fa-solid fa-trash"></i>
                </li>`;
    listContainer.innerHTML = singleTask;
  });
};

window.onload = displayTasks();
