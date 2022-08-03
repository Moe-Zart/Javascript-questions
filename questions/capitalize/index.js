/** Given a sentence, capitalize the first letter of each word and 
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
    const result = []
  const strArr = str.split(' ')
  for(let i of strArr){
    result.push(i[0].toUpperCase() + i.slice(1)) //0 index becomes uppercase, and you are slicing the capitalised letter out
  }
  return result.join(' ')
};

module.exports = capitalize;
