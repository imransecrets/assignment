// More Conditional Tests: You don’t have to limit the number of tests you create to 10.
//  If you want to try more comparisons, write more tests. Have at least one True and one 
//  False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

// When condition meats
let city: string = `Lahore`
if (city === 'Lahore')
    {console.log ("Yes your city is Lahore")} else
    {console.log ("Your city is not Lahore")}

// when condition not meats
let city2: string = `Islamabad`
if (city2 === 'Lahore')
    {console.log ("Yes your city is Lahore")} else
    {console.log ("Your city is not Lahore")}
// When condition not meats due to string case

let city3: string = `lahore`
if (city3 === 'Lahore')
    {console.log ("Yes your city is Lahore")} else
    {console.log ("Your city is not Lahore")}

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to

let num1: number = 0
if (num1===10){
    console.log("Your number is 10")
    } else if (num1 > 10) {
    console.log ("Your number is greater than 10");        
    } else
    console.log ("Your number is lessor than 10")

    // • Tests using "and" and "or" operators

const testScores: number[] = [85, 92, 78, 95, 35, 70, 82, 98, 91, 65, 36];
let passingCount: number = 0;

for (const score of testScores) {
    if ((score >= 75 && score !== 70) || score === 100) {
        passingCount++;
    }
}

console.log("Number of students who passed:", passingCount);

export{}