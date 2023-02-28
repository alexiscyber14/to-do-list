import { itemsArray } from './index.js';

const createItem = (item = { task: item.value, index: itemsArray.length, completed: false }) => {
  itemsArray.push(item);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  window.location.reload();
};
  // createItem()

module.exports = createItem();
