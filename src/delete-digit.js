const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} 
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let arr = num.toString().split('').map((el) => +el);
  arr.push(Infinity)
  if (arr.length > 1) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i+1]) {
      delete arr[i]
      arr.pop()
      return +arr.join('')
    }
  }
}
}

module.exports = {
  deleteDigit
};
