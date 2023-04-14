const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  let arr = [];
  let nString = String(n);
  for (let i=0; i<nString.length; i++) {
    arr[i] = nString.replace(nString[i], '' );
  }
  arr = arr.sort();
  return Number(arr[arr.length - 1]);
}

module.exports = {
  deleteDigit
};
