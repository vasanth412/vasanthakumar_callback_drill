// Problem 1: Write a function that will return a particular board's information based on
// the boardID that is passed from the given list of boards in boards.json and then pass
// control back to the code that called it by using a callback function.

const boards = require('./data/boards.json');

const promise1 = (id) => {
  const getPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id != undefined) {
        const boardInfo = boards.filter((element) => element.id === id);
        resolve(boardInfo);
      }
      reject('Error');
    }, 2000);
  });
  return getPromise;
};

module.exports = promise1;
