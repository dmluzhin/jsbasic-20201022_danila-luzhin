/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = arr;

  return newArr.filter(function (item) {
    if (a <= item && item <= b ) {
      return item;
    }
  });
}
