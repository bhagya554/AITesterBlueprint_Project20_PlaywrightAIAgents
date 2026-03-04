class Employee_Details{
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

const emp1=new Employee_Details(101,"bhagya",5000000);
console.log(emp1.emp_id); //101 - public variable can be accessed outside class using the object of the class
//console.log(emp1.emp_name); //error - private variable can be accessed only within the class
//console.log(emp1.emp_salary); //error - protected variable can be accessed only within the class and its subclasses
console.log(Employee_Details.message); //Welcome to the company - static variable can be accessed without creating an instance of the class and using the class name
console.log(emp1.getSalaryDetails()); //bhagya has a salary of 5000000
