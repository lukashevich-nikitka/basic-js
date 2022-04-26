const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let newDate = Date.parse(date);
  let rightDate = new Date(newDate)
  let month = rightDate.getMonth();
  if (month < 5 && month > 1) {
    return 'spring'
  }
  else if (month > 4 && month < 8) {
    return 'summer'
  }
  else if (month > 7 && month < 11) {
    return 'autumn'
  }
  else if (month > 10 && month < 13 || month === 1) {
    return 'winter'
  }
  else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
