const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  str = String(str);
  let newStr = '';
  let repeatN = options['repeatTimes'];
  if (repeatN == undefined) {
      repeatN = 1;
  }

  let separatorN = options['separator'];
  if (separatorN == undefined) {
      separatorN = '+';
  }

  let additionN = String(options['addition']);
  if (additionN == 'undefined') {
      additionN = '';
  }

  let additionRepeatTimesN = options['additionRepeatTimes'];
  if (additionRepeatTimesN == undefined) {
      additionRepeatTimesN = 1;
  }

  let additionSeparatorN = String(options['additionSeparator']);
  if (additionSeparatorN == 'undefined') {
      additionSeparatorN = '|';
  }

  for (let i = 0; i < repeatN; i++) {
      let additionStr = '';
      if (additionRepeatTimesN > 0) {
          for (let j = 0; j < additionRepeatTimesN; j++) {
              additionStr = additionStr + additionN + additionSeparatorN;
          }
          additionStr = additionStr.slice(0, - additionSeparatorN.length);
      } else {
          additionStr = '';
      }
      newStr = newStr + str + additionStr + separatorN;
  }
  newStr = newStr.slice(0, - separatorN.length);
  console.log(newStr);
  return newStr;
}

module.exports = {
  repeater
};
