const { NotImplementedError } = require('../extensions/index.js');

function encodeLine(str) {
  let string = str;
  let answer = '';
  let counter = 1;
    
  for (let i=0; i<string.length;i++) {
    if (string[i] == string[i+1]) {
      counter +=1; 
    } else {
      if (counter > 1 ){
        answer += counter; 
      }
      answer += string[i];
      string = string.slice(i+1);
      i = -1;
      counter = 1;
    }
  }

  return answer;
}

module.exports = {
  encodeLine
};
