const promise2 = require('../callback2');

promise2('mcu453ed')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
