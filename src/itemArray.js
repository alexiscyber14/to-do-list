const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
const itemsArray = localStorageMock.getItem('items') ? JSON.parse(localStorageMock.getItem('items')) : [];

module.exports = itemsArray;