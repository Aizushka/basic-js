const { NotImplementedError } = require('../extensions/index.js');

console.log('hello!!!!')

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



// let ex = [  ['##', 'dd', '00'], ['^^', '..', 'ss'], ['AA', 'dd', 'Oo']]; 
// countCats(ex);

module.exports = {
  countCats
};
