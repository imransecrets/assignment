// Magicians: Make a array of magician’s names. Pass the array to a function called 
// show_magicians(), which prints the name of each magician in the array.

let magicianNames : string []= ["Doug Henning", "Siegfried and Roy", "Lance Burton", "Ricky Jay", "Mark Wilson"]

function show_magicians(){
    for (let names of magicianNames ){
        console.log (names)
    }
}
show_magicians()