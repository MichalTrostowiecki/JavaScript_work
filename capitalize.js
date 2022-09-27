/*jshint esversion: 8 */

function capitalize(string) {
  let firstLetter = string[0];
  const big = firstLetter.toUpperCase();

  const restOfString = string.slice(1);
  const capitalizedWord = big + restOfString;
  return capitalizedWord;
}

module.exports = capitalize;
