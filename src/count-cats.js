const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let num = 0;

  for(let arr of matrix) {
    for(let item of arr) {
      if(item === "^^") {
        num += 1;
      }
    }
  }

  return num;
};
