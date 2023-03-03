// 1. Start with an array of strings with a mix of uppercase and lowercase letters. Print every word in all lowercase letters.

// Goal: print all elements of array in lowercase
// Pseudo:
// write array of strings
// call toLowerCase method on array
// print
// did not work. write for statement and call toLowerCase method on each element.

var mixedCase = ["sPongeBOB", "SQUIDward", "saNDy", "mr. kraBS"];

for (i = 0; i < mixedCase.length; i++) {
    console.log(mixedCase[i].toLowerCase());
}