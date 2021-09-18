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
