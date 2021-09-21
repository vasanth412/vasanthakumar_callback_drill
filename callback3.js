// Problem 3: Write a function that will return all cards that belong to a particular list 
// based on the listID that is passed to it from the given data in cards.json. Then pass 
// control back to the code that called it by using a callback function.

const cards = require('./data/cards.json');

const callBack3 = (id, getCards) => {
  setTimeout(() => {
    const result = cards[id] || '';
    getCards(result);
  }, 2000);
};

module.exports = callBack3;
