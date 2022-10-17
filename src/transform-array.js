const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
    let result = [];
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == 0) {
                console.log('result');
            } else if (arr[i] == '--discard-prev' && i > 0 && arr[i - 2] != '--discard-next') {
                result.pop();
            } else if (arr[i] == '--discard-prev' && i == 0 || arr[i - 2] == '--discard-next') {

            } else if (arr[i] == '--double-prev' && i > 0) {
                result.push(arr[i - 1]);
            } else if (arr[i] == '--double-prev' && i == 0) {

            } else if (arr[i] == '--discard-next' && i - arr.length - 1 != 0) {
                i++;
            } else if (arr[i] == '--double-next' && i - arr.length - 1 != 0) {
                if (arr[i + 1] == undefined) {
                } else {
                    result.push(arr[i + 1]);
                }
            } else if (arr[i] == '--discard-next' && i - arr.length - 1 == 0) {

            } else if (arr[i] == '--double-next' && i - arr.length - 1 == 0) {
            } else {
                result.push(arr[i]);
            }
        }
        return result;
    } else {
        throw Error("'arr' parameter must be an instance of the Array!");
    }
}

module.exports = {
    transform
};
