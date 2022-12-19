/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (!string || size === 0) {return '';}
  if (size === undefined) { return string; }

  let seen = {};
  let out = [];
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    let item = string[i];
    if (Number.isNaN(seen[item])) {
      seen[item] = 1;
    }

    // если существует следующая буква
    if (seen[string[i + 1]]) {
      // и если буквы не равны, обнуляем эту букву
      if (string[i + 1] !== string[i]) {
        seen[string[i + 1]] = 0;
      }
    }

    if (seen[item] >= size) {continue;}
    out[j++] = item;
    seen[item]++;
  }

  return out.join('');
}
