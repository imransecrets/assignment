// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.

let guestName: string[]= ["Adil", "Ahmad", "Nasir", "Tahir", "Yasir"];
let GreatingMsg: string = "You are welcome in our comunity";
// use function and call guest with same greating message for all
function greatingAll(guest:string): string {
return (`${guest}, ${GreatingMsg}`);
}
// make a loop to call every array and display in function
for (let i=0; i<guestName.length; i++){
    console.log(greatingAll(guestName[i]))
}