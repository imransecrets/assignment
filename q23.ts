// Conditional Tests: Write a series of conditional tests. Print a statement describing each test 
// and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); // This will evaluate to True

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // This will evaluate to False

console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford'); // This will evaluate to True

console.log("Is car === 'toyota'? I predict False.");
console.log(car === 'toyota'); // This will evaluate to False

console.log("Is car.length > 4? I predict True.");
console.log(car.length > 4); // This will evaluate to True

console.log("Is car.length < 3? I predict False.");
console.log(car.length < 3); // This will evaluate to False

console.log("Is car.charAt(0) === 's'? I predict True.");
console.log(car.charAt(0) === 's'); // This will evaluate to True

console.log("Is car.includes('aru')? I predict True.");
console.log(car.includes('aru')); // This will evaluate to True

console.log("Is car.endsWith('ru')? I predict True.");
console.log(car.endsWith('ru')); // This will evaluate to True

console.log("Is car.toUpperCase() === 'SUBARU'? I predict True.");
console.log(car.toUpperCase() === 'SUBARU'); // This will evaluate to True
export{}