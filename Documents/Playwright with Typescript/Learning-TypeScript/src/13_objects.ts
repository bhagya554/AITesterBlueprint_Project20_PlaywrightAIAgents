/*
Objects allow you to store and organize data in key-value pairs.
Objects can also include methods, which are functions that operate on the data within the object.
Objects are created using curly braces {} and properties are defined using key-value pairs.
key is always a string and value can be of any data type, including another object or a function.
You can access the properties of an object using dot notation or bracket notation.
You can also add, update or delete properties of an object.
*/

//Creating an object
let personA={
    name:"bhagya",
    age:34,
    isStudent:true,
    hobbies:["coding","reading","traveling"],
    address:{ 
        street:"123 Main St",
        city:"Hyderabad",
        country:"India"
    }
}

console.log(personA.name); //bhagya
console.log(personA["age"]); //34   
console.log(personA.hobbies[0]); //coding
console.log(personA.address.city); //Hyderabad

//Creating an object by defining type as well
console.log();
console.log("Creating an object by defining type as well");
const personB:{
    name :string,
    age:number,
    isStudent:boolean,
}={
    name:"jaasri",
    age:28,
    isStudent:false
}

console.log(personB.name + " of type: " + typeof personB.name); //jaasri

//Object with methods
let car={
    make:"Toyota",
    speed:200,
    drive():string{
        return "The car is driving fast at " + this.speed + " km/h";
    }
}
console.log(car.drive()); //The car is driving fast at 200 km/h

console.log();
//merge 2 objects using spread operator
console.log("Merging 2 objects using spread operator");
let obj1={name:"Alice",age:30};
let obj2={city:"New York",country:"USA"};
let mergeObj={...obj1,...obj2};
console.log(mergeObj); //{name: "Alice", age: 30, city: "New York", country: "USA"}
console.log(mergeObj.name); //Alice