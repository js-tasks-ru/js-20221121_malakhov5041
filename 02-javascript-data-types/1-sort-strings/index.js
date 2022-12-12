/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const arrSort = [...arr];
  arrSort.sort(function (a, b) {
    if (param === 'desc') {
      return b.localeCompare(a, 'ru-En-u-kf-upper');
    }

    return a.localeCompare(b, 'ru-En-u-kf-upper');
  });

  return arrSort;
}
