const promise1 = require('../callback1');

promise1('mcu453ed')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
