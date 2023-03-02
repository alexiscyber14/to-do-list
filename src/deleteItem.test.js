const deleteItem = require('./deleteItem.js');

describe('deleteItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should remove an item from localStorage', () => {
    // Set up localStorage
    const mockReload = jest.fn();
    window.location.reload = mockReload;
    const items = ['item1', 'item2', 'item3'];
    localStorage.setItem('items', JSON.stringify(items));

    // Call deleteItem to remove the second item
    const i = 1;
    deleteItem(i);
    mockReload()
    // Check that the second item was removed
    const updatedItems = JSON.parse(localStorage.getItem('items'));
    expect(updatedItems).toEqual(['item1', 'item3']);
  
    // Create a mock function for window.location.reload
    expect(mockReload).toHaveBeenCalled();
  
  });
});
