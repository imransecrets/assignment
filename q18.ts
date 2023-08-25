// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let placesWorld: string [] = ["Makka", "Madina", "Turkey", "Bagdad", "USA"];

// • Print your array in its original order.
console.log ("Name in orignal order");
    console.log (placesWorld);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Names in Alphabet order as under:");
console.log(placesWorld.slice().sort());

// • Show that your array is still in its original order by printing it.
console.log ("Name still in orignal order");
console.log (placesWorld);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log ("Namme in Reverse alphabet order");
console.log (placesWorld.slice().sort().reverse());

// • Show that your array is still in its original order by printing it again.
console.log ("Name still in orignal order");
console.log (placesWorld);


// • Reverse the order of your list. Print the array to show that its order has changed.
console.log ("Namme in Reverse order")
console.log (placesWorld.reverse());

// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log ("Namme in Reverse order back to origin");
console.log (placesWorld.slice().reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has 
// been changed.
console.log ("Sort your array and stored in Alphabatic order:");
console.log (placesWorld.slice().sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. 
// Print the list to show that its order has changed 
console.log ("change yhour array so its stored in reverse alphabatic order")
console.log (placesWorld.slice().sort((a, b) => b.localeCompare(a)));