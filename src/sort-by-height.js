const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arr1 = [...arr];
  let arr2 = [...arr].sort((a,b) => a-b).flat();
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === -1) {
      delete arr2[i]
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== -1) {
      delete arr1[i]
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === undefined) {
        arr1[i] = arr2[j]
        delete arr2[j]
        arr2.flat()
      }
    }
  }
  return arr1
}

module.exports = {
  sortByHeight
};
