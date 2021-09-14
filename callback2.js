const list = require('./data/lists.json');

const callBack2 = (id, getListInfo) => {
  setTimeout(() => {
    const results = getListInfo(id, list);
    console.log(results);
  }, 2000);
};

module.exports = callBack2;
