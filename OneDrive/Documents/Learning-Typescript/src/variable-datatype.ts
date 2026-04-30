let num1:number=12
num1=45;
console.log(num1)//45
let num2:number=0.5

//boolean : true or false
//string: "hello", 'hello'
//number: 23,-12,23.5

const NO_OF_STUDENT=23;
//NO_OF_STUDENT=67;

const collName={"cid":23,"cname":"java"}
collName.cname="python"
//collName={}

//I don't care about type safety
let a1:any="playwright"
a1=23;
a1=true;
console.log(a1.toUpperCase())

//I don't know the type of value
let a2:unknown="selenium"
a2=34;
a2=23.47;
if(typeof a2==="string"){
    console.log(a2.toUpperCase())
}
else if(typeof a2 === "number"){
    console.log(a2.toFixed(1))//round off to 1 decimal value - 23.5
}

//union
let multi:number|string;
multi=23;
multi="java"
//multi=false

//Array - store collection of values of same datatype
// 3 way
let students:string[]=["ram","sita","gg"]
console.log(students[2])//ram

//generic array can store collection of values of any datatype
let values:Array<any>=[23,"5",true,12,23]
console.log(values[2])//56

let arr3:number[]=new Array(2)


let differentValues:(number|string)[]=[23,"5",12,23]

//Tuple - fixed size - multiple datatype
let persons:[string,number,boolean]=["star",23,true]
console.log(persons[2]);

//enum - define set of named constant
enum Directions{
    Up,
    Down,
    Left,
    Right
}

let move:Directions=Directions.Left;
console.log(move)//2
console.log(Directions[move])//Left

//Object - {} - collection of key-value pair
let students_Obj:{rollNo:number,name:string}={rollNo:23,name:"hi"};

//=,==,===
//= - assignment operator
//== - Equality 10=='10' -js - true
//=== - strict equity - 10==='10' - js - false
