const callBack2 = require('../callback2');

function getListInfo(id, list) {
  const result = list[id];
  return result;
}
callBack2('mcu453ed', getListInfo);
