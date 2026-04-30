//Arithmetic - +,-,*,/,%
let a:number=20;
let b:number=5;
console.log(a+b)//25
console.log(a%b)//0
console.log(a/b)//4

//Relational - ==,!=,<,><=,>=
console.log(a>b)//true

//logical  -  &&,||,!
// exp1 - true exp2 - true - true - &&
// exp1 - true exp2 - false - false - &&
// exp1 - false exp2 - true - false - &&
// exp1 - false exp2 - false - false - &&

// exp1 - true exp2 - true - true - ||
// exp1 - true exp2 - false - true - ||
// exp1 - false exp2 - true - true - ||
// exp1 - false exp2 - false - false -||

//exp - true !exp - false

let c:number=12;

console.log(a>b && b>c) //false
console.log(a>b || b>c) //true
console.log(!(a>b || b>c)) //false

//assignment - =,+=,-=,*=,/=,%=
let num=23;
num +=4;
console.log(num)

//unary - single operand - ++,--,-,!
let val:number=23;
console.log(val++)//post increment- 23
console.log(val)//24
console.log(val--)//24

let val2=50;
console.log(--val2)//predecrement - 49
console.log(++val2)//50

//Ternary operator - 
let age:number=120;
let canVote:string=(age>=18)?'Adult':'minor'
console.log(canVote)//minor

//type  - typeof, instanceof, as

let valueTy="type";
console.log(typeof valueTy)//number

class Car{}
let c1=new Car();
console.log(c1 instanceof Car)//true

// as with 'any' type
let val3:any="hello"
console.log(val3.toUpperCase())//HELLO

//as with 'unknown' type
let val4:unknown="world"
console.log((val4 as string).toUpperCase())//WORLD

//concatenation
let part1:string='Hello'
let part2:string=" Typescript! "
let part3:string= " I love coding."
console.log(part1+part2+part3)
console.log(20+30+part1)//50Hello
console.log(part1+20+1)//Hello201

