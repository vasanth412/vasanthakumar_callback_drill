const boards = require('./data/boards.json');

const callBack1 = (id, getInfo) => {
  setTimeout(() => {
    const info = getInfo(id, boards);
    console.log(info);
  }, 2000);
};

module.exports = callBack1;
