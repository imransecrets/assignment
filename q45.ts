// Cars: Write a function that stores information about a car in a Object. The function should always
//  receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
//  Call the function with the required information and two other name-value pairs, such as a color or 
//  an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer1: string, model1: string, ...extras1: any[]) {
    const carInfo = {
        manufacturer: manufacturer1,
        model: model1,
        extras: extras1
    };
    return carInfo;
}

const car = createCar("Toyota", "Camry", "Blue", "Sunroof", "Navigation");
console.log("Car Information:");
console.log(car);
export{}
