// import { expect, jest, test } from '@jest/globals';

// // Import the function to be tested
// import { getFromStorage, saveToStorage } from '../modules/storage.js';

// // Mock the storage functions
// // jest.mock('../modules/storage', () => ({
// //   getFromStorage: jest.fn(),
// //   saveToStorage: jest.fn(),
// // }));

// describe('EDIT_TODO_ITEM', () => {
//   beforeEach(() => {
//     // Clear the mock calls and implementations before each test
//     getFromStorage;
//     saveToStorage;
//   });

//   it('should update the description of a todo item and save it to storage', () => {
//     // Arrange
//     const todoID = 0;
//     const newDescription = 'New description';
//     const mockTodoList = [
//       { todoID: 0, description: 'Old description' },
//       { todoID: 1, description: 'Another item' },
//     ];
//     getFromStorage(mockTodoList);

//     // Act
//     EDIT_TODO_ITEM(todoID, newDescription);

//     // Assert
//     expect(getFromStorage).toHaveBeenCalled(); // Ensure getFromStorage was called
//     expect(saveToStorage).toHaveBeenCalledWith(mockTodoList);

//     // Check if the todo item's description was updated correctly
//     expect(mockTodoList[todoID].description).toBe(newDescription);
//   });
// });
