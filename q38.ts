// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for 
// the country a default value. Call your function for three different cities, at least one of which is
//  not in the default country.

// here Pakistan is default country so initiated in begening of function with paramenters
function describe_city(cityName:string ,  countryName:string = "Pakistan"){
            console.log (`${cityName} is in ${countryName}`);
}
// Now for following, I am giving just city name and default courty is going to be called automatically.
describe_city("Karachi");
describe_city("Lahore");

//Now in following statement becuase city name does not come in default country so I give new value to that parameter
describe_city("Madina", "Saudi Arab");// this one is not in default country beacuse it has been changed here from Pakistan to Saudi Arab