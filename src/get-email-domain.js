const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(str) {
  let arr = str.split('').reverse();
  let sbk = arr.indexOf('@');
  let answer = arr.slice(0, sbk);
  return answer.reverse().join('')
}

module.exports = {
  getEmailDomain
};
