/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
//convert the array of objects into an array of ids
    let arrayId = arr.map(obj=> obj.id)
//convert the array of ids into an array of unique ids
    let arrayUniqueId = [] //new array to push unique ids into
    for(let i of arrayId) { //loop on iterable objects (e.g:string, array, map, etc) (note: normal for loop is on the indexes)
        if(!arrayUniqueId.includes(i)){
            arrayUniqueId.push(i)
        }
    }
return arrayUniqueId.join(", ")
};

module.exports = stringifyId;
