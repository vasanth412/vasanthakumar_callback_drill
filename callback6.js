const boards = require('./data/boards.json');
const callBack1 = require('./callback1');
const callBack2 = require('./callback2');
const callBack3 = require('./callback3');

const callBack6 = (name, callBack) => {
  setTimeout(() => {
    const boardID = boards.filter((item) => item.name === name)[0].id;
    callBack1(boardID, callBack);

    callBack2(boardID, (result) => {
      callBack(result);

      result.forEach(({ id }) => {
        callBack3(id, callBack);
      });
    });
  }, 0);
};

module.exports = callBack6;
