import { getFromStorage, saveToStorage } from './storage.js';

const EDIT_TODO_ITEM = (todoID, newDescription) => {
  const UPDATED_LIST = getFromStorage();
  UPDATED_LIST[todoID].description = newDescription;
  saveToStorage(UPDATED_LIST);
};

export { EDIT_TODO_ITEM as default };
