const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let iter = 0
  if (n.length !== 17) {
    return false
  }
  else {
    let array = n.split('');
    for (let i = 0; i < 5; i+=3) {
      if (array[i] !== '-') {
        return false
      }
      else {
        for (let i = 0; i < array.length; i++) {
          if (array[i] === '-') {
            ++iter
            if (array[i] !== 5) {
              return  false
            }
          }
          else if (!(isNaN(+array[i])) && +array[i] > 9 || +array[i] < 0) {
            return false
          }
          else if (isNaN(+array[i]) && array[i] > 'F') {
            return false
          }
          else {
            return true
          }
        }
      }
    }
  }
}
module.exports = {
  isMAC48Address
};
