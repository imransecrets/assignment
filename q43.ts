// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
//  with a copy of the array of magicians’ names. Because the original array will be unchanged,
//  return the new array and store it in a separate array. Call show_magicians() with each array 
//  to show that you have one array of the original names and one array with the Great added to each
//  magician’s name.
let magicianNames: string[] = ["Doug Henning", "Siegfried and Roy", "Lance Burton", "Ricky Jay", "Mark Wilson"];

function make_great(names: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let name of names) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}

function show_magicians(names: string[]) {
    for (let name of names) {
        console.log(name);
    }
}

let unchangedMagicians = magicianNames.slice(); // Creating a copy of the original array
let greatMagicians = make_great(unchangedMagicians);

console.log("Original Magicians:");
show_magicians(unchangedMagicians);

console.log("\nGreat Magicians:")
show_magicians(greatMagicians);

export{}