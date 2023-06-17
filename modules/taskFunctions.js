class TaskCollection {
  constructor() {
    this.listContainer = document.querySelector('.tasks-container');
    this.description = document.querySelector('#addDo');
    this.completed = false;
    this.taskIndex = 1;
    this.toDoList = [];
    this.editToDo = -1;
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

  removeAll() {
    this.toDoList = this.toDoList.filter(() => false);
    localStorage.setItem('tasks', JSON.stringify(this.toDoList));
  }

  completeTask(todoId) {
    todoId = todoId - 1;
    this.toDoList = this.toDoList.map((task, index) => ({
      ...task,
      completedValue: index === todoId ? !task.completed : this.completed,
    }));

    this.displayTasks();
  }

  displayTasks() {
    this.listContainer.innerHTML = '';
    this.toDoList.forEach((task, index) => {
      index += this.taskIndex;
      this.listContainer.innerHTML += `<li class="task-item" id='${index}'> 
                        <i 
                          class="fa ${
                            task.completedValue ? 'fa-square' : 'fa-square-o'
                          }" 
                          data-action="change"
                        ></i>
                      <p data-action="edit">  ${task.descriptionValue} </p>
                      <i class="fa-solid fa-trash" data-action="delete"></i>
                  </li>`;
    });
  }

  addTask() {
    const descriptionValue = this.description.value;
    const completedValue = this.completed;
    const taskId = this.taskIndex + this.toDoList.length;

    const newTask = { descriptionValue, completedValue, taskId };

    if (this.editToDo >= 0) {
      this.toDoList = this.toDoList.map((task, index) => ({
        ...task,
        descriptionValue:
          index === this.editToDo
            ? newTask.descriptionValue
            : task.descriptionValue,
      }));

      this.editToDo = -1;

      localStorage.setItem('tasks', JSON.stringify(this.toDoList));

      this.displayTasks();
    } else {
      this.toDoList.push(newTask);
      localStorage.setItem('tasks', JSON.stringify(this.toDoList));
      this.displayTasks();
    }
    this.displayTasks();

    this.description.value = '';
  }

  editTask(todoId) {
    todoId -= 1;
    this.description.value = this.toDoList[todoId].descriptionValue;
    this.editToDo = todoId;

    localStorage.setItem('tasks', JSON.stringify(this.toDoList));
    this.displayTasks();
  }
}

export default TaskCollection;
