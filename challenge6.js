// 1. Given a sentence with only lowercase letters, print the same sentence with the first letter of every word capitalized. For example, if you were given "Turing is the best", return "Turing Is The Best" instead!

// Goals: write a sentence with only lowercase letters and then capitalize the start of each word.
// Pseudo:
// write a string containing a sentence with all lowercase letters
// use slice() to cut string after every word + space
// set a variable for each word
// use replace() to capitalize only the first letter of the word
// do specific case first, then see if there's a way to make this a function

var sentence = "turing is the best!"; 

var turing = sentence.slice(0, 7);
var is = sentence.slice(7, 10);
var the = sentence.slice(10, 14);
var best = sentence.slice(14, 19);

var turingUp = turing.replace("t", "T");
var isUp = is.replace("i", "I");
var theUp = the.replace("t", "T");
var bestUp = best.replace("b", "B");

console.log(`${turingUp}${isUp}${theUp}${bestUp}`);

// // Refactor: Is there a way to do any of these in a single step? 


