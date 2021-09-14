const callBack1 = require('../callback1');

function getInfo(result) {
  console.log(result);
}

callBack1('mcu453ed', getInfo);
