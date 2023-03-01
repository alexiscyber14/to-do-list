const createItem = require('./createItem.js');
// const reload = require('./winload.js');

describe('createItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should add an item to localStorage and reload the page', () => {
    // Call  createItem to add a new item
    const mockReload = jest.fn();
    window.location.reload = mockReload;

    const item = { task: 'New task', index: 0, completed: false };
    createItem(item);
    // Check that the test item was added to localStorage
    mockReload();
    const updatedItems = JSON.parse(localStorage.getItem('items'));

    expect(updatedItems.length).toBe(1);
    expect(updatedItems[0]).toEqual(item);

    // Check that window.location.reload was called
    expect(mockReload).toHaveBeenCalled();
  });
});
