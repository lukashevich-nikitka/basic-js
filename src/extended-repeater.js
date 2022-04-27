const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeater = str + (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
  let array = [];
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    array[i] = repeater;
  }
  let answer = array.filter(Boolean);
   return answer.join(`${options.separator}`)
}

module.exports = {
  repeater
};
