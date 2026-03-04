/*
Tuple is a data structure that can hold a fixed number of values of different data types.
Unlike arrays that allows multiple values of same datatype, tuples can hold values of different data types.
tuples let you define exact type and number of elements.

*/
console.log("Using tuples in TypeScript");
let employee:[number,string,boolean]=[1,"bhagya",true];
console.log(employee[0]);

console.log();

//tuple with optional 
console.log("tuple with optional elements");
let studentDetails:[number,string,boolean?]=[101,"jaasri"];
console.log(studentDetails[0]);
console.log(studentDetails[1]);


console.log();

//tuples with spread operator
console.log("tuples with spread operator");
let empDetails:[string,number,...string[]]=["sahitya",103,"developer","tester","manager"];
console.log(empDetails[4]); //manager

console.log();

//merge 2 tuples
console.log("merging 2 tuples");
let tuple1:[number,string]=[1,"bhagya"];
let tuple2:[boolean,string]=[true,"developer"];
let mergedTuple=[...tuple1,...tuple2];
console.log(mergedTuple); //[1, "bhagya", true, "developer"]