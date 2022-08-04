/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate 
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '  
 *  '####'
 */
//if column = row, add # for every value before it
const steps = (n) => {
for(let row=0;row<n;row++){ //looping over every row (set to n)
    let stepStr = ''//initialise empty string
for(let column=0; column<n;column++){ //looping over every column (set to n)
    if(column<=row){
        stepStr += '#'
    }
    else{
        stepStr+= ' '
    }

}
console.log(stepStr)

}
};

module.exports = steps;
