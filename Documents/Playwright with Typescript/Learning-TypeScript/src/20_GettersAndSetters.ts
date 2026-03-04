class emp{
    private _salary:number=0;

    get salary():number{
        console.log("Getting salary details...");
        return this._salary;
    }

    set salary(_salary:number){
        if(_salary>0){
        console.log(`Setting salary to ${_salary}...`);
        this._salary=_salary;
        }
        else{
            console.log("Salary must be greater than 0");
        }
    }
}

const empl1=new emp();
empl1.salary=5000000;//calls setter ,Setting salary details...
console.log(empl1.salary);//calls getter, Getting salary details... 5000000

/*
get salary() - getter method to access the private variable _salary. 
It returns the value of _salary and also logs a message to the console.

set salary(_salary:number) - setter method to set the value of the private variable _salary. 
It takes a parameter _salary and checks if it is greater than 0. 
If it is, it sets the value of _salary and logs a message to the console. 
If it is not, it logs an error message to the console.

We don't call them as functions, we access them as properties of the object.
*/