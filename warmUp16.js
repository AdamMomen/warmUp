// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.


///SOULTION BELOW...
function StrFormingBalloon(InpStr) {
//if input out of range return a message.
	if (InpStr.length <1 || InpStr.length > 100000) {
		return ' input is either empty OR out of range';
	}
	//output variavle
var result = 0;
//changing to lowercase 
var	splited = InpStr.toLowerCase();
//spliting the string into characters
splited = InpStr.split('');
	for (var i = 0; i < splited.length; i++) {
//checking the each char if it matches the letters of "ballon"	
		if(splited[i] === 'b' ||splited[i] === 'a' || splited[i] === 'l' ||splited[i] === 'o'  ||splited[i] === 'n'  ) {
			result++;
		}	
	}
	// rounding the numbers to be real values without decimals.
	return (Math.floor(result /'balloon'.length));
}
//SOLUTION ENDS !