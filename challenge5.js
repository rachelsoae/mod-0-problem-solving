// 1. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!" 

// Goals: write an array of strings that represent travel destinations. Alphabetize the list. print a statement for each element and interpolate the name of the destination into the string.
// Pseudo:
// write array of strings that represent travel destinations
// use sort() to alphabetize the list
// write a variable to represent each array element
// write a sentence with the variable interpolate
// expect the same sentence to appear with a different city name every time, with the travel destinations in alphabetical order

var travelDestinations = ["France", "Scotland", "Busan", "Blyborough Parish", "Japan"];

for (var i = 0; i < travelDestinations.length; i++) {
    var sorted = travelDestinations.sort();
    var destination = travelDestinations[i];

    console.log(`I can't wait to travel to ${destination}!`);
}