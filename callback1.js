const boards = require('./data/boards.json');

const callBack1 = (id, getInfo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getInfo(id, boards));
    }, 2000);
  });
};

module.exports = callBack1;
