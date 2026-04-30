function printHello():void{
    console.log("hello world");
}
printHello();

function greet(name:string):void{
   // console.log("Name is : " ,name)
   //console.log("Name is : " + name)
   console.log(`Name is :${name}`)
}
greet('bhagya')

function add(a:number,b:number):number{
    return a+b
}
console.log("Sum is:",add(45,12))

function enterText(name:string,age?:number):string{
    return age?`Hello ${name} and age is ${age} `:`Hello ${name}`
}

let text1=enterText("bhanu")
console.log(text1)
let text2=enterText("shreya",56)
console.log(text2)

//arrow function
const multiTwo=(a:number,b:number):number => a*b;
let result=multiTwo(10,5);
console.log(result)

//function overloading: same function name - different parameters
function combine(a:number,b:number):number;
function combine(a:string,b:string):string;
function combine(a:number,b:number,c:string):string;
function combine(a:any,b:any,c?:any):any{
    if(c!=undefined){
        return a+b+c
    }
    return a+b
}

console.log(combine('Rahul','Tina'))
console.log(combine(12,23))
console.log(combine(12,56,"playwright"))