const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr)) {
    let array = [...arr]
    if (array.length == 0) {
      return array
    }
    else {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '--double-next') {
          delete array[i]
          array[i] = arr[i+1]
        }
        else if (array[i] == '--discard-prev') {
          delete array[i];
          delete array[i-1]
        }
        else if (array[i] == '--discard-next') {
          delete array[i];
          delete array[i+1]
        }
        else if (array[i] == '--double-prev') {
          array[i] = array[i-1]
        }
      }
      return array.filter(Boolean)
    }  
  }
  else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform
};
