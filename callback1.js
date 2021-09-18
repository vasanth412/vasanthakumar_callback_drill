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
