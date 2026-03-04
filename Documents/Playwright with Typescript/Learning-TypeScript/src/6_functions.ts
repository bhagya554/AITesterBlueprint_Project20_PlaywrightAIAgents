//Function with no return type
function printHello():void{
    console.log("hello")
}
printHello();

//Function with parameters
function log(msg:string):void{
    console.log(`Printing message: ${msg}`)
}
log("I love coding");

//function with a return type
function sumOf2(a:number,b:number):number{
    return a+b;
}
console.log(sumOf2(12,43));

function greet(name:string):string{
return `hello ${name}`;
}
console.log(greet("bhagya"));

function welcome(name:string,age?:number):string{
    return age?`Hello ${name} with age as ${age}`:`Hello ${name}`;
}
console.log(welcome("bhagya",34));
console.log(welcome("jaasri"))

//arrow function
const multiplyArrow=(a:number,b:number):number => a*b;
console.log(multiplyArrow(23,6));

//function overloading
function combine(a:number,b:number):number;
function combine(a:string,b:string):string;
function combine(a:number,b:number,c:string):string;
function combine(a:any,b:any,c?:any):any{
    if(typeof a === "number" && typeof b=== "number"&& typeof c==="string"){
         return (a+b).toString()+c;
    }
    else if(typeof a === "string" && typeof b=== "string"){
        return a+b;
    }
    else if(typeof a === "number" && typeof b=== "number"){
        return (a+b);
    }

    
}
console.log(combine(2,3,"hello"))
console.log(combine("hello"," world"))
console.log(combine(2,3))
