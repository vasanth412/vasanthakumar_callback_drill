//Problem 1: Write a function that will return a particular board's information based on 
// the boardID that is passed from the given list of boards in boards.json and then pass control
//  back to the code that called it by using a callback function.

const boards = require('./data/boards.json');

const callBack1 = (id, getInfo) => {
  setTimeout(() => {
    const result = boards.filter((element) => element.id === id);
    getInfo(result);
  }, 2000);
};

module.exports = callBack1;
