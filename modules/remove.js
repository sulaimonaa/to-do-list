import toDoListCollection from './data.js';
import { getFromStorage, saveToStorage } from './storage.js';

// Function to remove one To-do task
const REMOVE_ONE_ITEM = (todoID) => {
  const INDEX = toDoListCollection.filter(
    (todoItem) => todoItem.index === todoID,
  );
  if (INDEX !== -1) {
    toDoListCollection.splice(INDEX, 1);
  }
  // Refresh the To-do index order
  let counter = 0;
  toDoListCollection.forEach((todoItem) => {
    todoItem.index = counter + 1;
    counter += 1;
  });
};

// Function to remove all completed To-do tasks
const REMOVE_ALL_COMPLETED_ITEMS = () => {
  const UPDATED_LIST = getFromStorage();
  const FILTERED_TASKS = UPDATED_LIST.filter(
    (todoItem) => todoItem.completed === false,
  );

  // Refresh the To-do index order
  for (let i = 0; i < FILTERED_TASKS.length; i += 1) {
    FILTERED_TASKS[i].index = i + 1;
  }
  saveToStorage(FILTERED_TASKS);
};

export {
  REMOVE_ONE_ITEM as removeItem,
  REMOVE_ALL_COMPLETED_ITEMS as removeItems,
};
