// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, 
// inviting them to dinner.

let guestList: string[] = ["Maqsood", "Amir", "Umair"]

// create a funtion where return guestName with message
function guestInvitation (guestName: string): string{
    return (`Salaam, Respected ${guestName}, You are invited on today dinner.`);
}

// create a for loop to call every guest one by one in function with message
for (let i=0; i<guestList.length; i++){
    console.log (guestInvitation(guestList[i]));
}

export{}