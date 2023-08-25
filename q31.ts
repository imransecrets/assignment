// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Empty array result with if else condition
let nameEmployee: string [] = [];

if (nameEmployee.length == 0) {
   console.log(`We need to find some users`) }

   else 
        for (let name of nameEmployee){
              
        console.log(`Welcome ${name}`)
}
// Filled array result with if else condition
let nameEmployee2: string [] = ["asif", "Imran", "Noor"];

if (nameEmployee2.length == 0) {
   console.log(`We need to find some users`); 
   }   else 
        for (let name2 of nameEmployee2){
              
        console.log(`Welcome ${name2}`);
}



