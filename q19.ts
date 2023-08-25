
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print 
// a message indicating the number of people you are inviting to dinner.

// question 14 are taken here
let guestList: string[] = ["Maqsood", "Amir", "Umair"]

function guestInvitation (guestName: string): string{
    return (`Salaam, Respected ${guestName}, You are invited on today dinner.`);
}

for (let i=0; i<guestList.length; i++){
    console.log (guestInvitation(guestList[i]));
}

// Here is the code for calling total number of guest 

console.log(`Total Guest invited in number are ${guestList.length}`)

export{}