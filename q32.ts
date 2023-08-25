// Checking Usernames: Do the following to create a program that simulates how websites ensure that
//  everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new 
// usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. If a username
//  has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// Step 1: Make a list of current users
const current_users: string[] = ['aSif', 'imran', 'IshfaQ', 'JaVEd', 'atif'];

// Step 2: Make a list of new users
const new_users: string[] = ['ASIF', 'Rashid', 'ishfaq', 'Javed', 'Arshad'];

// Convert current_users to lowercase in array format for case-insensitive comparison
const lowercased_current_users: string[] = current_users.map(user => user.toLowerCase());

//console.log(lowercased_current_users);

 
// Loop through new_users to check uniqueness
for (const new_user of new_users) {
    const lowercase_new_user = new_user.toLowerCase();

    if (lowercased_current_users.includes(lowercase_new_user)) {
        console.log(`Sorry, the username "${new_user}" is already taken. Please choose a different username.`);
    } else {
        console.log(`Congratulations! The username "${new_user}" is available.`);
    }
}
