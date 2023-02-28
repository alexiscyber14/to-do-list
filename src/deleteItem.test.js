// Import the function to test
import { itemsArray } from './index.js';

const deleteItem = require('./deleteItem.js');
// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Test the deleteItem function
describe('deleteItem', () => {
  beforeEach(() => {
    // Set up the initial items array in localStorage
    localStorage.setItem('items', JSON.stringify(['item1', 'item2', 'item3']));
  });

  afterEach(() => {
    // Clear the localStorage after each test
    localStorage.clear();
  });

  test('should delete an item from the itemsArray and localStorage', () => {
    // Call the deleteItem function with an index of 1
    deleteItem(1);

    // Check that the itemsArray and localStorage have been updated correctly
    expect(localStorage.getItem('items')).toEqual(JSON.stringify(['item1', 'item3']));
    expect(itemsArray).toEqual(['item1', 'item3']);
  });
});
