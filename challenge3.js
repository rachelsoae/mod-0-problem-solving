// 1. Given an array of strings, return only the words that begin with the letter "t".

// Goals: write an array of strings and print all words that begin with t (let's assume upper and lowercase)
// Pseudo:
// write array "words" of strings, including words that start with "t"
// write for statement
// write variable for specificWords
// write if statement. call startWith() method on specificWords. if specificWords start with "t"
// write print statement to print specificWords if condition is met

var words = ["today", "Tomorrow", "yesterday"];

for (var i = 0; i < words.length; i++) {
    var specificWord = words[i];

    if (specificWord.startsWith("t") || specificWord.startsWith("T")) {
        console.log(specificWord);
    }
}