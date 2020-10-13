const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  return [].concat(...matrix).filter(e => e === '^^').length

  throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
