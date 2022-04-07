const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let array = arr.flat()
  let answer = 0;
  for (let i=0; i < array.length; i++) {
    if (array[i] == "^^") {
      answer++
    }
  }
  return answer
}

module.exports = {
  countCats
};
