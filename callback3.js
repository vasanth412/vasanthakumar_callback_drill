const cards = require('./data/cards.json');

const callBack3 = (id, getCards) => {
  setTimeout(() => {
    const result = cards[id] || '';
    getCards(result);
  }, 2000);
};

module.exports = callBack3;
