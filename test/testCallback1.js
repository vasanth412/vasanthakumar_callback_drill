const callBack1 = require('../callback1');

function getInfo(id, boards) {
  const result = boards.filter((element) => element.id === id);
  return result;
}

// Function call
const test = async (id, callBack) => {
  const result = await callBack(id, getInfo);
  console.log(result);
};

test('mcu453ed', callBack1);
