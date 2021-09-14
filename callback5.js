const boards = require('./data/boards.json');
const callBack1 = require('./callback1');
const callBack2 = require('./callback2');
const callBack3 = require('./callback3');

const callBack5 = (name, callBack) => {
  setTimeout(() => {
    const boardID = boards.filter((item) => item.name === name)[0].id;
    callBack1(boardID, callBack);

    callBack2(boardID, (result) => {
      callBack(result);

      let listID = result.filter((item) => item.name === 'Mind')[0].id;
      callBack3(listID, callBack);

      listID = result.filter((item) => item.name === 'Space')[0].id;
      callBack3(listID, callBack);
    });
  }, 0);
};

module.exports = callBack5;
