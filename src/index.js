// import generateJoke from "./jokey"
import './style.css';
// import Icon from './assets/sky.png'
// const image = document.getElementById('land')
// image.src = Icon

const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function createItem(item) {
  itemsArray.push(item.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}
document.querySelector('#enter').addEventListener('click', () => {
  const item = document.querySelector('#item');
  createItem(item);
});

function deleteItem(i) {
  itemsArray.splice(i, 1);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}
function activateDeleteListeners() {
  const deleteBtn = document.querySelectorAll('.deleteBtn');
  deleteBtn.forEach((db, i) => {
    db.addEventListener('click', () => { deleteItem(i); });
  });
}

function activateEditListeners() {
  const editBtn = document.querySelectorAll('.editBtn');
  const updateController = document.querySelectorAll('.update-controller');
  const inputs = document.querySelectorAll('.input-controller textarea');
  editBtn.forEach((eb, i) => {
    eb.addEventListener('click', () => {
      updateController[i].displaye = 'block';
      inputs[i].disabled = false;
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
function displayItems() {
  let items = '';
  for (let i = 0; i < itemsArray.length; i += 1) {
    items += ` <div class="item">
      <div class="input-controller">
          <input id="check" type="checkbox"/>
          <textarea disabled>${itemsArray[i]}</textarea>
          <div class="edit-controller">
              <i class="fa fa-ellipsis-v editBtn"></i>
          </div>
      </div>
      <div class="update-controller">
      <button class="saveBtn">save</button>
      <button class="cancelBtn">cancel</button>
      </div>
              </div>`;
  }
  document.querySelector('.to-do-list').innerHTML = items;
  activateDeleteListeners();
  activateEditListeners();
  activateSaveListeners();
  // #sactivateCancelListeners()
}
window.onload = () => {
  displayItems();
};