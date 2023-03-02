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

module.exports = activateEditListeners;
