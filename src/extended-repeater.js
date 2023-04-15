const { NotImplementedError } = require('../extensions/index.js');

function iterator (string, substring, iterations, separator ) {
  let arr = [];
  for (let i=0; i<iterations; i++) {
    arr.push(string)
    arr.push(substring);
    if ( i !== iterations-1 ) {
      arr.push(separator);
    }
  }
  return arr.join('');
}

function repeater(str, options) {
 
  let repeatTimes;
  'repeatTimes' in options ?  repeatTimes = options.repeatTimes : repeatTimes = 1;
  if (typeof str !== 'string') {
    str = String(str);
  }
  let separator; 
  'separator' in options ? separator = options.separator : separator = '+'; 
  let addition;
  'addition' in options ? addition = options.addition : addition = '';
  if (typeof addition !== 'string') {
    addition = String(addition);
  }
  let additionRepeatTimes;
  'additionRepeatTimes' in options ? additionRepeatTimes = options.additionRepeatTimes : additionRepeatTimes = 1;
  let additionSeparator;
  'additionSeparator' in options ? additionSeparator = options.additionSeparator : additionSeparator = '|';
  
  let substr = iterator(addition, '', additionRepeatTimes,  additionSeparator );

  let ans = iterator(str, substr, repeatTimes, separator);
  return ans;
}

module.exports = {
  repeater
};
