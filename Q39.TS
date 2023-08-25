// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

let city_country=(cityName:string, countryName:string)=>{
    console.log (`"${cityName}, ${countryName}"`)
}
city_country("Lahore", "Pakistan");
city_country("Madina", "Saudia Arabia")
city_country("Istanmbul", "Turky")

export{}
