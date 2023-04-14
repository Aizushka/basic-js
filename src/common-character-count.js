const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {

  if (s1 =='' || s2 == 0) {
    return 0;
  }

  let ans = '';
  let string1 = s1;
  let string2 = s2;

  for (let i = 0; i<string1.length; i++) {
    for (let j = 0; j<string2.length; j++ ) {
      if (s1[i] == string2[j] ) {
        ans = ans + string1[i]; 
        string2 = string2.replace(string2[j], '',);
        j--;
        break;
      } 
    }
  }
  return ans.length;
}


module.exports = {
  getCommonCharacterCount
};
