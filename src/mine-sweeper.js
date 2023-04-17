const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let result = [];

  for (let row = 0; row < matrix.length; row++) {
    let line = [...matrix[row]];
    result.push([...line]);

    for (let col = 0; col < cols; col++) {
      let mines = 0;

      if (row > 0 && col > 0) { mines += +matrix[row - 1][col - 1]; }
      if (row > 0) { mines += +matrix[row - 1][col]; }
      if (row > 0 && col < cols - 1) { mines += +matrix[row - 1][col + 1]; }

      if (col > 0) { mines += +matrix[row][col - 1]; }
      if (col > 0 && row < rows - 1) { mines += +matrix[row + 1][col - 1]; }

      if (row < rows - 1) { mines += +matrix[row + 1][col]; }
      if (row < rows - 1 && col < cols - 1) { mines += +matrix[row + 1][col + 1]; }
      if (col < cols - 1) { mines += +matrix[row][col + 1]; }

      result[row][col] = mines;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
