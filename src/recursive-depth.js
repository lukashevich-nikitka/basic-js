const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.iter = 1
  }
  calculateDepth(arr) {
    if (arr.some((el) => el instanceof Array)) {
        ++this.iter
        return this.calculateDepth(arr.flat(1));
      } else {
        const k = this.iter;
        this.iter = 1;
        return k
      }
    }
  }


module.exports = {
  DepthCalculator
};
