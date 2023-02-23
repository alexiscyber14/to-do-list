import './style.css';

import { updateCompletedStatus } from './modules/status.js';

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

export { itemsArray };

function activateEditListeners() {
  const editBtn = document.querySelectorAll('.editBtn');
  const updateController = document.querySelectorAll('.update-controller');
  const inputs = document.querySelectorAll('.input-controller textarea');
  editBtn.forEach((eb, i) => {
    eb.addEventListener('click', () => {
      updateController[i].style.display = 'flex';
      editBtn[i].style.display = 'none';
      inputs[i].disabled = false;
    });
  });
}

function activateCancelListeners() {
  const cancelBtn = document.querySelectorAll('.cancelBtn');
  const editBtn = document.querySelectorAll('.editBtn');
  const updateController = document.querySelectorAll('.update-controller');
  const inputs = document.querySelectorAll('.input-controller textarea');
  cancelBtn.forEach((cb, i) => {
    cb.addEventListener('click', () => {
      updateController[i].style.display = 'none';
      editBtn[i].style.display = 'block';
      inputs[i].disabled = true;
      window.location.reload();
    });
  });
}

function updateItem(text, i) {
  itemsArray[i] = text;
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}

function activateSaveListeners() {
  const saveBtn = document.querySelectorAll('.saveBtn');
  const inputs = document.querySelectorAll('.input-controller textarea');
  saveBtn.forEach((sb, i) => {
    sb.addEventListener('click', () => {
      updateItem(inputs[i].value, i);
    });
  });
}

function deleteItem(i) {
  itemsArray = itemsArray.filter((item, index) => index !== i);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}

function activateDeleteListeners() {
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  deleteBtn.forEach((db, i) => {
    db.addEventListener('click', () => { deleteItem(i); });
  });
}

const createItem = (item = { task: item.value, index: itemsArray.length, completed: false }) => {
  itemsArray.push(item);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
};

document.querySelector('#enter').addEventListener('click', () => {
  const item = document.querySelector('#item');
  createItem(item.value);
});

function checkBox() {
  const checks = document.querySelectorAll('input[type=checkbox]');
  const inputs = document.querySelectorAll('.input-controller textarea');
  checks.forEach((ck, i) => {
    ck.addEventListener('change', () => {
      if (checks[i].checked) {
        inputs[i].style.textDecoration = 'line-through';
        inputs[i].style.color = 'grey';
        updateCompletedStatus(i, true);
      } else {
        inputs[i].style.textDecoration = 'none';
        inputs[i].style.color = 'black';
        updateCompletedStatus(i, false);
      }
    });
  });
}

function displayItems() {
  let items = '';
  for (let i = 0; i < itemsArray.length; i += 1) {
    items += ` <div class="item" >
  <div class="input-controller">
      <input type="checkbox" class="complete" name="completed" />
      <textarea disabled>${itemsArray[i]}</textarea>
      <div class="edit-controller">
          <i class="fa fa-ellipsis-v editBtn"></i>
      </div>
  </div>

  <div class="update-controller">
  <button class="saveBtn"><i class="fa fa-save"></i></button>
  <button class="cancelBtn"><i class="fa fa-times"></i></button>
  <button class="deleteBtn"><i class="fa fa-trash"></i></button>
  </div>
          </div>`;
  }
  document.querySelector('.to-do-list').innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  activateCancelListeners();
  checkBox();
}

const clearBtn = document.querySelector('.clean');
clearBtn.addEventListener('click', () => {
  const checks = document.querySelectorAll('input[type=checkbox]');
  const indexesToDelete = [];
  checks.forEach((checkbox, i) => {
    if (checkbox.checked) {
      indexesToDelete.push(i);
    }
  });
  const filteredItemsArray = itemsArray.filter((item, i) => !indexesToDelete.includes(i));
  localStorage.setItem('items', JSON.stringify(filteredItemsArray));
  window.location.reload();
});

window.onload = function () {
  displayItems();
};
