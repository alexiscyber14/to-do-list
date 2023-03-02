function updateCompletedStatus(index, completed) {
  const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  const item = itemsArray[index];
  if (typeof item === 'string') {
    itemsArray[index] = { task: item, index, completed };
  } else if (item) { // Add check for defined item
    item.completed = completed;
  }

  localStorage.setItem('items', JSON.stringify(itemsArray));
}

module.exports = updateCompletedStatus;

 