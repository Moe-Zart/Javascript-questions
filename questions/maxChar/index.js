/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
    //S1mpl1f1ed
  let charMap = {}; // empty object
  for (let i of str) { //loops through every iterable object of str (each letter)
    !charMap[i] ? charMap[i] = 1 : charMap[i] += 1 //if there is no charMap[letter], then return the letter with value of one, otherwise, increment if its there
  }
  let max = 0
  let maxCharacter = ''
  
  for (let j in charMap){
    if(charMap[j] > max){
        max = charMap[j]
        maxCharacter = j
    }
  }

  return maxCharacter
};

module.exports = maxCharacter;
