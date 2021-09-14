const boards = require('./data/boards.json');

const callBack1 = (id, getInfo) => {
  setTimeout(() => {
    const result = boards.filter((element) => element.id === id);
    getInfo(result);
  }, 2000);
};

module.exports = callBack1;
