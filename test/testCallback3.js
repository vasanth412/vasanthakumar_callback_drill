const promise3 = require('../callback3');

promise3('qwsa221')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
