// There is a special keyboard with all keys in a single row.
// ​
// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25), initially your finger is at index 0.
// To type a character, you have to move your finger to the index of the desired character. 
// The time taken to move your finger from index i to index j is |i - j|.
// ​
// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.
// ​
 
// ​
// Example 1:
// ​
// Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
// Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4. 
// Example 2:
// ​
// Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
// Output: 73
 
// ​
// Constraints:
// ​
// keyboard.length == 26
// keyboard contains each English lowercase letter exactly once in some order.
// 1 <= word.length <= 10^4
// word[i] is an English lowercase letter.

// ​
// HELPERS FUNCTOINS
function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  }
function reduce(array, f, acc) {
    if (acc === undefined) {
      acc = array[0];
      array = array.slice(1);
    }
    each(array, function(element, i) {
      acc = f(acc, element, i);
    });
    return acc;
  }
//////////////////// SOLUTION START BELOW
 var calculateTime = function(keyboard, word) {
 	debugger;
 	 if (keyboard.length !== 26) {
   	return 'keyboard is missing';
   } 
var tottal = 0;
var prevIndx = 0;
 		
for (var i = 0; i < word.length; i++) {
	console.log(keyboard.indexOf(word[i]));
 	tottal +=  keyboard.indexOf(word[i]) - prevIndx  ;
 	prevIndx = keyboard.indexOf(word[i]);
 }
 	return tottal;
}
 
  calculateTime("abcdefghijklmnopqrstuvwxyz","cba")