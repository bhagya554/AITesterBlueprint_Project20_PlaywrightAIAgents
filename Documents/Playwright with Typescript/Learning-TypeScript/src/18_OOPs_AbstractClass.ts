//If a class is marked as abstract, it cannot be instantiated directly and must be subclassed. 
//Abstract classes can contain both abstract and non-abstract methods. 
//Abstract methods are declared without an implementation and must be implemented by the subclasses. 
//Non-abstract methods can have an implementation in the abstract class and can be inherited by the subclasses.

abstract class WD{
    url:string;

    constructor(url:string){
        this.url=url;
    }

    navigate():void{
        console.log(`Navigating to ${this.url}`);
    } 
    abstract launchBrowser():void;//abstract method does not have a body and must be implemented by the subclasses
}

class CD extends WD{
    constructor(url:string){
        super(url);
    }           

    launchBrowser():void{
        console.log("Launching Chrome Browser");
    }
} 

class FD extends WD{
    constructor(url:string){
        super(url);
    }           
    launchBrowser():void{
        console.log("Launching Firefox Browser");
    }
    
} 

var chrome1=new CD("https://www.google.com");
chrome1.launchBrowser();
chrome1.navigate();
var firefox1=new FD("https://www.redbus.com");
firefox1.launchBrowser();
firefox1.navigate();