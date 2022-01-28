/* In this kata you have to create all permutations of
an input string and remove duplicates, if present. 
This means, you have to shuffle all letters from the input
in all possible orders.
 */
// solution: https://www.baeldung.com/cs/array-generate-all-permutations
/* Examples:
permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 */
function permutations(string) {
    const array = [...string];

    const preOutArray = [];
    console.log(array);
    for(let i = 0; i < array.length; i+=1){
        const tmpArray = [...array];
        for (let j = 0; j < array.length; j+=1) {
            let tmp = tmpArray[j];
            tmpArray[j] = tmpArray[i];
            tmpArray[i] = tmp;
            preOutArray.push(tmpArray.join(''));
            console.log(tmpArray);
        } 
    }
    const set = new Set(preOutArray);
    console.log(preOutArray);
    console.log(set);
}
permutations("abcd");