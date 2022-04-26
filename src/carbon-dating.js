const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let halfLife = 0.693/5730;
  let answer
  if (isNaN(+sampleActivity/1) || +sampleActivity <= 0 || typeof sampleActivity !== 'string' || Math.ceil((Math.log(15/+sampleActivity))/halfLife)  < 0) {
    answer = false
  }
  else answer = Math.ceil((Math.log(15/+sampleActivity))/halfLife);
  return answer;
}

module.exports = {
  dateSample
};
