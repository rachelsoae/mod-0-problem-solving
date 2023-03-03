// 1. Given an array of strings, return only the strings that have exactly 4 characters.

// Goals: create array of strings, print only elements that are exactly 4 characters in length
// Pseudo:
// create array of strings, some with exactly 4 characters
// use for statement
// write if statement for string length is exactly 4
// print statement should only apply to length is 4

var words = ["four", "father", "write", "does", "water", "how?"];

for (i = 0; i < words.length; i++) {
    if (words[i].length === 4) {
        console.log(words[i]);
    }
}