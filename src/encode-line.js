const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let array = str.split('');
  let arr = []
  let int = 1
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i+1]) {
      int++
    }
    else if (array[i] !== array[i+1]) {
      arr.push(`${int + array[i]}`)
      int = 1
    }
  }
  return arr.map(function replace(el) {
    if (el[0] == '1') {
      return el[1]
    }
    else {
      return el
    }
  }).join('')
}

module.exports = {
  encodeLine
};
