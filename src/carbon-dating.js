const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) { 

  let type = Number(sampleActivity);

  if (sampleActivity == null || typeof(sampleActivity) !== 'string'){
    return false; 
  }
  if (typeof(type) !== 'number' || type !== type ) {
    return false;
  }
  if (type <= 0 || type > 15) {
    return false;
  }

  let age =  Math.ceil( Math.log(MODERN_ACTIVITY/sampleActivity) / (0.693/HALF_LIFE_PERIOD));
  return age;
}

module.exports = {
  dateSample
};
