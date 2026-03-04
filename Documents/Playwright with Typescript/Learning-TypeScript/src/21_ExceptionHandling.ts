//Exception Handling
/*
try - block of code where exception might occur
catch - block of code where you handle the exception
finnally - block of code that will always execute, regardless of whether an exception occurred or not
throw - used to throw an exception manually
*/

class ExceptionHandling{
    static validateNumber(num:number):void{
        if(num<0){
            throw new Error("Negative number is not allowed");
        }
    }

    static main():void{
        try{
           this.validateNumber(-5);
        }
        catch(error:any){
            console.log("Validation error: " + error.message);
        }

        try{
            var numbers:number[]=[1,2,3];
            console.log(numbers[5].toString());
        }
        catch(e:any){
            console.log("Array index error: " + e.message);
        }

        finally{
            console.log("This block will always execute");
        }

        try{
            const a:number=10;
            const b:number=0;
            const result=a/b;//gives infinity - In JS/TS division by zero does not throw an error, it returns Infinity
           
            if(!isFinite(result)){
                throw new Error("Division by zero is not allowed");
         
            }
        }
            catch(e:any){
                console.log("Math error: " + e.message);
            }
        }
    }


ExceptionHandling.main();