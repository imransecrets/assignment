// Great Magicians: Start with a copy of your program from Exercise 41. Write a function 
// called make_great() that modifies the array of magicians by adding the phrase the Great 
// to each magician’s name. Call show_magicians() 
// to see that the list has actually been modified.

let magicianNames: string[] = ["Doug Henning", "Siegfried and Roy", "Lance Burton", "Ricky Jay", "Mark Wilson"];

function make_great(names: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let name of names) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}

function show_magicians(fullNames: string[]) {
    for (let name of fullNames) {
        console.log(name);
    }
}


let greatMagicians = make_great(magicianNames);
show_magicians(greatMagicians);

export{}
// In this modified code, I've added the make_great() function that takes an array of magician names as input and returns a new array with "the Great" added to each name. Then, the show_magicians() function is still used to display the modified magician names. The output will show the magician names with "the Great" added to them.





