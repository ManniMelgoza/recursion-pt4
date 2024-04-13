/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples:

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  // Your code here
  let uniqueArr = [[]]
  if(arr.length === 0) return uniqueArr;

  for (let i = 0; i < arr.length; i++){
    let singleVal = [];
    singleVal.push(arr[i])
    // console.log('Values inside singleVal', singleVal)
    uniqueArr.push(singleVal(arr[i]))
    arr = arr.slice(i + 1)
    singleVal.concat(uniqueArr)
    // // newArr = newArr.concat(flatten(arr[i]));
    uniqueArr =  uniqueArr.concat(subsets(arr[i] + 1))
  }
return uniqueArr;
};

console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
