const boards = require('./data/boards.json');
const promise1 = require('./callback1');
const promise2 = require('./callback2');
const promise3 = require('./callback3');

const promise4 = (name) => {
  setTimeout(() => {
    const boardID = boards.filter((item) => item.name === name)[0].id;

    promise1(boardID)
      .then((boardInfo) => {
        console.log(boardInfo);
        return boardInfo[0].id;
      })
      .then((listID) => promise2(listID))
      .then((listInfo) => {
        console.log(listInfo);
        return listInfo.filter((item) => item.name === 'Mind')[0].id;
      })
      .then((cardID) => promise3(cardID))
      .then((cardInfo) => console.log(cardInfo))
      .catch((err) => console.log('Error'));
  }, 0);
};

module.exports = promise4;
