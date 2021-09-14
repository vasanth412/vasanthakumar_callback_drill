const list = require('./data/lists.json');

const callBack2 = (id, getListInfo) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getListInfo(id, list));
    }, 2000);
  });
};

module.exports = callBack2;
