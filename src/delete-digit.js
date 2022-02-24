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
  let arr = String(n).split('');
  return Math.max(...arr.map((e, i) => {
    let newArr = arr.slice();
    newArr.splice(i, 1);
    return +newArr.join('');
  }));
}

module.exports = {
  deleteDigit
};
