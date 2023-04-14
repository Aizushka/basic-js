const { NotImplementedError } = require('../extensions/index.js');

function countCats(matrix) {

  if ( matrix.length == 0 || matrix == null) {
    return 0;
  }
  let counter = 0;
  for (let i=0; i<matrix.length; i++ ) {
    for (el of matrix[i]) {
      if( el == '^^') {
        counter++
      }
    }
  }
  return counter;
}

module.exports = {
  countCats
};
