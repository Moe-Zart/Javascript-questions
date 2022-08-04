/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step 
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
    //n = 3
    //  # 
    // ### 
    //#####
let columnWidth = n * 2 -1 //set a pattern between inputted number and the column width
let middle = Math.floor(columnWidth/2)
  for(let row = 0; row<n; row++){ 
      let level= ''
      for(let column = 0; column<columnWidth;column++){
        //print # for every element from the middle - the row index and + the row index
        if(column >= middle - row && column<= middle + row ){
        //column second half - row   column first half
        level+= '#'
        }
        else{
            level +=" "
        }
    }
  console.log(level)
    }
};

module.exports = pyramid;
console.log()
