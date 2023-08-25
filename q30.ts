// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in 
// to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, 
// would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

let userNames: string [] = [ "User1", "User2", "User3", "Admin", "User4"];

// run for loop and check for users if it is admin then attach special message
// else attach normal message throug out loop
for (let users of userNames ){
    if (users == "Admin") {
    console.log (`Hello ${users}, You are special welcome in website!`);
    }
    else { console.log (`Hello ${users}, you are welcome`);
    }
}
