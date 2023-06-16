class TaskCollection {
  constructor() {
    this.listContainer = document.querySelector('.tasks-container');
    this.description = document.querySelector('#addDo');
    this.completed = false;
    this.taskIndex = 1;
    this.toDoList = [];
  }

  storedLocal() {
    if (localStorage.getItem('tasks') == null) {
      localStorage.setItem('tasks', JSON.stringify(this.toDoList));
    }

    const store = localStorage.getItem('tasks');
    if (store) {
      this.toDoList = JSON.parse(store);
    }
  }

  removeTask(index) {
    const passIndex = index - 1;
    this.toDoList = this.toDoList.filter(
      (task, taskIndex) => taskIndex !== passIndex
    );
    localStorage.setItem('tasks', JSON.stringify(this.toDoList));
    for (let i = 0; i < this.toDoList.length; i += 1) {
      this.toDoList[i].index = i;
    }

    this.displayTasks();
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.toDoList.forEach((task, index) => {
      index += this.taskIndex;
      this.listContainer.innerHTML += `<li class="task-item" id='${index}'>
                      <div class="checkList" data-action="check"> <input type="checkbox" name="check" class="complete"> ${task.descriptionValue}</div>
                      <i class="fa-solid fa-trash" data-action="delete"></i>
                  </li>`;
    });
  }

  addTask() {
    const descriptionValue = this.description.value;
    const completedValue = this.completed;
    const taskId = this.taskIndex;

    const newTask = { descriptionValue, completedValue, taskId };

    this.toDoList.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(this.toDoList));

    this.displayTasks();

    this.description.value = '';
  }
}

export default TaskCollection;