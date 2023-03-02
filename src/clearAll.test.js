
// Define the mock implementation of addEventListener
const addEventListenerMock = jest.fn(function(eventName, eventHandler) {
    this.listeners[eventName] = eventHandler;
});

function removeItemsAtIndexes(itemsArray, clearBtn, querySelectorAll, localStorage) {
    // Assign the mock implementation to the clearBtn object
    clearBtn.addEventListener = addEventListenerMock.bind(clearBtn);

    clearBtn.addEventListener('click', () => {
        const checks = querySelectorAll('input[type=checkbox]');
        const indexesToDelete = [];
        checks.forEach((checkbox, i) => {
            if (checkbox.checked) {
                indexesToDelete.push(i);
            }
        });
        const filteredItemsArray = itemsArray.filter((item, i) => !indexesToDelete.includes(i));
        localStorage.setItem('items', JSON.stringify(filteredItemsArray));
        //window.location.reload(); using mock reload for this line
    });
}

// Create a test to simulate a click on the clear button
test('removeItemsAtIndexes calls localStorage and reloads window after click', () => {
    // Arrange
    const itemsArray = ['item1', 'item2', 'item3'];
    const mockClearBtn = {
        listeners: {},
        addEventListener: addEventListenerMock
    };
    const mockQuerySelectorAll = jest.fn(() => [{ checked: true }]);
    const mockLocalStorage = {
        setItem: jest.fn()
    };

    // Spy on the window.location.reload method
    //const reloadSpy = jest.spyOn(window.location.reload, 'reload');
    const mockReload = jest.fn();
    window.location.reload = mockReload;

    removeItemsAtIndexes(itemsArray, mockClearBtn, mockQuerySelectorAll, mockLocalStorage);
  
    // Act
    mockClearBtn.listeners['click'](); // simulate click event
    mockReload()
    // Assert
    expect(mockLocalStorage.setItem).toHaveBeenCalled();
    expect(mockReload).toHaveBeenCalled();
});
