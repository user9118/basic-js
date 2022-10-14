const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(m) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let resilt = [];
  let sum = 0;
  let columns = m.length;
  for (let i = 0; i < columns; i++) {
    resilt = resilt.concat(m[i].filter(item => (item == '^^')))
    
  }
  sum = resilt.length;
  console.log(resilt);
  console.log(sum);
  return sum
}


module.exports = {
  countCats
};
