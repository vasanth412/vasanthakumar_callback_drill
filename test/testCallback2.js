const callBack2 = require('../callback2');

function getListInfo(id, list) {
  const result = list[id];
  return result;
}

const test = async (id, callBack) => {
  const result = await callBack(id, getListInfo);
  console.log(result);
};

test('mcu453ed', callBack2);
