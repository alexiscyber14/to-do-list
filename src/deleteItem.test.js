// import the function to test
const { deleteItem } = require('./index.js');

// mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: key => store[key],
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: key => {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('deleteItem', () => {
  beforeEach(() => {
    // set up a test itemsArray
    const itemsArray = [
      { task: 'Test task 1', index: 0, completed: false },
      { task: 'Test task 2', index: 1, completed: false }
    ];
    localStorage.setItem('items', JSON.stringify(itemsArray));
  });

  test('deletes an item from the itemsArray and localStorage', () => {
    deleteItem(0);
    const itemsArray = JSON.parse(localStorage.getItem('items'));
    expect(itemsArray).toEqual([{ task: 'Test task 2', index: 1, completed: false }]);
  });

  test('does not delete any items when given an invalid index', () => {
    deleteItem(2);
    const itemsArray = JSON.parse(localStorage.getItem('items'));
    expect(itemsArray).toEqual([
      { task: 'Test task 1', index: 0, completed: false },
      { task: 'Test task 2', index: 1, completed: false }
    ]);
  });
});
