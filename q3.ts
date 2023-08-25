// Name Cases: Store a person’s name in a variable, and then print that person’s 
// name in lowercase, uppercase, and titlecase.

let personName: string = "aSiF ImraN";
console.log (`This is UpperCase Statement:`, personName.toUpperCase());
console.log (`This is LowerCase Statement:`, personName.toLowerCase());
console.log (`This is TitleCase Statement:`, personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase())


export{};
