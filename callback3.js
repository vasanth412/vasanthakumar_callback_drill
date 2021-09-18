const cards = require('./data/cards.json');

const promise3 = (id) => {
  const getPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id != undefined) {
        const cardInfo = cards[id] || '';
        resolve(cardInfo);
      }
      reject('Error');
    }, 2000);
  });
  return getPromise;
};

module.exports = promise3;
