const list = require('./data/lists.json');

const callBack2 = (id, getListInfo) => {
  setTimeout(() => {
    const result = list[id];
    getListInfo(result);
  }, 2000);
};

module.exports = callBack2;
