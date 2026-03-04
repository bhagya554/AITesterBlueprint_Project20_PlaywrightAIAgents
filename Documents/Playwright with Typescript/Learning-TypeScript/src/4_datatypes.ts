/*common types in TypeScript
string - can be defined using single or double quotes - "hello" or 'hello'
boolean - true/false
number - integer, float, negative numbers
*/
let d:number=12.34;
d=56;
d=-78.9;


//special types in TypeScript
//any - can hold any type of value - but it defeats the purpose of TypeScript as typescript is type safe
let a:any="hello";
a=123;
a=true;
console.log(a.toUpperCase());//allows but may cause runtime error if a is not string


//unknown - similar to any but safer to use
let b:unknown="hello";
b=123;
b=true;
b="hello world";
//console.log(b.toUpperCase()); //compile time error - as typescript does not know the type of b at this point
if(typeof b==="string"){
    console.log(b.toUpperCase());
}

//More Types

//Union Types - variable can hold more than one type
let c:string|number;
c="hello";
c=123;

//array - collection of values of same type
//We can define array using two ways
let fruits:string[]=["apple","banana"];
let numbers:number[]=[1,2,3];

let names:Array<string>=["Alice","Bob"];

//Tuple - fixed size array with specific types at each index
let person:[string,number,string,boolean]=["Alice",30,"Engineer",true];

//enum - to define a set of named constants
enum Direction{
    Up,
    Down,
    Left,
    Right
}
let move:Direction=Direction.Up;

//Object - collection of key-value pairs
let student:{rollNo:number,name:string,isActive:boolean}={
    rollNo:101,
    name:"Alice",
    isActive:true
}

/*
= assignment operator
== compares values 1=="10" - true
=== compares values and types 1==="10" - false
*/



