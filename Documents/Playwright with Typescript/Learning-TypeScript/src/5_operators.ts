//Operators in TypeScript are used to perform operations on variables and values.
// TypeScript supports various types of operators, including arithmetic, comparison, logical, assignment, and more. Here are some examples:

// Arithmetic Operators - +, -, *, /, %
let a1:number=10;
let b1:number=3;
console.log(a1+b1); //13
console.log(a1-b1); //7
console.log(a1/b1); //3.3333
console.log(a1*b1); //30
console.log(a1%b1); //1

// Comparison Operators - ==, !=, >, <, >=, <=

console.log(a1==b1); //false
console.log(a1!=b1); //true
console.log(a1>b1); //true
console.log(a1<b1); //false
const f1:number=5;
const f2:number=10;
console.log(f1!==f2); //true
console.log((5 as number)!=(6 as number)); //true
//console.log(5!=6);
//give compile time error if we do not specify type as number. 
// However,this is allowed in JavaScript. TypeScript enforces type safety.

// Logical Operators - &&, ||, !
let isAdult:boolean=true;
let hasLicense:boolean=false;
console.log(isAdult && hasLicense); //false
console.log(isAdult || hasLicense); //true
console.log(!isAdult); //false

// Assignment Operators - =, +=, -=, *=, /=
a1=10;
a1+=3; //a1=a1+3 -> 13
a1-=2; //a1=a1-2 -> 11
a1*=2; //a1=a1*2 -> 22
a1/=3; //a1=a1/3 -> 
console.log("value:",a1); //7.3333

//Unary Operators - single operand - ++, --, -,!
let count:number=10;
console.log(++count); //11
console.log(count++); //11
console.log(count); //12
console.log(--count); //11
console.log(count--); //11
console.log(-count); //-10
console.log(!(5>3)); //false

//Ternary Operator - condition ? expr1 : expr2
let age1:number=20;
let canVote:string=(age1>=18)?"Adult":"Minor";
console.log(canVote);

//Type Operator - as,typeof, instanceof
//Usage of 'as' operator in any and unknown types
let welcomeMessage:any="Hello TypeScript";// Works even without 'as' (unsafe): 
console.log(welcomeMessage.toUpperCase()); // With 'as' (compiler now treats it as string): 
console.log((welcomeMessage as string).toUpperCase()); 


let value: unknown = "hello";
//console.log(value.toUpperCase());// ❌ Error: Object is of type 'unknown'
console.log((value as string).toUpperCase());// ✅ Must assert first using as

//typeof operator - to get the type of a variable at runtime
let sampleNumber:number=42;
console.log(typeof sampleNumber); // "number"

//instanceof operator - to check if an object is an instance of a particular class or interface
let date=new Date();
console.log(date instanceof Date); //true

//Concatenation Operator - +
let part1: string="Hello, ";
let part2: string="TypeScript!";
let part3: string=" I love coding.";
console.log(part1+part2+part3); // "Hello, TypeScript! I love coding."
console.log(10+20+part1+part2); //"30Hello, TypeScript!"
console.log(part1+(10+20)+part2); //"Hello, 30TypeScript!"