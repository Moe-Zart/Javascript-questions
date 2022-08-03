/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */


 const anagrams = (strA, strB) => {
    const anagramA = strA.toLowerCase().replaceAll(" ","").split('').sort().join()
    const anagramB = strB.toLowerCase().replaceAll(" ","").split('').sort().join()
    return anagramA === anagramB
}


/*
const anagrams = (strA, strB) => {
  const charMapA = buildCharMap(strA);
  const charMapB = buildCharMap(strB);
  if (charMapA.size !== charMapB.size) {
    return false;
  }
  for (const [charA, countA] of charMapA) {
    if (charMapB.get(charA) !== countA) {
      return false;
    }
  }
  return true;
  
};
const buildCharMap = (str) => {
    const charMap = new Map();

    for (const i of removeSpaceAndToLowerCase(str)) {
      charMap.set(i, charMap.get(i) + 1 || 1);
    }
    return charMap;
  };
const removeSpaceAndToLowerCase = (str) => {
  return str.replaceAll(" ", "").toLowerCase();
};

*/
module.exports = anagrams;
