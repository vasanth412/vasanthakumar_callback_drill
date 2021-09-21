// Problem 2: Write a function that will return all lists that belong to a board based on
// the boardID that is passed to it from the given data in lists.json. Then pass control
// back to the code that called it by using a callback function.

const list = require('./data/lists.json');

const callBack2 = (id, getListInfo) => {
  setTimeout(() => {
    const result = list[id];
    getListInfo(result);
  }, 2000);
};

module.exports = callBack2;
