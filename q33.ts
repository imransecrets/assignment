// Ordinal Numbers: Ordinal numbers indicate their position in a array, 
// such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
//  Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let num11 : number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, ]
// run loop for numbers
for (let num01 of num11) {
    let ordinal : string;
    // if and else statement for suitabel ordinal from 1 to 3 seperate condition and from 4 to 9 same condition
    if (num01==1){
        ordinal = "st"
    } else if (num01 == 2){
        ordinal = "nd"
    } else if (num01 == 3){
        ordinal = "rd"
    } else
        ordinal = "th"
    console.log (`${num01}${ordinal}`) 
}

export{}
