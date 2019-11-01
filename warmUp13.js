/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    

    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/
function   converter(str) {
var    splitedstr = str.split('');
console.log(str);
   return reduce(splitedstr, function (result, element) {
       if(element !== 'I' ||element !== 'V'||element !== 'X'||element !== 'L'||element !== 'C'||element !== 'D'||element !== 'M'){
        return 'Wrong entry';
       }
       switch (element){
        case 'I':
       return result +1;
       break;
         case 'V':
       return result +5;
       break;
         case 'X':
       return result +10;
       break;
         case 'L':
       return result +50;
       break;
         case 'C':
       return result +100;
       break;
         case 'D':
       return result +500;
       break;
        case 'M':
       return result +1000;
       break;
   }
   },0)
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
function each(array, f) {
    for (var i = 0; i < array.length; i++) {
        f(array[i],i)
    }
}
///
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

//         toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
// USing to uppercase
function toCamelCase(string) {
    var copyOfstring = string;
    result = [];
    result.push(copyOfstring[0].toUpperCase());
        copyOfstring =  copyOfstring.slice(1);
        for (var i = copyOfstring.length - 1; i >= 0; i--) {
           if (copyOfstring[i] === '_') {
                result.push(copyOfstring[i+1].toUpperCase());
                i++;
           } else {
                 result.push(copyOfstring[i];
           }
        }
        return result;
 }

 function filter_list(array) {
     return filter(array, function (element) {
         return typeOf(element === 'number')
     })
 }
