import { getFromStorage, saveToStorage } from './storage.js';

const ADD_NEW_ITEM = () => {
  // Retrieving the To-do task input element
  const INPUT_ADD_NEW_ITEM = document.getElementById('addDo');
  const INPUT_VALUE = INPUT_ADD_NEW_ITEM.value.trim();

  if (INPUT_VALUE) {
    const UPDATED_LIST = getFromStorage();
    const NEW_TODO = {
      description: INPUT_VALUE,
      completed: false,
      index: UPDATED_LIST.length + 1,
    };
    UPDATED_LIST.push(NEW_TODO);
    saveToStorage(UPDATED_LIST);
  }
  INPUT_ADD_NEW_ITEM.value = '';
};

export { ADD_NEW_ITEM as default };
