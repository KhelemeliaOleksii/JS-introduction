/* The goal of this exercise is to convert a string 
to a new string where each character in the new string 
is "(" if that character appears only once 
in the original string, or ")" if that character 
appears more than once in the original string. 
Ignore capitalization when determining if a character 
is a duplicate.*/
/*Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
/*Notes
Assertion messages may be unclear 
about what they display in some languages. 
If you read "...It Should encode XXX", 
the "XXX" is the expected result, not the input! */
function duplicateEncode(word){
    // convert string to lower case   
    const wordToLowerCase = word.toLowerCase();
    // trasform new string to array 
    const tmpArray = wordToLowerCase.split('');
    //check if length of the array of simbols is more than 
    if (tmpArray.length  === 0) {
      return null;
    } else if (tmpArray.length  === 1) {
      return '(';
    } else {
      // create new array with '(' symbol, newArray.length = tmpArray.length 
      const bracketArray = [];
      for (let i = 0; i<=tmpArray.length-1; i+=1){
        bracketArray.push('(');
      }
      // transform bracket from "(" to ")" for repeated elements 
      for (let i = 0; i<=tmpArray.length-1; i+=1){
        // define element to compare
        let tmpComparedElement = tmpArray[i];
        // flag is true if we need to tansform compared element
        let isSameElement = false;
        // let to compare
        for (let j = i+1; j<=tmpArray.length-1; j+=1) {
          if (tmpComparedElement === tmpArray[j]) {
            isSameElement = true;
            bracketArray.splice(j,1,')');
          }
        }
        if (isSameElement) {
          bracketArray.splice(i,1,')');
        }
      }
      return bracketArray.join('');
    }
  }
  console.log(duplicateEncode('qwerty'));