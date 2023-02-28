import { itemsArray } from './index.js';

function deleteItem(i) {
  itemsArray = itemsArray.filter((item, index) => index !== i);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
}

module.exports = deleteItem();