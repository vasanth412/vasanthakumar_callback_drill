const cards = require('./data/cards.json');

const callBack3 = (id, getCards) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getCards(id, cards));
    }, 2000);
  });
};

module.exports = callBack3;
