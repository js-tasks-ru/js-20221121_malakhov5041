/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let arr2 = arr.slice();
  arr2.sort(function (a, b) {
    return a.localeCompare(b, 'ru-En-u-kf-upper');
  });

  if (param === 'desc') {
    arr2.reverse();
  }
  return arr2;
}
