const callBack3 = require('../callback3');

const getCards = (id, cards) => {
  const result = cards[id];
  return result;
};

const test = async (id, callBack) => {
  const result = await callBack(id, getCards);
  console.log(result);
};

test('qwsa221', callBack3);
