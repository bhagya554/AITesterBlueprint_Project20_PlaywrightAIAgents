/*
Class is a blueprint of an Object.
It defines the properties and methods that an object can have.
An object is an instance of a class.
It is created using the new keyword and can access the properties and methods defined in the class.
Classes can also have constructors, which are special methods that are called when an object is created.
Constructors are used to initialize the properties of an object.
*/

class Person{
    //instance variables
    name:string;
    id:number;

    constructor(name:string,id:number){
        this.name=name;
        this.id=id;
    }

    greet():string{
        return `Hello,${this.name}, your id is ${this.id}`;
    }
    add(a:number,b:number):number{
        return a+b;
    }
}

const per=new Person("kiran",90);
console.log(per.name); //kiran
console.log(per.id);
console.log(per.greet()); //Hello,kiran, your id is 90

per.name="kkkkk";
per.id=100;
console.log(per.name); //kkkkk
console.log(per.greet()); //Hello,kkkkk, your id is 90

console.log(per.add(12,34)); //46