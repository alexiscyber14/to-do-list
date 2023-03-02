const updateCompletedStatus = require('./statusUpdate.js');

describe('updateCompletedStatus function', () => {
    // Set up a mock local storage
    const localStorageMock = (() => {
      let store = {};
      return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
          store[key] = value.toString();
        },
        clear: () => {
          store = {};
        },
      };
    })();
    
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  
    beforeEach(() => {
      // Clear local storage before each test
      localStorageMock.clear();
    });
  
    test('should update the completed status of an item at a given index', () => {
      // Arrange
      const initialItemsArray = [{ task: 'Task 1', index: 0, completed: false }];
      localStorageMock.setItem('items', JSON.stringify(initialItemsArray));
      const index = 0;
      const completed = true;
  
      // Act
      updateCompletedStatus(index, completed);
  
      // Assert
      const updatedItemsArray = JSON.parse(localStorageMock.getItem('items'));
      expect(updatedItemsArray[index].completed).toBe(completed);
    });
  
    test('should update the completed status of a string item at a given index', () => {
      // Arrange
      const initialItemsArray = ['Task 1'];
      localStorageMock.setItem('items', JSON.stringify(initialItemsArray));
      const index = 0;
      const completed = true;
  
      // Act
      updateCompletedStatus(index, completed);
  
      // Assert
      const updatedItemsArray = JSON.parse(localStorageMock.getItem('items'));
      expect(updatedItemsArray[index].completed).toBe(completed);
    });
  
    test('should do nothing if the index is out of bounds', () => {
      // Arrange
      const initialItemsArray = [{ task: 'Task 1', index: 0, completed: false }];
      localStorageMock.setItem('items', JSON.stringify(initialItemsArray));
      const index = 1;
      const completed = true;
  
      // Act
      updateCompletedStatus(index, completed);
  
      // Assert
      const updatedItemsArray = JSON.parse(localStorageMock.getItem('items'));
      expect(updatedItemsArray).toEqual(initialItemsArray);
    });
  });
  