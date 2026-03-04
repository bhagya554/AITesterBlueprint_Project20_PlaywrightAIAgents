/*
export and import are used to share code between different files in TypeScript.
export is used to export a variable, function, class or interface from a file so that it can be imported in another file.
import is used to import the exported variable, function, class or interface from another file.
*/

import {Employee_Details,addition,something} from "./16_export";

const emp1=new Employee_Details(101,"bhagya",5000000);
console.log(emp1.emp_id); 
console.log(Employee_Details.message); //Welcome to the company - static variable can be accessed without creating an instance of the class and using the class name
console.log(emp1.getSalaryDetails()); //bhagya has a salary of 5000000

console.log(addition(12,45))
console.log(something); //12