// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
//for loop approach
function charCounter(string) {
//first character is not counted , first char is seen for first time.
var result = '1';
var splited = string.split('');
var seenCharCount = 1; 
	for (var i = 1; i < string.length; i++) {
		//reseting the counter each character iterataion 
		seenCharCount = 1;
		//iteration of previos value before the character
		for (var j = i - 1; j >= 0; j--) {
			//if confition if seen character is avaible previos values
			if (splited[i] === splited[j]) {
				seenCharCount++;
			}
		}
		//adding the counter value to result to string
		result+=seenCharCount;
	}
	return result;
}