// import the function to test
const { createItem} = require('./index.js');

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

describe('addItem', () => {
  beforeEach(() => {
    localStorage.clear(); // reset localStorage before each test
  });

  test('adds an item to the itemsArray and localStorage', () => {
    const item = { task: 'Test task', index: 0, completed: false };
    createItem(item);
    const itemsArray = JSON.parse(localStorage.getItem('items'));
    expect(itemsArray).toEqual([item]);
  });

  test('adds multiple items to the itemsArray and localStorage', () => {
    const item1 = { task: 'Test task 1', index: 0, completed: false };
    const item2 = { task: 'Test task 2', index: 1, completed: false };
    createItem(item1);
    createItem(item2);
    const itemsArray = JSON.parse(localStorage.getItem('items'));
    expect(itemsArray).toEqual([item1, item2]);
  });
});
