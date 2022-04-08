const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  let itrmas = [...array].map(function replace(el) {
    if (typeof el === 'string') {
      return el.replace(/\s+/g, '') 
    }
  })
  let myarr = []
  for (let i = 0; i < itrmas.length; i++) {
    if (typeof itrmas[i] !== 'string') continue;
    myarr.push(itrmas[i][0]) 
  }
  let answer = myarr.map((el) => el.toUpperCase()).sort().join('')
  return answer
}

module.exports = {
  createDreamTeam
};
