const createItem = (item = { task: item.value, index: itemsArray.length, completed: false }) => {
  const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  itemsArray.push(item);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  // using mock reload for window.location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#enter').addEventListener('click', () => {
    const item = document.querySelector('#item');
    createItem(item.value);
  });
});

module.exports = createItem;
