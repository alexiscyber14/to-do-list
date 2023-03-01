function deleteItem(i) {
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  itemsArray = itemsArray.filter((item, index) => index !== i);
  localStorage.setItem('items', JSON.stringify(itemsArray));
// using mock reload for window.location.reload();
}

module.exports = deleteItem;