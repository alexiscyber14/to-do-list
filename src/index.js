import './style.css';

const itemsArray = [
  {
    description: 'Do the laundry',
    completed: false,
    index: 0,
  },
  {
    description: 'wash dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Go balling',
    completed: false,
    index: 2,
  },
];

function displayItems() {
  let items = '';
  for (let i = 0; i < itemsArray.length; i += 1) {
    items += ` <div class="item">
      <div class="input-controller">
          <input id="check" type="checkbox"/>
          <textarea disabled>${itemsArray[i].description}</textarea>
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
}
window.onload = () => {
  displayItems();
};