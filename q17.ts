// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
// only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop
// a name from your list, print a message to that person letting them know you’re sorry you can’t invite them
// to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure
// you actually have an empty list at the end of your program.

let guestNames: string[] = ["asif", "amir", "Nasir", "Atif"];
const invitationMessage: string = "You are still invited to tomorrow's dinner";
const invitationDeny: string = "sorry I can’t invite you to dinner.";

console.log("I can only invite two people for dinner.");

// Add a new guest to the list at index 2
guestNames.splice(2, 0, "Amin");

// Add a new guest to the beginning of the list
guestNames.unshift("Ishtiaq");

// Add a new guest to the end of the list
guestNames.push("Liaqat");

// Loop to remove guests and print denial messages
for (let z = 0; z < 3; z++) { // Since there are 3 new guests added
    let nameR2 = guestNames.pop(); // Remove the last guest from the list
    if (nameR2) { // Check if the nameR2 is not null
        console.log(invitationSorry(nameR2)); // Print denial message
    }
}

// Function to create the denial message
function invitationSorry(nameR: string): string {
    return `Salaam! ${nameR}, ${invitationDeny}`;
}

// Loop to print invitation messages for the remaining guests
for (let i = 0; i < guestNames.length; i++) {
    console.log(invitations(guestNames[i]));
}

// Function to create the invitation message
function invitations(nameA: string): string {
    return `Salaam! ${nameA}, ${invitationMessage}`;
}

// Clear the guest list
guestNames = [];

// Print the empty list
console.log("Guest list after removing all guests:", guestNames);

// Export the module
export {};
