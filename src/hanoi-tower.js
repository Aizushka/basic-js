const { NotImplementedError } = require('../extensions/index.js');

/**
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 * 2**N -1
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let obj = {};
    // turns: 0,
    // seconds: 0
  // };
  obj.turns = 2**disksNumber - 1;
  obj.seconds = Math.floor((obj.turns/turnsSpeed)*3600);
  return obj;
}
calculateHanoi(5, 4074);
module.exports = {
  calculateHanoi
};
