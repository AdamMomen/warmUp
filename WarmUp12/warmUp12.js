/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

//   let inputString = '1568141291110137';

function sortingMaxMin(unsortedString, range) { 
    if (range <=0  && range >=100) {
        return 'wrong range entry';
    }

var CpyOfUnsortedString = unsortedString ;
var slicedStr = [];
//var splitted = unsortedString.split('');
//console.log(splitted);
while(slicedStr.length <= range)
for (var i = range; i < 100; i++) {

    //the index of the item to be looked for.
     if (unsortedString.indexOf(i) >=0 ){
        var index = unsortedString.indexOf(i)
        slicedStr.push(CpyOfUnsortedString.slice(index+1, index + 2));
    }
}
return slicedStr;

var min     = splitted[0];
var max     = splitted[0];

// for (var i = 0; i < splitted.length; i++) {
//     if (min > splitted[i]) {    
//         min = splitted[i];
//               }
//         if (max < splitted[i]) {
//             max = splitted[i];
//         }
//     }
// return' max is '+ max + '    min is ' + min ;
//}


//REFACTORING THE ANSWER

function sortingMaxMin(unsortedString, range) { 
    if (range <=0  && range >=100) {
        return 'wrong range entry';
    }

var CpyOfUnsortedString = unsortedString ;
var slicedStr = [];
var splitted = unsortedString.split('');
// while(slicedStr.length <= range)
for (var i = 0; i < splitted.length; i++) {
    var stack = stack.push(splitted[i]+ ) 
   if (splitted.join('')
 {} 
}
}
for (var i = 0; i < splitted.length; i++) {
    if (min > splitted[i]) {    
        min = splitted[i];
              }
        if (max < splitted[i]) {
            max = splitted[i];
        }
    }
return' max is '+ max + '    min is ' + min ;
}
return slicedStr;
}