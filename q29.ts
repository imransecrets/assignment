// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
// if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in 
// your array. If the fruit is in your array, the if block should print a statement,
//  such as You really like bananas!

let favourit_fruits :  string [] = ["Mango", "Lechi", "Banana"];

// 1st three if statement with fruits included in array'

if (favourit_fruits.includes("Mango")){
    console.log ("I really like Mango!");
}
if (favourit_fruits.includes("Lechi")){
    console.log ("I really like Lechi!");
}
if (favourit_fruits.includes("Banana")){
    console.log ("I really like Banana!");
}
// Now two if statements with fruit not included in array, these statements will not print 
if (favourit_fruits.includes("Apple")){
    console.log ("I really like Apple but not included!");
}
if (favourit_fruits.includes("Graps")){
    console.log ("I really like Graps but not included!");
}