const callBack1 = require('../callback1');

function getInfo(id, boards) {
  const result = boards.filter((element) => element.id === id);
  return result;
}

// Function call
callBack1('mcu453ed', getInfo);
