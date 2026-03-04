export var something:number=12;

export function addition(a:number,b:number):number{
return a+b;
}

export class Employee_Details{
    public emp_id:number;//instance variable can be accessed using the object of the class
    private emp_name:string;//private variable can be accessed only within the class
    protected emp_salary:number;
   
    static message:string="Welcome to the company";//static variable belongs to the class and can be accessed without creating an instance of the class 

    constructor(emp_id:number,emp_name:string,emp_salary:number){
        
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_salary=emp_salary;
       
    }

    getSalaryDetails():string{
        var department:string="IT";//local variable can be accessed only within the method
        return `${this.emp_name} has a salary of ${this.emp_salary} and department is ${department}`;
    }
}


