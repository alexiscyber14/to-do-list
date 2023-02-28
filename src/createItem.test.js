import { itemsArray } from './index.js';

const createItem = require('./createItem.js');

describe('createItem', () => {
  afterEach(() => {
    localStorage.clear();
    itemsArray.length = 0;
  });

  it('should add an item to the itemsArray and localStorage', () => {
    const item = { task: 'Do laundry', index: 0, completed: false };
    createItem(item);
    expect(itemsArray.length).toBe(1);
    expect(itemsArray[0]).toEqual(item);
    expect(localStorage.getItem('items')).toEqual(JSON.stringify(itemsArray));
  });

  it('should add a default item to the itemsArray and localStorage if no argument is provided', () => {
    createItem();
    expect(itemsArray.length).toBe(1);
    expect(itemsArray[0].task).toBe(undefined);
    expect(itemsArray[0].index).toBe(0);
    expect(itemsArray[0].completed).toBe(false);
    expect(localStorage.getItem('items')).toEqual(JSON.stringify(itemsArray));
  });

  it('should reload the window', () => {
    jest.spyOn(window.location, 'reload').mockImplementation(() => {});
    createItem();
    expect(window.location.reload).toHaveBeenCalled();
    window.location.reload.mockRestore();
  });
});
