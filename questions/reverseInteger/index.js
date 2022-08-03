/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
    const reversedInt= parseInt(int.toString().split('').reverse().join(''))
    if(int<0){
        return parseInt('-' +reversedInt)
    }
    
    return reversedInt
};

module.exports = reverseInteger;
