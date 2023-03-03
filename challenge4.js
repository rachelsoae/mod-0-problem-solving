// 1. Start with an array of strings. Print only the words that include the letter combination "ing".

// Goals: write array of strings, print words that include "ing" anywhere in the word
// Pseudo:
// write array of strings, some including "ing" in the word
// write for statement
// call includes() method on elements of array
// use if statement to print only items where includes() returns true

var activities = ["hiking", "math", "skiing", "wandering", "workout"];

for (i = 0; i < activities.length; i++) {
    if (activities[i].includes("ing")) {
        console.log(activities[i]);
    }
}