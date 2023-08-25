// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the 
// end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • 
// Use append() to add one new guest to the end of your list. • 
// Print a new set of invitation messages, one for each person in your list.

let guestNames: string[]= ["asif", "amir", "Nasir", "Atif"];
let invitationMessage: string ="You are honourably invited in tomorrow dinner"

// Add a new guest to the list at index 2 after index 1 without deleting any value because of 0
console.log (guestNames.splice(2,0,"Amin"))

// Add a new guest to the beginning of the list
guestNames.unshift("Ishtiaq");

// sir I don't find append() method to add element at last but two ways are dercribed below
// Add a new guest to the end of the list
guestNames.push("Liaqat");

// Add a guest at end with other method
let newGuest = "Tariq";
guestNames = [...guestNames, newGuest];

// create function with parameter of Guest name with invitation message
function invitations (Name:string): string {
    return (`Salaam! ${Name} ${invitationMessage}`)
}

// loop to call every guest
for (let i=0; i<guestNames.length; i++){
        console.log(invitations(guestNames[i]))
}
export{}