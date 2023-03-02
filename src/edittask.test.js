// Import the function
const activateEditListeners = require('./edittask.js');

// Create a mock DOM to test against
document.body.innerHTML = `
  <div>
    <button class="editBtn">Edit</button>
    <div class="update-controller" style="display: none;"></div>
    <div class="input-controller">
      <textarea disabled></textarea>
    </div>
  </div>
  <div>
    <button class="editBtn">Edit</button>
    <div class="update-controller" style="display: none;"></div>
    <div class="input-controller">
      <textarea disabled></textarea>
    </div>
  </div>
`;

describe('activateEditListeners', () => {
  test('clicking edit button should enable textarea and show update controller', () => {
    // Call the function
    activateEditListeners();

    // Simulate a click on the first edit button
    const editBtns = document.querySelectorAll('.editBtn');
    editBtns[0].click();

    // Check that the corresponding elements are updated correctly
    const updateControllers = document.querySelectorAll('.update-controller');
    const inputs = document.querySelectorAll('.input-controller textarea');
    expect(updateControllers[0].style.display).toBe('flex');
    expect(editBtns[0].style.display).toBe('none');
    expect(inputs[0].disabled).toBe(false);
  });
});
