// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .
function reverseStr(string) {

	var splited = string.split(' ');
	var endIndex = splited.length;
	console.log(endIndex)
	console.log(splited);
	while(endIndex > 0) {
		splited.push(splited[0]);
		splited = splited.slice(1);
		endIndex-1;
		console.log(endIndex)
	}
	console.log(splited);
	return splited.join(' ');
}
