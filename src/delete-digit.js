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
  let newN = String(n);
  newN = newN.split('');
     if (newN[0]<newN[1]){
         newN.splice(0, 1);
     } else {
         let smallIndex
         for (let i = 1; i < newN.length; i++) {
             if (newN[i]< newN[i-1]){
                 smallIndex = i;
             }
         }
         newN.splice(smallIndex, 1);
     }

     newN = Number(newN.join(''));
     return newN
 }

module.exports = {
  deleteDigit
};
