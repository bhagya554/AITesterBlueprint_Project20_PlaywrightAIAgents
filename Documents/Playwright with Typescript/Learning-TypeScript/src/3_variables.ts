let age:number=30;
let firstName:string="John";
let isActive:boolean=false;
let city="Delhi"; //automatically treats city as string
//city=123; //error -  as typescript does not allow changing type

const AGE=23;
//AGE=45; //error - cannot reassign a constant variable

const PERSON={"name":"Alice","age":30};
PERSON.age=31; //allowed - as we are not reassigning PERSON but changing its value
//PERSON={"name":"Bob","age":40}; //error - cannot reassign a constant variable