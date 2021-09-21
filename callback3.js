// Problem 3: Write a function that will return all cards that belong to a particular list
// based on the listID that is passed to it from the given data in cards.json. Then pass
// control back to the code that called it by using a callback function.

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
