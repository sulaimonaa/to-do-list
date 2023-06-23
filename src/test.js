// Import the necessary functions and modules for testing
const { JSDOM } = require('jsdom');
// const { expect } = require('chai');

// Mock the document object using JSDOM
const { window } = new JSDOM(
  '<!DOCTYPE html><html><body><main class="container"><section class="listCont"><div class="title">Today\'s To Do <i class="fa-solid fa-arrows-rotate"></i></div><div id="add"><form action="" class="add-item"><input type="text" placeholder="Add to your list..." name="addDo" id="addDo"/> <i class="fa-solid fa-arrow-turn-down enter"></i><input type="hidden" name="submit" /></form></div><ul class="list tasks-container" data-container="to-do-list-container"></ul><div class="clearCont"><button class="remove-all" type="button">Clear all completed</button></div></section></main></body></html>'
);

// Assign the global variables from the mocked document object
global.document = window.document;
global.getFromStorage = () => []; // Mocked function to retrieve data from storage
global.saveToStorage = (data) => {}; // Mocked function to save data to storage

// Import the function to be tested
import { getFromStorage, saveToStorage } from '../modules/storage';
const ADD_NEW_ITEM = require('../modules/add');
import { removeItem, removeItems } from '../modules/remove';
const EDIT_TODO_ITEM = require('../modules/edit');

describe('ADD_NEW_ITEM', () => {
  it('should add a new item to the storage if input value is not empty', () => {
    // Arrange
    const INPUT_ADD_NEW_ITEM = document.getElementById('addDo');
    const mockValue = 'New task';
    INPUT_ADD_NEW_ITEM.value = mockValue;

    // Act
    ADD_NEW_ITEM();

    // Assert
    const storage = getFromStorage();
    expect(storage.length).to.equal(1);
    expect(storage[0].description).to.equal(mockValue);
    expect(storage[0].completed).to.be.false;
    expect(storage[0].index).to.equal(1);
  });

  it('should not add a new item to the storage if input value is empty', () => {
    // Arrange
    const INPUT_ADD_NEW_ITEM = document.getElementById('addDo');
    INPUT_ADD_NEW_ITEM.value = '';

    // Act
    ADD_NEW_ITEM();

    // Assert
    const storage = getFromStorage();
    expect(storage.length).to.equal(0);
  });

  it('should clear the input field after adding a new item', () => {
    // Arrange
    const INPUT_ADD_NEW_ITEM = document.getElementById('addDo');
    const mockValue = 'New task';
    INPUT_ADD_NEW_ITEM.value = mockValue;

    // Act
    ADD_NEW_ITEM();

    // Assert
    expect(INPUT_ADD_NEW_ITEM.value).to.equal('');
  });
});

// Import the functions to be tested

describe('removeItem', () => {
  beforeEach(() => {
    // Reset the to-do list before each test
    // You may need to mock or set up the toDoListCollection and related functions for testing
  });

  test('removes a single item from the to-do list', () => {
    // Add some to-do items to the list for testing
    // Arrange
    const toDoListCollection = [
      { index: 1, task: 'Task 1', completed: false },
      { index: 2, task: 'Task 2', completed: false },
      { index: 3, task: 'Task 3', completed: false },
    ];

    // Act
    removeItem(2); // Remove item with index 2

    // Assert
    expect(toDoListCollection).toEqual([
      { index: 1, task: 'Task 1', completed: false },
      { index: 2, task: 'Task 3', completed: false }, // The item with index 2 should be removed
    ]);
  });

  test('does not remove any item if the given ID is not found', () => {
    // Add some to-do items to the list for testing
    // Arrange
    const toDoListCollection = [
      { index: 1, task: 'Task 1', completed: false },
      { index: 2, task: 'Task 2', completed: false },
      { index: 3, task: 'Task 3', completed: false },
    ];

    // Act
    removeItem(4); // Remove item with index 4 (not found)

    // Assert
    expect(toDoListCollection).toEqual([
      { index: 1, task: 'Task 1', completed: false },
      { index: 2, task: 'Task 2', completed: false },
      { index: 3, task: 'Task 3', completed: false },
    ]); // The list should remain unchanged
  });
});

describe('removeItems', () => {
  beforeEach(() => {
    // Reset the to-do list before each test
    // You may need to mock or set up the necessary functions and data for testing
  });

  test('removes all completed items from the to-do list', () => {
    // Add some to-do items to the list for testing
    // Arrange
    const toDoListCollection = [
      { index: 1, task: 'Task 1', completed: false },
      { index: 2, task: 'Task 2', completed: true }, // Completed item
      { index: 3, task: 'Task 3', completed: false },
      { index: 4, task: 'Task 4', completed: true }, // Completed item
      { index: 5, task: 'Task 5', completed: false },
    ];

    // Act
    removeItems();

    // Assert
    expect(toDoListCollection).toEqual([
      { index: 1, task: 'Task 1', completed: false },
      { index: 2, task: 'Task 3', completed: false },
      { index: 3, task: 'Task 5', completed: false },
    ]); // The completed items should be removed
  });
});

// Mock the storage functions
jest.mock('../modules/storage', () => ({
  getFromStorage: jest.fn(),
  saveToStorage: jest.fn(),
}));

describe('EDIT_TODO_ITEM', () => {
  beforeEach(() => {
    // Clear the mock calls and implementations before each test
    getFromStorage.mockClear();
    saveToStorage.mockClear();
  });

  it('should update the description of a todo item and save it to storage', () => {
    // Arrange
    const todoID = 0;
    const newDescription = 'New description';
    const mockTodoList = [
      { id: 0, description: 'Old description' },
      { id: 1, description: 'Another item' },
    ];
    getFromStorage.mockReturnValue(mockTodoList);

    // Act
    EDIT_TODO_ITEM(todoID, newDescription);

    // Assert
    expect(getFromStorage).toHaveBeenCalled(); // Ensure getFromStorage was called
    expect(saveToStorage).toHaveBeenCalledWith(mockTodoList); // Ensure saveToStorage was called with the updated list

    // Check if the todo item's description was updated correctly
    expect(mockTodoList[todoID].description).toBe(newDescription);
  });
});
