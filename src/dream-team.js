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
function createDreamTeam(members) {

  if (typeof members !== 'object' || members == null || Array.isArray(members) !== true) {
    return false;
  };
  
  let ans = [];
  let arr = members.filter(function (member) { 
    return (member != null && member != "" || member === 0);
  });
  
  members.forEach( member => {
    if (typeof member !== 'string') {
      arr.splice(arr.indexOf(member), 1);
    } else {
      member = member.trim();
      ans.push(member[0].toUpperCase());
    }
  });

  ans = ans.sort();
  answer = '';
  ans.forEach (letter =>{
    answer = answer + letter;
  });
  return answer;
}

module.exports = {
  createDreamTeam
};