// Problem 2: Write a function that will return all lists that belong to a board based on
// the boardID that is passed to it from the given data in lists.json. Then pass control
// back to the code that called it by using a callback function.

const list = require('./data/lists.json');

const promise2 = (id) => {
  const getPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id != undefined) {
        const listInfo = list[id];
        resolve(listInfo);
      }
      reject('Error');
    }, 2000);
  });
  return getPromise;
};

module.exports = promise2;
