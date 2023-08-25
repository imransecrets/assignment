// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. 
// You’ll have to think of someone else to invite.

let guestNames: string[]= ["asif", "amir", "Nasir", "Atif"];
let invitationMessage: string ="You are honourably invited in tomorrow dinner"

// here go to index 2 and delete one value which is Nasir and take new value which is Awais
guestNames.splice(2,1, "Awais" );

// Running function  for invitation as in previous examples
function invitations (Name:string): string {
    return (`Salaam! ${Name} ${invitationMessage}`);
}
// using loop to call every guset
for (let i=0; i<guestNames.length; i++){
        console.log(invitations(guestNames[i]));
}
export{}