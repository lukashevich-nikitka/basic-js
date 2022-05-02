const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    this.array.length
  },
  addLink(value) {
    if (!value) {
      this.array.push('\(' + '\)')
      return this
    } else {
      this.array.push(`${'\( ' + value + ' \)'}`);
    return this
    }
  },
  removeLink(position) {
    if (typeof position !== 'number' || isNaN(position) || position % 1 > 0 || position > this.array.length-1 || typeof position === Boolean) {
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.array.splice(position-1, 1);
    return this
    }
  },
  reverseChain() {
    this.array.reverse()
    return this
  },
  finishChain() {
    return this.array.join('~~')
  },
  array: []
};

module.exports = {
  chainMaker
};
