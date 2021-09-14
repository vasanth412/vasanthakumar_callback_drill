const callBack3 = require('../callback3');

const getCards = (result) => {
  console.log(result);
};

callBack3('qwsa221', getCards);

module.exports = getCards;
